# ISM 6405 Advanced Business Analytics — Quiz Answer Guide

> **Note:** The following answers are based on standard Advanced Business Analytics curricula covering common topics for a graduate-level ISM course. Adjust to match your specific textbook/instructor materials as needed.

---

## Chapter 1: Introduction to Business Analytics

**Q1. What are the three main categories of business analytics?**
**A:** Descriptive, Predictive, and Prescriptive Analytics.

---

**Q2. What is the primary goal of descriptive analytics?**
**A:** To summarize and describe historical data in order to understand what has happened in the past.

---

**Q3. Which type of analytics uses optimization and simulation to recommend decisions?**
**A:** Prescriptive Analytics.

---

**Q4. What is a Key Performance Indicator (KPI)?**
**A:** A measurable value that demonstrates how effectively a company is achieving key business objectives.

---

**Q5. What distinguishes structured data from unstructured data?**
**A:** Structured data is organized in a predefined format (e.g., tables/databases), while unstructured data lacks a predefined format (e.g., text, images, video).

---

**Q6. What is the CRISP-DM model?**
**A:** Cross-Industry Standard Process for Data Mining — a process model that describes common approaches used by data mining experts, including phases: Business Understanding, Data Understanding, Data Preparation, Modeling, Evaluation, and Deployment.

---

**Q7. Define "Big Data" and list the three original V's.**
**A:** Big Data refers to extremely large datasets that cannot be processed by traditional tools. The three original V's are **Volume**, **Velocity**, and **Variety**.

---

**Q8. What role does a data scientist play in analytics?**
**A:** A data scientist collects, processes, and analyzes large volumes of data using statistical, machine learning, and programming skills to extract actionable insights.

---

**Q9. What is data governance?**
**A:** A set of policies, standards, and processes that ensure data is managed, used, and maintained properly across an organization.

---

**Q10. Why is domain knowledge important in business analytics?**
**A:** Domain knowledge helps analysts contextualize findings, ask the right questions, and ensure that models and insights are relevant and actionable within a specific industry or business context.

---

## Chapter 2: Data Preparation and Exploration

**Q1. What is data wrangling (also called data munging)?**
**A:** The process of cleaning, transforming, and structuring raw data into a usable format for analysis.

---

**Q2. List four common methods for handling missing data.**
**A:**
1. Deletion (listwise or pairwise)
2. Mean/Median/Mode imputation
3. Regression imputation
4. Multiple imputation (e.g., MICE)

---

**Q3. What is an outlier, and why is it important to address?**
**A:** An outlier is a data point that significantly deviates from other observations. It is important to address because it can distort statistical analyses, skew model results, and lead to misleading conclusions.

---

**Q4. What is the purpose of data normalization?**
**A:** To rescale numeric variables to a common scale (e.g., 0–1) so that no single variable dominates others due to differences in magnitude, improving model performance.

---

**Q5. Differentiate between min-max normalization and Z-score standardization.**
**A:**
- **Min-Max Normalization:** Scales data to a fixed range [0, 1] using the formula `(x - min) / (max - min)`.
- **Z-score Standardization:** Transforms data to have a mean of 0 and standard deviation of 1 using `(x - μ) / σ`.

---

**Q6. What is a data dictionary?**
**A:** A centralized repository of metadata that describes the structure, content, meaning, and relationships of data elements within a dataset or database.

---

**Q7. What is feature engineering?**
**A:** The process of using domain knowledge to create, transform, or select new input variables (features) from raw data to improve the performance of machine learning models.

---

**Q8. What does exploratory data analysis (EDA) involve?**
**A:** EDA involves summarizing the main characteristics of a dataset using descriptive statistics, visualizations (histograms, box plots, scatter plots), and correlation analysis before formal modeling.

---

**Q9. What is a correlation matrix, and what does it measure?**
**A:** A correlation matrix is a table showing pairwise correlation coefficients between variables. It measures the strength and direction of linear relationships between numerical variables (ranging from -1 to +1).

---

**Q10. What is the curse of dimensionality?**
**A:** A phenomenon where the performance of algorithms deteriorates as the number of features (dimensions) increases, because data becomes increasingly sparse in high-dimensional space.

---

## Chapter 3: Statistical Foundations for Analytics

**Q1. What is the difference between a population and a sample?**
**A:** A **population** includes all members of a defined group, while a **sample** is a subset of the population selected for study.

---

**Q2. What is the Central Limit Theorem (CLT)?**
**A:** The CLT states that the sampling distribution of the sample mean approaches a normal distribution as the sample size increases, regardless of the population's original distribution — typically for n ≥ 30.

---

**Q3. Define Type I and Type II errors in hypothesis testing.**
**A:**
- **Type I Error (α):** Rejecting a true null hypothesis (false positive).
- **Type II Error (β):** Failing to reject a false null hypothesis (false negative).

---

**Q4. What does a p-value represent?**
**A:** The probability of observing a test statistic as extreme as the one calculated, assuming the null hypothesis is true. A p-value < α (commonly 0.05) leads to rejection of the null hypothesis.

---

**Q5. What is the difference between parametric and non-parametric tests?**
**A:** Parametric tests assume the data follows a specific distribution (e.g., normal), while non-parametric tests make no such assumptions and are used for ordinal data or when distributional assumptions are violated.

---

**Q6. What is a confidence interval?**
**A:** A range of values, derived from sample data, that is likely to contain the true population parameter with a specified probability (e.g., 95%).

---

**Q7. What does ANOVA test, and when is it used?**
**A:** ANOVA (Analysis of Variance) tests whether there are statistically significant differences among the means of three or more groups. It is used when comparing multiple group means simultaneously.

---

**Q8. What is the difference between covariance and correlation?**
**A:** Covariance measures the direction of the linear relationship between two variables (unbounded scale), while correlation standardizes this measure to a range of -1 to +1, making it easier to interpret.

---

**Q9. What is statistical power?**
**A:** The probability that a test correctly rejects a false null hypothesis (i.e., 1 − β). Higher power reduces the risk of Type II error.

---

**Q10. What is Bayes' Theorem and how is it applied in analytics?**
**A:** Bayes' Theorem calculates conditional probability: `P(A|B) = [P(B|A) × P(A)] / P(B)`. In analytics, it is applied in Bayesian classification (e.g., Naïve Bayes) to update the probability of a hypothesis given new evidence.

---

## Chapter 4: Regression Analysis

**Q1. What is the purpose of simple linear regression?**
**A:** To model the linear relationship between one independent variable (X) and one dependent variable (Y), allowing prediction of Y based on X.

---

**Q2. What does the coefficient of determination (R²) measure?**
**A:** R² measures the proportion of variance in the dependent variable that is explained by the independent variable(s) in the model. Values range from 0 to 1.

---

**Q3. What is multicollinearity and how is it detected?**
**A:** Multicollinearity occurs when two or more independent variables are highly correlated with each other. It is detected using the **Variance Inflation Factor (VIF)** — VIF > 10 (or > 5 in strict cases) indicates problematic multicollinearity.

---

**Q4. What is the difference between simple and multiple linear regression?**
**A:** Simple linear regression uses one independent variable to predict the dependent variable, while multiple linear regression uses two or more independent variables.

---

**Q5. What are the key assumptions of linear regression (OLS)?**
**A:**
1. Linearity
2. Independence of errors
3. Homoscedasticity (constant variance of residuals)
4. Normality of residuals
5. No perfect multicollinearity

---

**Q6. What is logistic regression used for?**
**A:** Logistic regression is used for binary classification — it predicts the probability that an outcome belongs to one of two categories (e.g., yes/no, 0/1).

---

**Q7. What is the difference between ridge regression and lasso regression?**
**A:**
- **Ridge Regression (L2):** Adds a penalty equal to the sum of squared coefficients; shrinks coefficients but does not set them to zero.
- **Lasso Regression (L1):** Adds a penalty equal to the sum of absolute coefficients; can shrink some coefficients to exactly zero, performing feature selection.

---

**Q8. What is heteroscedasticity and why is it a problem?**
**A:** Heteroscedasticity occurs when the variance of residuals is not constant across all levels of the independent variable. It violates OLS assumptions and can produce inefficient estimates and unreliable hypothesis tests.

---

**Q9. What does an adjusted R² value account for that R² does not?**
**A:** Adjusted R² accounts for the number of predictors in the model, penalizing for adding variables that do not meaningfully improve model fit, thus preventing overfitting.

---

**Q10. What is stepwise regression?**
**A:** A method of selecting independent variables in regression by automatically adding or removing predictors based on statistical criteria (e.g., p-value, AIC) — including forward selection, backward elimination, and bidirectional elimination.

---

## Chapter 5: Classification Methods

**Q1. What is classification in machine learning?**
**A:** Classification is a supervised learning task where the goal is to assign input data to predefined categories or classes based on learned patterns from labeled training data.

---

**Q2. What is a decision tree and how does it work?**
**A:** A decision tree is a flowchart-like model that splits data into subsets based on feature values. Each internal node represents a decision rule, each branch represents an outcome, and each leaf represents a class label. It works by recursively partitioning the data using criteria such as Gini impurity or information gain.

---

**Q3. What is the Gini impurity index?**
**A:** Gini impurity measures the probability of incorrectly classifying a randomly chosen element if it were labeled according to the distribution of labels in the node. A Gini of 0 means all elements belong to one class (pure node).

---

**Q4. What is the k-Nearest Neighbors (k-NN) algorithm?**
**A:** k-NN is a non-parametric classification algorithm that classifies a new data point based on the majority class of its k nearest neighbors in the feature space, using a distance metric (e.g., Euclidean distance).

---

**Q5. What is a confusion matrix?**
**A:** A confusion matrix is a table used to evaluate classification model performance by displaying True Positives (TP), True Negatives (TN), False Positives (FP), and False Negatives (FN).

---

**Q6. Define precision, recall, and F1-score.**
**A:**
- **Precision:** TP / (TP + FP) — accuracy of positive predictions.
- **Recall (Sensitivity):** TP / (TP + FN) — ability to find all actual positives.
- **F1-Score:** Harmonic mean of precision and recall = `2 × (Precision × Recall) / (Precision + Recall)`.

---

**Q7. What is the Naïve Bayes classifier?**
**A:** A probabilistic classifier based on Bayes' Theorem that assumes all features are independent of each other given the class label (the "naïve" assumption). It is fast and effective for text classification tasks.

---

**Q8. What is overfitting, and how can it be prevented?**
**A:** Overfitting occurs when a model learns noise and specific patterns in the training data and performs poorly on unseen data. Prevention methods include cross-validation, pruning (for trees), regularization, and increasing training data.

---

**Q9. What is ROC curve analysis and what does AUC represent?**
**A:** The ROC (Receiver Operating Characteristic) curve plots True Positive Rate vs. False Positive Rate at various classification thresholds. **AUC (Area Under the Curve)** measures overall model discrimination ability — AUC of 1.0 is perfect; 0.5 is random guessing.

---

**Q10. What is cross-validation, and why is it used?**
**A:** Cross-validation (e.g., k-fold) is a technique where data is split into k subsets; the model is trained on k-1 folds and tested on the remaining fold, repeated k times. It is used to estimate model performance more reliably and reduce overfitting risk.

---

## Chapter 6: Clustering and Unsupervised Learning

**Q1. What is unsupervised learning?**
**A:** A type of machine learning where the algorithm identifies patterns or structures in unlabeled data without predefined output categories.

---

**Q2. What is the k-means clustering algorithm?**
**A:** K-means partitions data into k clusters by iteratively assigning each data point to the nearest centroid and recalculating centroids until convergence (minimizing within-cluster sum of squared distances).

---

**Q3. How do you determine the optimal number of clusters in k-means?**
**A:** Using the **Elbow Method** — plot the Within-Cluster Sum of Squares (WCSS) against the number of clusters and look for the "elbow" point where adding more clusters yields diminishing returns. The **Silhouette Score** is another metric.

---

**Q4. What is hierarchical clustering?**
**A:** A clustering method that builds a hierarchy of clusters either through **agglomerative** (bottom-up: start with individual points and merge) or **divisive** (top-down: start with all points and split) approaches. Results are visualized using a **dendrogram**.

---

**Q5. What is the difference between agglomerative and divisive hierarchical clustering?**
**A:**
- **Agglomerative:** Starts with each observation as its own cluster and successively merges the two most similar clusters.
- **Divisive:** Starts with all observations in one cluster and recursively splits into smaller clusters.

---

**Q6. What is DBSCAN and what is its key advantage over k-means?**
**A:** DBSCAN (Density-Based Spatial Clustering of Applications with Noise) groups together points that are closely packed and marks points in low-density regions as outliers. Its key advantage is that it does **not require the number of clusters to be specified** in advance and can identify arbitrarily shaped clusters.

---

**Q7. What is Principal Component Analysis (PCA)?**
**A:** PCA is a dimensionality reduction technique that transforms correlated variables into a set of linearly uncorrelated components (principal components) ordered by the amount of variance they explain.

---

**Q8. What does the silhouette score measure in clustering?**
**A:** The silhouette score measures how similar an object is to its own cluster compared to other clusters. Values range from -1 to +1; values close to +1 indicate well-clustered data.

---

**Q9. What is market basket analysis, and which algorithm is commonly used?**
**A:** Market basket analysis identifies associations between products frequently purchased together. The **Apriori algorithm** is commonly used, leveraging support, confidence, and lift metrics.

---

**Q10. Define support, confidence, and lift in association rule mining.**
**A:**
- **Support:** Frequency of itemset appearing in transactions = `P(A ∩ B)`.
- **Confidence:** Likelihood that B is purchased given A is purchased = `P(A ∩ B) / P(A)`.
- **Lift:** Ratio of observed to expected co-occurrence = `Confidence / P(B)`; Lift > 1 indicates a positive association.

---

## Chapter 7: Advanced Predictive Modeling

**Q1. What is an ensemble method in machine learning?**
**A:** An ensemble method combines multiple models to produce a stronger predictive model than any individual model, reducing variance and/or bias (e.g., bagging, boosting, stacking).

---

**Q2. What is a Random Forest, and how does it differ from a single decision tree?**
**A:** A Random Forest is an ensemble of decision trees, each trained on a random bootstrap sample with a random subset of features. It differs from a single tree by reducing overfitting and variance through averaging predictions across many trees.

---

**Q3. What is bagging (Bootstrap Aggregating)?**
**A:** Bagging creates multiple subsets of training data via bootstrap sampling, trains a model on each, and aggregates predictions by averaging (regression) or majority voting (classification). Random Forest is a bagging-based method.

---

**Q4. What is boosting, and how does it work?**
**A:** Boosting builds models sequentially where each new model focuses on correcting the errors of the previous one by giving higher weight to misclassified observations. Examples include AdaBoost, Gradient Boosting, and XGBoost.

---

**Q5. What is XGBoost, and why is it popular in competitions?**
**A:** XGBoost (Extreme Gradient Boosting) is an optimized gradient boosting framework that is fast, regularized (to prevent overfitting), handles missing data natively, and consistently achieves high accuracy. It is popular due to its scalability and performance.

---

**Q6. What is a Support Vector Machine (SVM)?**
**A:** An SVM is a supervised learning algorithm that finds the optimal hyperplane that maximizes the margin between two classes in the feature space. It can handle non-linear problems using **kernel tricks** (e.g., RBF kernel).

---

**Q7. What is the bias-variance tradeoff?**
**A:** Bias is error from overly simplistic models (underfitting); variance is error from overly complex models (overfitting). The tradeoff involves finding the right model complexity that minimizes total error (Bias² + Variance + Irreducible Error).

---

**Q8. What is neural network architecture in the context of deep learning?**
**A:** A neural network consists of an input layer, one or more hidden layers, and an output layer. Each layer contains neurons connected by weighted edges. Deep learning uses many hidden layers to learn hierarchical feature representations.

---

**Q9. What is hyperparameter tuning, and what methods are used?**
**A:** Hyperparameter tuning is the process of finding the optimal settings for model parameters not learned during training. Methods include:
- **Grid Search:** Exhaustive search over a parameter grid.
- **Random Search:** Random sampling of parameter combinations.
- **Bayesian Optimization:** Uses probabilistic models to find optimal parameters efficiently.

---

**Q10. What is the difference between gradient descent and stochastic gradient descent (SGD)?**
**A:**
- **Gradient Descent:** Computes the gradient using the entire training dataset per iteration (slow for large datasets).
- **SGD:** Computes the gradient using one (or a mini-batch of) training sample(s) per iteration — faster but noisier convergence.

---

## Chapter 8: Optimization and Decision Models

**Q1. What is linear programming (LP)?**
**A:** Linear programming is a mathematical optimization technique that maximizes or minimizes a linear objective function subject to a set of linear equality and inequality constraints.

---

**Q2. What are the three components of a linear programming model?**
**A:**
1. **Objective Function** — the goal to maximize or minimize.
2. **Decision Variables** — the unknowns to be determined.
3. **Constraints** — limitations or requirements expressed as linear inequalities/equalities.

---

**Q3. What is the Simplex Method?**
**A:** The Simplex Method is an iterative algorithm for solving LP problems. It moves along the edges of the feasible polytope from one corner (vertex) to an adjacent one, improving the objective function at each step until the optimal solution is found.

---

**Q4. What is integer programming, and how does it differ from LP?**
**A:** Integer programming (IP) requires some or all decision variables to take integer values. Unlike LP (which allows fractional solutions), IP is computationally harder but essential when variables represent whole units (e.g., number of employees, machines).

---

**Q5. What is a sensitivity analysis in LP?**
**A:** Sensitivity analysis examines how changes in the objective function coefficients or right-hand side values of constraints affect the optimal solution, providing insight into the stability and robustness of the solution.

---

**Q6. What is Monte Carlo simulation, and how is it used in decision-making?**
**A:** Monte Carlo simulation uses random sampling to model the probability of different outcomes in a process that cannot easily be predicted due to random variables. It is used to assess risk, evaluate decision alternatives, and estimate expected outcomes.

---

**Q7. What is a decision tree in the context of decision analysis (not machine learning)?**
**A:** In decision analysis, a decision tree is a graphical tool representing decisions, uncertain events (chance nodes), and outcomes with associated probabilities and payoffs. It is used to calculate expected monetary value (EMV) for decision alternatives.

---

**Q8. What is Expected Monetary Value (EMV)?**
**A:** EMV is the weighted average of all possible outcomes of a decision, calculated by multiplying each outcome's value by its probability and summing the results. Decision-makers choose the alternative with the highest EMV.

---

**Q9. What is the difference between deterministic and stochastic optimization?**
**A:**
- **Deterministic Optimization:** All parameters are known with certainty.
- **Stochastic Optimization:** Incorporates uncertainty/randomness in parameters, optimizing expected outcomes or worst-case scenarios.

---

**Q10. What is goal programming?**
**A:** Goal programming is an extension of LP that allows decision-makers to pursue multiple (often conflicting) objectives simultaneously by minimizing the deviation from each goal, rather than optimizing a single objective function.

---

## Chapter 9: Data Visualization and Communication of Analytics Results

**Q1. Why is data visualization important in business analytics?**
**A:** Data visualization transforms complex data into graphical representations that are easier to understand, enabling faster decision-making, pattern recognition, storytelling, and effective communication of insights to both technical and non-technical audiences.

---

**Q2. What is the difference between a bar chart and a histogram?**
**A:**
- **Bar Chart:** Displays categorical data with rectangular bars where height represents frequency or value; bars are separated.
- **Histogram:** Displays the distribution of continuous numerical data in contiguous bins representing frequency ranges.

---

**Q3. When should a scatter plot be used?**
**A:** A scatter plot should be used to visualize the relationship (correlation, trend, or pattern) between two continuous numerical variables.

---

**Q4. What is a dashboard, and what are its key design principles?**
**A:** A dashboard is an interactive visual display of KPIs and metrics on a single screen. Key design principles include:
- Clarity and simplicity
- Relevance to the audience
- Use of appropriate chart types
- Minimal clutter
- Consistent color scheme and labeling

---

**Q5. What is the difference between Tableau and Power BI?**
**A:** Both are business intelligence visualization tools. **Tableau** is known for its powerful visualization capabilities and ease of use for complex visual analytics. **Power BI** is a Microsoft product tightly integrated with the Office/Azure ecosystem, often preferred for its cost-effectiveness and enterprise integration.

---

**Q6. What is a heat map and when is it useful?**
**A:** A heat map uses color gradients to represent the magnitude of values in a matrix. It is useful for visualizing patterns, correlations, or concentrations across two categorical dimensions (e.g., correlation matrices, geographic density maps).

---

**Q7. What is the principle of "data-ink ratio" as described by Edward Tufte?**
**A:** Tufte's data-ink ratio principle states that the proportion of a graphic's ink used to display actual data should be maximized while non-data ink (gridlines, unnecessary decorations) should be minimized, enhancing clarity.

---

**Q8. What are the key elements of effective storytelling with data?**
**A:**
1. Define the audience and context
2. State the key message clearly
3. Use appropriate visualizations
4. Provide narrative/annotations
5. Highlight key findings and actionable insights
6. Eliminate unnecessary clutter

---

**Q9. What is a geospatial visualization and what types of business questions can it answer?**
**A:** Geospatial visualization represents data on maps to show geographic patterns. It can answer questions like: Where are our best-performing stores? Which regions have the highest customer churn? How does demand vary by location?

---

**Q10. What ethical considerations are important when presenting analytics results?**
**A:**
- Avoiding misleading visualizations (e.g., truncated axes, cherry-picked data)
- Transparently communicating model assumptions and limitations
- Protecting data privacy and anonymization
- Avoiding confirmation bias in interpretation
- Ensuring reproducibility and auditability of analysis

---

> **Disclaimer:** These answers reflect standard graduate-level business analytics content. Always cross-reference with your course-specific textbook, lecture notes, and instructor guidelines for exam preparation.