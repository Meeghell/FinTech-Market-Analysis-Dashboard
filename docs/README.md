
# Guidelines for Project 1

This document contains guidelines, requirements, and suggestions for Project 1.

## Team Effort

Before anything, remember that projects are a group effort: Working closely with your teammates is a requirement. This helps teach real-world collaborative workflows and enables you to tackle more difficult problems than you'd be able to working alone.

In other words, working in groups allows you to **work smart** and **dream big**. Take advantage of it!

## Project Proposal

Before you start writing any code, your group should outline the scope and purpose of your project. This helps provide direction and prevent [scope creep](https://en.wikipedia.org/wiki/Scope_creep).

Write this as a brief summary of your interests and intent, including:

* The kind of data you'd like to work with and the field you're interested in (e.g., trading, quantitative analysis).

* The kinds of questions you'll be asking of that data.

* Possible source for such data.

This constitutes your Project Proposal and Outline, here is an example:

> Our project is to uncover patterns in credit card fraud. We'll examine relationships between types of transactions and location; purchase prices and times of day; trends in purchases over the course of the year; and related questions, as the data admits. && The aim of our project is to uncover patterns in credit card fraud. We’ll examine relationships between transaction types and location, purchase prices and times of day, purchase trends over the course of a year, and other related relationships that will derive from the data.


## Finding Data

Once your group has written an outline, it's time to start hunting for data. You are free to use data from any source, but we recommend the following curated sources of high-quality data:

* [data.world](https://data.world/)

* [Kaggle](https://www.kaggle.com/)

* [Data.gov](https://www.data.gov)

* [Public APIs](https://github.com/abhishekbanthia/Public-APIs)

* [Awesome-APIs List](https://github.com/Kikobeats/awesome-api)

* [Medium APIs List](https://medium.com/@benjamin_libor/a-curated-collection-of-over-150-apis-to-build-great-products-fdcfa0f361bc)

Chances are you'll have to update your Project Outline as you explore the available data. **This is fine**—adjustments like this are part of the process! Just make sure everyone in the group is up-to-speed on the goals of the project as you make changes.

Make sure that your data is not too large for local analysis. **Big Data** datasets are difficult to manage locally, so consider a subset of that data or a different dataset altogether.

IMPORTANT

Whenever you use a dataset or create a new dataset based on other sources (such as existing datasets or information scraped from websites), be sure to follow these guidelines:

* Check for copyright protections and make sure that the way you plan to use this dataset is within the bounds of fair use.

* Document how you intend to use this dataset, now and in the future. Find any licenses or terms of use associated with the dataset, and review them to confirm that your intended use is in compliance.

* Investigate how the dataset was collected. Identify any indicators that the data was obtained from a source that the compilers were not authorized to access.

You’ll likely have to adjust your project plan as you explore the available data. That’s okay! This is all part of the process. Just make sure that everyone in the group is aligned on the project’s goals as you make changes.
Make sure that your datasets are not too large for your personal computer. Big data datasets are difficult to manage locally, so consider using data subsets or different datasets altogether.


## Data Cleanup & Analysis

With data in hand, it's time to tackle development and analysis. This is where the fun starts!

Inevitably, the analysis process can be broken into two broad phases: **Exploration and Cleanup** and **Analysis** proper.

As you’ve learned, you’ll need to explore, clean, and reformat your data before you can begin answering your research questions. We recommend keeping track of these exploration and cleanup steps in a dedicated Jupyter notebook to keep you organized and make it easier to present your work later.

After you’ve clean your data and are ready to start crunching numbers, you should track your work in a Jupyter notebook dedicated specifically to analysis.

During both phases, **don't forget to include plots**! Don't make the mistake of waiting to build figures until you're preparing your presentation. Creating them along the way can reveal insights and interesting trends in the data that you might not notice otherwise.

We recommend focusing your analysis on techniques such as aggregation, correlation, comparison, summary statistics, and financial analysis.

&& We recommend focusing your analysis on techniques such as aggregation, comparison, and summary statistics, as well as on financial analysis concepts like Sharpe ratios, beta, and Monte Carlo simulations. Don’t forget to include plots during both the exploration and analysis phases. Creating plots along the way can reveal insights and interesting trends in the data that you might not notice if you wait until you’re preparing for your presentation.

Finally, be sure that your projects meet the [technical requirements](TechnicalRequirements.md).


## Presentation

After you've analyzed your data to your satisfaction, you'll put together a presentation to show off your work, explain your process, and discuss your conclusions.

This presentation will be delivered as a slideshow, and it should give your classmates and instructional staff an overview of your work. PowerPoint, Keynote, and Google Slides are all acceptable for building slides.

As long as your slides meet the [presentation requirements](PresentationRequirements.md), you are free to structure the presentation however you wish, but students are often successful with the format laid out in the [presentation guidelines](PresentationGuidelines.md).

## Submission

In addition to submitting your project on Bootcamp Spot individually, please [fill out this form](https://forms.gle/CBk5tyy4sSsGN8k38) **once per group**.


## Requirements/Grade Rubric

Your assignment will be graded according to the expectations outlined in the following rubric.

- Proficiency (≥ 90% of the points)
    
- Approaching Proficiency (≥ 80% of the points)
    
- Progressing (≥ 70% of the points)
    
- Emerging (< 70% of the points)
    

### Technical Requirements (75 points)

#### Software Version Control (10 points)

- Repository is created on GitHub. (2 points)
    
- Files are frequently committed to the repository. (3 points)
    
- Commit messages include an appropriate level of detail. (2 points)
    
- Repository is organized and includes relevant information and project files. (3 points)
    

#### Data Collection and Preparation (10 points)

- Data is collected from CSV files, APIs, or databases by using Python or a Python library. (5 points)
    
- Data is cleaned and prepared for the application or analysis by using Python or a Python library. (5 points)
    

#### Financial Programming (40 points)

- Code runs without errors and produces the assigned results. (25 points)
    
- Code uses good systems design with appropriate use of functions and modules for code organization. (5 points)
    
- Code uses DRY (don’t repeat yourself) principles and is as concise as possible. Variable names are short but specific. (5 points)
    
- Code incorporates a new Python library not previously covered in the course. (5 points)
    

#### Documentation (15 points)

- Code is well commented with concise, relevant notes. (5 points)
    
- GitHub README file includes a concise project overview. (2 points)
    
- GitHub README file includes detailed usage and installation instructions. (3 points)
    
- GitHub README includes either examples of the application, or the results and a summary of the analysis. (5 points)
    

### Presentation Requirements (25 points)

Your presentation should cover the following:

- An executive summary/overview of the project and project goals. (5 points)
    
- An overview of the data collection, cleanup, and exploration processes. (5 points)
    
- The approach that your group took in achieving the project goals. (5 points)
    
- The results and conclusions of the financial application or analysis. (5 points)
    
- Any additional questions that surfaced, what your group might research next if more time was available, or share a plan for future development. (5 points)
    
&&

## Technical Requirements

The technical requirements for Project 1 are as follows.

* [ ] Use Pandas to clean and format your dataset(s).

* [ ] Create a Jupyter Notebook describing the **data exploration and cleanup** process.

* [ ] Create a Jupyter Notebook illustrating the **final data analysis**.

* [ ] Use Hvplot or GeoViews to create six to eight data visualizations (ideally, at least two per question asked of the data).

* [ ] Save PNG images of your visualizations to distribute to the class and instructional team and for inclusion in your presentation and your repo's README.md file.

* [ ] Use one new Python library that hasn't been covered in class.

* [ ] Optionally, use at least one API, if you can find an API with data pertinent to your primary research questions.

* [ ] Create a README.md in your repo with a write-up summarizing your major findings. This should include a heading for each question you asked of your data and under each heading a short description of what you found and any relevant plots.