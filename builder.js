import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = "claude-sonnet-4-6"; 

const chapters = [
  { ch: "01", slug: "what-is-business-analytics", title: "Chapter 1: What is Business Analytics and Data Science", tool: "Google Colab & Gemini", desc: "Introductory concepts, data science vs analytics." },
  { ch: "02", slug: "data-mining", title: "Chapter 2: Data Mining", tool: "NotebookLM", desc: "Predictive modeling, classification, clustering." },
  { ch: "03", slug: "text-and-web-mining", title: "Chapter 3: Text and Web Mining", tool: "Google AI Studio", desc: "NLP, scraping, sentiment analysis." },
  { ch: "04", slug: "data-visualization", title: "Chapter 4: Data Visualization", tool: "Manus", desc: "Dashboards, charting, storytelling + Midterm Activity (building a business with analytics)." },
  { ch: "05", slug: "impact-of-ai", title: "Chapter 5: The Impact of AI on Business Analytics", tool: "Claude.ai", desc: "How AI has disrupted traditional analytics workflows." },
  { ch: "06", slug: "agentic-ai", title: "Chapter 6: Agentic AI and the Impact on Business Analytics", tool: "Vapi.ai", desc: "Autonomous agents, multi-agent systems in business." },
  { ch: "07", slug: "voice-agents", title: "Chapter 7: Voice Agents", tool: "Any tool", desc: "Conversational AI, voice interfaces for data." },
  { ch: "08", slug: "vibe-coding", title: "Chapter 8: Vibe Coding", tool: "Any tool", desc: "Natural language programming, code generation via LLMs." },
  { ch: "09", slug: "future-of-analytics", title: "Chapter 9: The Future of Analytics", tool: "Any tool", desc: "Future trends + Final Project (presentation pitch)." }
];

async function generateText(prompt) {
  let fullText = "";
  let messages = [{ role: "user", content: prompt }];
  while (true) {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": ANTHROPIC_KEY,
        "anthropic-version": "2023-06-01",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 8192,
        messages: messages
      })
    });
    const data = await res.json();
    if (!data.content || !data.content[0]) throw new Error("API Failure: " + JSON.stringify(data));
    
    const text = data.content[0].text;
    fullText += text;
    
    if (data.stop_reason === "max_tokens") {
      console.log("Hit max tokens, continuing...");
      messages.push({ role: "assistant", content: text });
      messages.push({ role: "user", content: "Continue exactly from where you left off. Do not repeat anything. Just continue the next word." });
    } else {
      break;
    }
  }
  return fullText;
}

function addChapterToToc(mystYml, chapterFile, chapterTitle) {
  const lines = mystYml.split('\n');
  const tocIndex = lines.findIndex(l => l.trim() === 'toc:');
  if (tocIndex === -1) return mystYml;
  let i = tocIndex + 1;
  while(i < lines.length && lines[i].startsWith('    -')) { i++; }
  lines.splice(i, 0, `    - file: ${chapterFile}\n      title: "${chapterTitle}"`);
  return lines.join('\n');
}

async function buildChapter(chapter) {
  console.log(`\n\n--- Building ${chapter.title} ---`);
  const outPath = `chapters/ch${chapter.ch}-${chapter.slug}.md`;
  if (fs.existsSync(outPath)) { console.log(`Skipping ${chapter.title}, already exists.`); return; }
  
  const prompt = `You are a professional textbook author writing "ISM 6405 Advanced Business Analytics" for graduate students at Florida Atlantic University (FAU).
Write ${chapter.title}. Tone: Explanatory, engaging, real-world focused, AI-era aware.
Author: Dr. Ernesto Lee.
This chapter covers: ${chapter.desc}.
The hands-on activity must use: ${chapter.tool}.
Length: ~${chapter.ch === "09" ? 2000 : 7000} words. Be incredibly comprehensive, academic but accessible.

REQUIRED ELEMENTS:
1. Start with the YAML frontmatter:
---
title: "${chapter.title}"
short_title: "${chapter.title.split(': ')[1]}"
description: "Comprehensive guide to ${chapter.desc}"
label: ch-${chapter.ch}-${chapter.slug}
tags: [analytics, business, ai]
---
2. Immediately after the H1 title, include a MyST figure for the mandatory infographic:
:::{figure} ../images/ch${chapter.ch}-hero.png
:label: fig-ch${chapter.ch}-hero
:alt: Professional textbook illustration infographic for ${chapter.title}. Clean modern infographic style. Blue and orange color scheme.
:width: 80%
:align: center

Explainer Infographic: ${chapter.title}.
:::
3. Write extensive sections using MyST formatting (notes, warnings, tabs, dropdowns, prf:definition, code blocks). Use paragraphs.
4. Include exactly 9 MORE image placeholders using MyST syntax referencing \`../images/ch${chapter.ch}-figX.png\` (where X is 1 to 9) with descriptive prompts in the \`:alt:\` field. The \`:alt:\` field MUST start with "Professional textbook illustration... Clean modern infographic style... Blue and orange..."
${chapter.ch !== "09" ? "5. Include 1 Discussion Question based on a real case study." : "5. DO NOT include any discussion questions, quizzes, or hands-on activities."}
${chapter.ch !== "09" ? "6. Include 1 Quiz of 10 questions (just the questions)." : ""}
${chapter.ch !== "09" ? "7. Include 1 Hands-On Activity using " + chapter.tool + "." : ""}
${chapter.ch === "04" ? "8. Include the Midterm Activity (building a business using analytics) in this chapter." : ""}
${chapter.ch === "09" ? "6. Include the Final Project (capstone, student's passion project, mandatory 7-min presentation pitch on the last day) in this chapter." : ""}

Output pure markdown, no markdown codeblock wrapper around it.`;

  console.log("Generating text...");
  let text = await generateText(prompt);
  if (text.startsWith('```markdown')) {
    text = text.replace(/^```markdown\n?/, '').replace(/\n?```$/, '');
  }
  
  // ensure chapters dir exists
  if (!fs.existsSync('chapters')) fs.mkdirSync('chapters');
  fs.writeFileSync(outPath, text);

  // Parse images and generate
  console.log("Parsing images...");
  const figureRegex = /:::{figure}\s+\.\.\/images\/(ch\d+-[a-zA-Z0-9-]+\.png)[\s\S]*?:alt:\s*([^\n]+)/g;
  let match;
  while ((match = figureRegex.exec(text)) !== null) {
    const filename = match[1];
    const altText = match[2].trim();
    const imagePath = path.resolve(`./images/${filename}`);
    if (!fs.existsSync(imagePath)) {
      console.log(`Generating image: ${filename}`);
      try {
        execSync(`node /home/node/openclaw/skills/book-writer/scripts/generate-image.js "${imagePath}" "${altText.replace(/"/g, '\\"')}"`, { stdio: 'inherit' });
      } catch (e) {
        console.error(`Failed to generate ${filename}`);
        fs.writeFileSync(imagePath, '');
      }
    }
  }

  console.log("Updating myst.yml TOC...");
  let mystYml = fs.readFileSync('myst.yml', 'utf-8');
  if (!mystYml.includes(`ch${chapter.ch}-${chapter.slug}.md`)) {
    mystYml = addChapterToToc(mystYml, `chapters/ch${chapter.ch}-${chapter.slug}.md`, chapter.title);
    fs.writeFileSync('myst.yml', mystYml);
  }

    console.log("Updating index.md...");
  let indexMd = fs.readFileSync('index.md', 'utf-8');
  if (!indexMd.includes(`ch${chapter.ch}-${chapter.slug}.md`)) {
    const gridItem = `
:::{grid-item-card} ${chapter.title}\n:link: ./chapters/ch${chapter.ch}-${chapter.slug}.md\n${chapter.desc}\n:::\n`;
    if (!indexMd.includes(":::{grid}")) {
      indexMd = indexMd + "\n\n## Course Content\n\n:::{grid} 2\n" + gridItem + ":::\n";
    } else {
      indexMd = indexMd.replace(":::\n", gridItem + ":::\n");
    }
    fs.writeFileSync('index.md', indexMd);
  }

  console.log("Committing and pushing...");
  try {
    execSync(`git add -A`);
    execSync(`git commit -m "Add ${chapter.title}"`);
    execSync(`node /home/node/openclaw/skills/github-books/scripts/github-api.js push /home/node/openclaw/books/ism6405-advanced-business-analytics ism6405-advanced-business-analytics "Add ${chapter.title}"`, { stdio: 'inherit' });
  } catch(e) {}
}

async function main() {
  for (const ch of chapters) {
    await buildChapter(ch);
  }
  
  console.log("Generating Quiz Answers...");
  let qaText = await generateText(`Write the quiz answers for all 9 chapters of "ISM 6405 Advanced Business Analytics" (10 questions each chapter). Format clearly in Markdown.`);
  fs.writeFileSync('quiz-answers.md', qaText);
  
  console.log("Generating Appendix...");
  fs.writeFileSync('chapters/appendix-grading.md', `---
title: "Appendix: Grading"
label: appendix-grading
---
# Appendix: Grading Breakdown

| Item | Points Each | Count | Total |
|------|------------|-------|-------|
| Discussion Questions | 10 pts | 9 | 90 pts |
| Quizzes | 10 pts | 9 | 90 pts |
| Hands-On Activities | 20 pts | 9 | 180 pts |
| Final Project/Presentation | 180 pts | 1 | 180 pts |
| **TOTAL** | | | **540 pts** |

## Notes on final project:
- Can be a group project
- Mandatory presentation on last day of class
- Hard 7-minute limit
- Business pitch format
`);

  let mystYml2 = fs.readFileSync('myst.yml', 'utf-8');
  if (!mystYml2.includes(`appendix-grading.md`)) {
    mystYml2 = addChapterToToc(mystYml2, `chapters/appendix-grading.md`, `Appendix: Grading`);
    fs.writeFileSync('myst.yml', mystYml2);
  }
  
  console.log("Generating Comprehensive Landing Page...");
  let currentGrid = "";
  if (fs.existsSync("index.md")) {
    const idx = fs.readFileSync("index.md", "utf8");
    const parts = idx.split(":::{grid-item-card}");
    if (parts.length > 1) {
      currentGrid = ":::{grid-item-card}" + parts.slice(1).join(":::{grid-item-card}");
    }
  }

  let landingPageHtml = await generateText(`Write a comprehensive, professional landing page (index.md) for the textbook "ISM 6405 Advanced Business Analytics" by Dr. Ernesto Lee. The audience is graduate students at Florida Atlantic University. It should act as an engaging course syllabus/overview, highlighting the disruptive impact of AI on analytics. Include sections for Course Description, Objectives, and Tools Used (Google Colab, NotebookLM, Manus, Claude, Vapi, etc.). Use MyST markdown.`);
  
  const finalIndex = `---
title: "ISM 6405 Advanced Business Analytics"
description: "An in-depth examination of business analytics methods in the AI era."
---
# ISM 6405 Advanced Business Analytics

:::{figure} images/cover.png
:label: fig-cover
:width: 60%
:align: center
:::

${landingPageHtml.replace(/^```markdown\n?/, "").replace(/\n?```$/, "")}

## Course Content

:::{grid} 2
${currentGrid}
:::
`;
  fs.writeFileSync("index.md", finalIndex);
  
  execSync(`git add -A`);
  execSync(`git commit -m "Add Quiz Answers, Appendix, and Landing Page"`);
  execSync(`git push origin main -f`, { stdio: 'inherit' });
  
  console.log("DONE");
}

main().catch(console.error);
