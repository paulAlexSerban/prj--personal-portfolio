---
title: "Git: Rewriting History "
subheading: "Reset and Amend Commits"
excerpt: "Git is a powerful tool for version control, but it's easy to create a messy Git history with unnecessary commits, typos in commit messages, and other issues. Fortunately, Git provides tools for rewriting history to clean up your commit history or make small changes to existing commits. In this blog post, we'll cover two ways to rewrite Git history: reset and amend commits."
status: "published"
author: "Paul Serban"
date: "March 1, 2019"
tags:
  - "Web Development"
  - "Version Control Systems"
  - "Git"
  - "GitHub"
---

Git is a powerful tool for version control, but it's easy to create a messy Git history with unnecessary commits, typos in commit messages, and other issues. Fortunately, Git provides tools for rewriting history to clean up your commit history or make small changes to existing commits. In this blog post, we'll cover two ways to rewrite Git history: reset and amend commits.

## Resetting Commits
Resetting a commit is useful when you need to undo changes or delete a commit from your Git history. There are three types of resets in Git: `soft`, `mixed`, and `hard`.

A `soft` reset will move the HEAD pointer to the specified commit, but keep the changes in the working directory and index. A `mixed` reset will move the HEAD pointer to the specified commit and reset the index, but keep the changes in the working directory. A `hard` reset will move the HEAD pointer to the specified commit and delete all changes in the working directory and index.

To perform a `soft` reset, use the following command:

```bash
git reset --soft <commit>
```

To perform a `mixed` reset, use the following command:
```bash
git reset <commit>
```

To perform a hard reset, use the following command:
```bash
git reset --hard <commit>
```

It's important to note that resetting commits will change your Git history, so it should be used with caution. If you're working on a public branch, it's better to create a new branch and make changes there rather than rewriting history.

## Amending Commits
Amending commits is useful when you need to make small changes to a commit, such as fixing a typo in the commit message or adding a file you forgot to include. To amend the last commit, you can use the following command:

```bash
git commit --amend
```

This will open your default text editor where you can modify the commit message. Once you save and exit the editor, Git will amend the last commit with the new message.

If you need to make changes to the files in the commit, you can make the changes and then stage them using the `git add` command. Once the changes are staged, you can use the `git commit --amend` command to amend the last commit with the staged changes.

## Conclusion
Rewriting history in Git can be a powerful tool, but it should be used with caution. It can be useful for cleaning up a messy history or for making small changes to a commit, but it can also cause problems if used improperly. It's important to understand the risks and benefits of rewriting history before doing so.

In general, it's best to avoid rewriting history on public branches that other people are working on. If you need to make changes to a public branch, it's better to create a new branch and make the changes there.

Hopefully, this blog post has given you a good understanding of how to use the `git reset` and `git commit --amend` commands to rewrite history in Git. With this knowledge, you can make your Git history cleaner and more organized.