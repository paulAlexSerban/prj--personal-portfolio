---
title: "Git: Merge vs Fast-Forward Merge"
subheading: "Understanding the Differences"
excerpt: "When it comes to merging changes in Git, there are two main methods: git merge and git merge --ff-only, also known as fast-forward merge. In this blog post, we will explore the differences between these two methods and when to use each one."
status: "published"
author: "Paul Serban"
date: "February 9, 2019"
tags:
  - "Web Development"
  - "Version Control Systems"
  - "Git"
  - "GitHub"
---

When it comes to merging changes in Git, there are two main methods: `git merge` and `git merge --ff-only`, also known as fast-forward merge. In this blog post, we will explore the differences between these two methods and when to use each one.

## Git Merge
The `git merge` command is the standard way of merging changes in Git. It creates a new merge commit that combines the changes from two branches. This type of merge is also known as a three-way merge because it combines the changes from two branches and the common ancestor of those branches.

When you run the `git merge` command, Git will analyze the changes from both branches and attempt to automatically merge them. If there are conflicts, Git will stop and allow you to manually resolve them. Once the conflicts are resolved, Git will create a new merge commit and complete the merge.

## Fast-Forward Merge
A fast-forward merge is a type of merge that occurs when there are no diverging changes between two branches. In other words, if the changes made in one branch can be applied directly to the other branch without any conflicts, Git will simply update the head of the branch to point to the latest commit on the other branch.

To perform a fast-forward merge, you can use the `git merge --ff-only` command. This command tells Git to only perform a fast-forward merge and not create a new merge commit.

## When to Use Each Method
In general, you should use the standard `git merge` command when you want to combine changes from two different branches, especially when there are conflicts that need to be resolved. This method is useful when you want to create a new merge commit that explicitly shows that the changes from both branches have been combined.

On the other hand, you should use the `git merge --ff-only` command when you want to simply update one branch with the changes from another branch without creating a new merge commit. This method is useful when you are working on a feature branch and want to update it with the latest changes from the main branch.

## Conclusion
In summary, Git merge and fast-forward merge are two different methods for merging changes in Git. The `git merge` command creates a new merge commit that combines changes from two branches, while the `git merge --ff-only` command updates one branch with changes from another branch without creating a new merge commit. By understanding the differences between these two methods, you can choose the right method for your specific merging needs.