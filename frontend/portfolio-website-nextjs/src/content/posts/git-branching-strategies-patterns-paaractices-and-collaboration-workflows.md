---
title: "Git: Rewriting History "
subheading: "Reset and Amend Commits"
excerpt: "Git is an incredibly powerful tool that allows developers to collaborate and manage code efficiently. With Git, you can work on code simultaneously with other developers, manage changes, and organize projects. One of the most crucial aspects of Git is branching. Branching is the process of creating a new branch from an existing branch or commit. This allows developers to work on a new feature or fix a bug without disrupting the main codebase."
status: "published"
author: "Paul Serban"
date: "March 3, 2019"
tags:
  - "Web Development"
  - "Version Control Systems"
  - "Git"
  - "GitHub"
  - "GitFlow"
  - "CI/CD"
  - "DevOps"
---

Git is an incredibly powerful tool that allows developers to collaborate and manage code efficiently. With Git, you can work on code simultaneously with other developers, manage changes, and organize projects. One of the most crucial aspects of Git is branching. Branching is the process of creating a new branch from an existing branch or commit. This allows developers to work on a new feature or fix a bug without disrupting the main codebase.

In this post, we'll take a deep dive into Git branching strategies, patterns, and collaboration workflows, and discuss best practices for working with Git.

## Branching Strategies
Git branching strategies define how a team manages code branches. They range from simple branching to complex branching, and each strategy offers different benefits and drawbacks. Here are some of the most common Git branching strategies:

### Trunk-Based Development
Trunk-Based Development is a branching strategy that involves a single branch known as the `trunk`, or `master`. Developers work on their features and merge them directly into the trunk, which is then deployed to production. This strategy is simple and suitable for small teams or projects with short release cycles.

### GitFlow
GitFlow is a branching strategy that uses two main branches - `master` and `develop`. The `master` branch contains the stable production-ready code, while the `develop` branch contains the latest code in development. Developers create feature branches off the develop branch, work on them, and merge them back into the `develop` branch once they are complete. This strategy provides a structured approach to managing code and works well for larger teams and projects with longer release cycles.

### Feature Branching
Feature branching is a branching strategy that involves creating a new branch for each feature or issue. Developers work on the branch, test it, and merge it back into the main branch when it is complete. This strategy allows for isolation of code changes and works well for teams working on complex features or large projects.

## Patterns and Practices
In addition to branching strategies, there are various patterns and practices that teams can adopt to improve their Git workflows. Here are a few examples:

### Pull Request Workflow
The Pull Request Workflow involves developers creating feature branches, making changes, and submitting pull requests for code review. Team members can review the code, provide feedback, and suggest changes before merging the code into the main branch. This workflow encourages collaboration and helps ensure code quality.

### Continuous Integration and Continuous Deployment
Continuous Integration and Continuous Deployment (CI/CD) involve automating the build, test, and deployment process. Whenever code changes are made, CI/CD pipelines run automated tests and build the code. If the tests pass, the code is deployed to production automatically. This process reduces the risk of introducing bugs and improves code quality.

### Code Reviews
Code reviews involve team members reviewing code changes before they are merged into the main branch. Code reviews help ensure that code is well-written, follows best practices, and meets project requirements. Code reviews can be conducted manually or automatically, and they can be integrated into various Git workflows.

## Collaboration Workflows
Collaboration workflows define how teams work together on code. These workflows involve communication, coordination, and collaboration, and they can have a significant impact on code quality and project success. Here are some common Git collaboration workflows:

### Centralized Workflow
The centralized collaboration Git workflow is a branching strategy that is commonly used in small to medium-sized development teams, where there is a single central repository that serves as the primary codebase.

In this workflow, each developer creates a clone of the central repository on their local machine, makes changes to the codebase, and then pushes those changes back to the central repository. This process is repeated as necessary, with each developer working on a separate branch of the repository to avoid conflicts with other developers.

The central repository is typically managed by a designated person or team, who are responsible for reviewing and merging changes from other developers. This helps ensure that the codebase remains stable and that changes are properly integrated into the project.

To get started with the centralized collaboration workflow, each developer first creates a clone of the central repository on their local machine. They then create a branch to work on their specific feature or bug fix, make changes to the code, and commit those changes to their local branch.

Once the developer is ready to submit their changes, they push their branch to the central repository and create a pull request, which is then reviewed by the designated person or team. If the changes are approved, they are merged into the main branch of the repository, and the cycle repeats.

One of the key advantages of the centralized collaboration Git workflow is its simplicity and ease of use. Because there is only one central repository, it is easy to keep track of changes and ensure that everyone is working on the same codebase. It is also easy to manage and track the contributions of each developer, and ensure that changes are properly reviewed and integrated into the project.

However, the centralized workflow can also have some limitations, especially for larger or more complex projects. It can be difficult to manage conflicts between multiple developers working on the same codebase, and the workflow may not be as flexible or adaptable to changing needs or requirements.

Overall, the centralized collaboration Git workflow is a powerful and effective branching strategy for small to medium-sized development teams. By following best practices and using tools like pull requests and code reviews, teams can ensure that their code is high-quality, stable, and well-maintained.

### Forking Workflow
The forking collaboration Git workflow is a widely used branching strategy for collaborating on a project with a large number of contributors or with external contributors. It involves creating a central repository that serves as the main codebase, and then having each contributor create their own fork of the repository.

A fork is essentially a copy of the central repository that exists in the contributor's account. Contributors can make changes to their forked copy of the repository and then submit those changes back to the central repository through a pull request.

To get started with the forking workflow, a contributor first creates a fork of the central repository. They then clone their fork to their local machine, where they can make changes to the codebase.

Once the contributor has made changes to the code, they create a pull request to submit their changes back to the central repository. The pull request allows other contributors to review the changes and provide feedback before the changes are merged into the central repository.

One of the key advantages of the forking workflow is that it allows for a high degree of parallelization, with multiple contributors working on different features or bug fixes at the same time. This can help speed up development and reduce the time to market.

The forking workflow also provides a high degree of flexibility and autonomy to contributors. Each contributor can work on their own fork and make changes without affecting the work of others. This can be particularly useful in projects with a large number of contributors, where it can be difficult to coordinate changes to the codebase.

Overall, the forking collaboration Git workflow is a powerful and flexible branching strategy that can be adapted to suit the needs of different teams and projects. By following best practices and using tools like pull requests and code reviews, teams can ensure that their code is high-quality, stable, and well-maintained, even with a large number of contributors.

### Shared Workflow
The shared collaboration Git workflow is a widely used branching strategy for collaborating on a project with a team of developers. It involves creating a central repository that serves as the main codebase and then having each team member create their own local copy of the repository.

When a team member wants to make changes to the code, they first need to update their local copy of the repository with any changes that have been made to the central repository by other team members. This is done using the `git fetch` command to retrieve the changes and the `git merge` command to merge them with the local copy.

Once the changes have been made to the code and committed locally, the team member can then push the changes to the central repository using the `git push` command. Other team members can then use the `git pull` command to retrieve the changes from the central repository and update their local copies.

One of the key advantages of this workflow is that it allows multiple team members to work on the same codebase simultaneously without stepping on each other's toes. By using separate branches for each feature or bug fix, team members can make changes to the code without affecting the work of others.

In addition to separate branches, the shared collaboration workflow also involves creating a `master` branch that serves as the stable version of the code. Once a feature or bug fix has been completed and tested, it can be merged into the master branch, ensuring that everyone is working with the same version of the code.

Overall, the shared collaboration Git workflow is a flexible and powerful branching strategy that can be adapted to suit the needs of different teams and projects. By following best practices and using tools like pull requests and code reviews, teams can ensure that their code is high-quality, stable, and well-maintained.

## Conclusion
Choosing the right branching strategy and collaboration workflow is crucial for the success of a project. Trunk-based development is suitable for small projects with a small team of developers, while Feature branching and Gitflow are suitable for medium to large projects with multiple developers. Ultimately, it's up to the project team to choose the branching strategy and collaboration workflow that works best for them.