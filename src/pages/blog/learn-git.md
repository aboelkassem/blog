---
templateKey: article-page
title: Learn Git
slug: learn-git
author: aboelkassem
authorLink: https://www.aboelkassem.com
date: 2020-04-27T13:12:13.627Z
cover: /img/git.jpg
metaTitle: learn git
metaDescription: learn basics of a version control system, git, and Github
tags:
  - git
  - github
  - version-control
---
In this article, we'll discuss the basics of version control with git!

**The Content**

* [Version Control System](#version-control-system)
* [Three Stages of a File](#three-stages-of-a-file)
* [Three States of git project](#three-states-of-git-project)
* [Command Line](#command-line)

  * [Tracked files by git has three stages](#tracked-files-by-git-has-three-stages)
  * [Untracked Files](#untracked-files)
  * [Push committed changes to Origin Master branch](#push-committed-changes-to-origin-master-branch)
  * [Track commits and see the history of previous commits](#track-commits-and-see-the-history-of-previous-commits)
  * [Commit Message](#commit-message)
  * [Remove and Move Files](#remove-and-move-files)
  * [Branches](#branches)
  * [Merge](#merge)
  * [Git stash](#git-stash)
  * [Git reset](#git-reset)

## What is Git?

Git is the world’s most popular version control system.

##### Version Control System is

* Software designed to record changes to files over time
* Ability to revert back to the previous file version or project version
* Compare changes made to files from one version to another
* Version control any plain text file, not just source code
* Managing your project’s files. For example, when building a website, you will
  have a lot of files, like CSS, HTML, JS, images.

## Three Stages of a File

there are three-stage of any file in the source control systems

* Committed
  mean that files are stored safely in the repo of the project
* Modified
  when making changes in the last commit, just introduced new changes but has committed them yet
* Staged
  when changes finished and ready to commit.

## Three States of a git project

![stages-of-git-project](https://raw.githubusercontent.com/aboelkassem/Git/master/images/Three%20States%20of%20git%20project.png "Three stages of git project")

## Command Line

in the following two files, you will get all git and Github command lines to be referenced for you.

> [github-git-cheat-sheet.pdf](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)
>
> [git-docs-all-commends](https://git-scm.com/docs/git#_git_commands)

### Tracked files by git have three stages

* Committed
  Unmodified changes from the last commit snapshot, when making changes to these files
  content then moved to modified stage
* Modified
  Changes made to files since last commit snapshot, when you satisfied with changes and
  stage them for commit will move to the staged area
* Staged
  Changes marked to be added into the next commit snapshot, now can commit it to the origin
  repositories

### Untracked Files

mean that git sees a new file that didn't exist in her last commit. and add them to stage are to
be ready to commit

```shell
$ git status
$ git status --short
```

> This commend show the status of tracked and untracked files for your local and remote origin repository

```shell
$ git diff
$ git diff --staged
```

 this commend answer the following two questions

> 1- What changes have I staged that are ready to be committed?
>
> 2- What changes have I made but not yet staged?

![git-diff](https://raw.githubusercontent.com/aboelkassem/Git/master/images/git%20diff.png "git-diff command")

### Push committed changes to Origin Master branch

![push-committed](https://raw.githubusercontent.com/aboelkassem/Git/master/images/push%20committed.png "push committed changes to origin master")

After Commit push these files from local project to remote origin repository on Github

```shell
$ git push origin master
$ touch <file_name> # create a new file
```

### Track commits and sees the history of previous commits

```shell
$ git log
$ git log -1
$ git log --oneline
$ git log --stat
$ git log --patch
```

### Commit Message

There are guidelines are followed to commit message to be useful and helpful to other
contributors there are a blog that had a lot of information about these seven rules in [this blog](https://chris.beams.io/posts/git-commit/)

- Separate subject from body with a blank line
- Limit the subject line to 50 characters
- Capitalize the subject line
- Do not end the subject line with a period
- Use the imperative mood in the subject line
- Wrap the body at 72 characters
- Use the body to explain what and why vs. how

### Remove and Move Files

```shell
$ git rm <file-name> # remove file from project and git untracks it
$ git rm --cached <file-name> # only git untracks it but keeping in local repo$ git mv <old-file-name> <new-name> # to rename file
$ git reset head <file-name> # to stop tracking this file
```

### Branches

branches to organize your code to adding new features or working separately from base code
and merge this after finishing or creating a pull request. especially working with multiple collaborators to get a copy of the version and work in it and merge it This tool is animate to understanding branching in git

```shell
$ git checkout <name-of-new-branche> # working/switching on new_branch and commit to it
$ git checkout -b <name-of-new-branch> # creating and working/switching on new_branch and commit to it
$ git checkout master # working/switching in master brance
$ git branch # list of branches do you have
$ git branch <name-of-branche> # create new branch but don't switch to it (checkout)
$ git branch -m <old-name> <new-name> # rename a branch
$ git branch -d <branch-name> # delete a branch
$ git branch -D <branch-name> # Force delete a branch if this branch have commits do not merged yet
```

![git-branches](https://raw.githubusercontent.com/aboelkassem/Git/master/images/branches.png "git branches")

### Merge

merge command it to merge branches with all its commits and working files to the master branch. if you are a contributor you can make branches and working at them and merge them as a pull request to your master branch and send it to the origin master branch as also pull request to be merged

![merge-command](https://raw.githubusercontent.com/aboelkassem/Git/master/images/merge.png "merge command")

### Git stash

git stash temporarily shelves (or stashes) changes you've made to your working copy. The git stash command takes your uncommitted changes (both staged and unstaged), saves them away for later use, and then reverts them from your working copy

```shell
$ git stash # saving our working directory and staging area as a secert box
$ git stash list # get list a stashes or progress chages that we've stashed
$ git stash pop # get the chages/files from stash to dropped back into his working directory
```

### Git reset

git reset allow us to move commits from history back into our working or staging area

![git-reset](https://raw.githubusercontent.com/aboelkassem/Git/master/images/git%20reset.png "git-reset command")

```shell
$ git reset --soft <head-of-commit>
$ git reset --mixed <head-of-commit>
$ git reset --hard <head-of-commit>
```

<hr>

[Edit this page in Github](https://github.com/aboelkassem/Git/blob/master/README.md)