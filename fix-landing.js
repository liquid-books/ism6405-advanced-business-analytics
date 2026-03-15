const fs = require('fs');

const myst = `# MyST project configuration
version: 1
project:
  title: "ISM 6405 Advanced Business Analytics"
  authors:
    - name: Dr. Ernesto Lee
  keywords: []
  license: CC-BY-4.0
  open_access: true
  github: https://github.com/liquid-books/ism6405-advanced-business-analytics
  numbering:
    heading_1: true
    heading_2: true
    heading_3: true
    figure: true
    table: true
    equation: true
  toc:
    - file: index.md
    - file: chapters/ch01-what-is-business-analytics.md
      title: "Chapter 1: What is Business Analytics and Data Science"
    - file: chapters/ch02-data-mining.md
      title: "Chapter 2: Data Mining"
    - file: chapters/ch03-text-and-web-mining.md
      title: "Chapter 3: Text and Web Mining"
    - file: chapters/ch04-data-visualization.md
      title: "Chapter 4: Data Visualization"
    - file: chapters/ch05-impact-of-ai.md
      title: "Chapter 5: The Impact of AI on Business Analytics"
    - file: chapters/ch06-agentic-ai.md
      title: "Chapter 6: Agentic AI and the Impact on Business Analytics"
    - file: chapters/ch07-voice-agents.md
      title: "Chapter 7: Voice Agents"
    - file: chapters/ch08-vibe-coding.md
      title: "Chapter 8: Vibe Coding"
    - file: chapters/ch09-future-of-analytics.md
      title: "Chapter 9: The Future of Analytics"
    - file: chapters/appendix-grading.md
      title: "Appendix: Grading"

site:
  title: "ISM 6405 Advanced Business Analytics"
  options:
    logo_text: "ISM 6405 Advanced Business Analytics"
    logo_url: "/"
  parts:
    primary_sidebar_footer: primary-sidebar-footer.md
`;
fs.writeFileSync('myst.yml', myst);

// Now grab the generated landing page text from the existing index.md, but strip all the corrupted grid crap
const idx = fs.readFileSync('index.md', 'utf8');

// The landing page generation seems to have dumped a whole bunch of text ending before the corrupted \`## Course Content\` block.
let bodyMatch = idx.match(/---[\\s\\S]*?This course is designed to make you that analyst.[\\s\\S]*?---/);
let body = bodyMatch ? bodyMatch[0] : idx; // fallback if regex fails

// we know exactly what the chapters are, so we'll just build the grid perfectly
const cleanIndex = \`---
title: "ISM 6405 Advanced Business Analytics"
description: "An in-depth examination of business analytics methods in the AI era."
---
# ISM 6405 Advanced Business Analytics

:::{figure} images/cover.png
:label: fig-cover
:width: 60%
:align: center
:::

\${body.replace(/---[\\s\\S]*?# ISM 6405 Advanced Business Analytics[\\s\\S]*?:::{figure}[\\s\\S]*?:::/, "")}

## Course Content

:::{grid} 2
:::{grid-item-card} Chapter 1: What is Business Analytics and Data Science
:link: ./chapters/ch01-what-is-business-analytics.md
Introductory concepts, data science vs analytics.
:::
:::{grid-item-card} Chapter 2: Data Mining
:link: ./chapters/ch02-data-mining.md
Predictive modeling, classification, clustering.
:::
:::{grid-item-card} Chapter 3: Text and Web Mining
:link: ./chapters/ch03-text-and-web-mining.md
NLP, scraping, sentiment analysis.
:::
:::{grid-item-card} Chapter 4: Data Visualization
:link: ./chapters/ch04-data-visualization.md
Dashboards, charting, storytelling + Midterm Activity (building a business with analytics).
:::
:::{grid-item-card} Chapter 5: The Impact of AI on Business Analytics
:link: ./chapters/ch05-impact-of-ai.md
How AI has disrupted traditional analytics workflows.
:::
:::{grid-item-card} Chapter 6: Agentic AI and the Impact on Business Analytics
:link: ./chapters/ch06-agentic-ai.md
Autonomous agents, multi-agent systems in business.
:::
:::{grid-item-card} Chapter 7: Voice Agents
:link: ./chapters/ch07-voice-agents.md
Conversational AI, voice interfaces for data.
:::
:::{grid-item-card} Chapter 8: Vibe Coding
:link: ./chapters/ch08-vibe-coding.md
Natural language programming, code generation via LLMs.
:::
:::{grid-item-card} Chapter 9: The Future of Analytics
:link: ./chapters/ch09-future-of-analytics.md
Future trends + Final Project (presentation pitch).
:::
:::
\`;

fs.writeFileSync('index.md', cleanIndex);
