# Essential Git Commands Reference

## Repository Setup
git init                    # Initialize a new Git repository
git clone <url>            # Clone a repository from remote source
git remote add origin <url> # Connect local repo to remote repository

## Basic Commands
git status                 # Check status of working directory
git add <file>            # Stage specific file for commit
git add .                 # Stage all changes for commit
git commit -m "message"   # Commit staged changes with a message
git push                  # Upload commits to remote repository
git pull                  # Download and merge changes from remote

## Branching
git branch                # List all local branches
git branch <name>        # Create new branch
git checkout <branch>    # Switch to specified branch
git checkout -b <name>   # Create and switch to new branch
git merge <branch>       # Merge specified branch into current branch

## History and Tracking
git log                  # View commit history
git diff                 # Show changes between working directory and staging
git blame <file>         # Show who changed what and when in a file

## Undoing Changes
git reset <file>         # Unstage file while keeping changes
git reset --hard HEAD    # Discard all local changes
git revert <commit>      # Create new commit that undoes specified commit

## Advanced Operations
git stash                # Temporarily store modified files
git stash pop           # Restore stashed changes
git tag <version>       # Mark specific commit with a tag
git fetch               # Download objects from remote without merging

## Configuration
git config --global user.name "Name"     # Set username
git config --global user.email "email"   # Set email
git config --list                        # List all configurations

# Best Practices
- Write clear, descriptive commit messages
- Commit early and often
- Create branches for new features
- Pull before pushing to avoid conflicts

## Jekyll Commands
jekyll new <site_name>    # Create a new Jekyll site
jekyll serve              # Run local development server
jekyll serve --watch      # Run server and watch for changes
jekyll build              # Build site to _site directory
jekyll build --watch      # Build site and watch for changes
bundle exec jekyll serve  # Run Jekyll through Bundler
bundle update             # Update all gem dependencies
bundle install            # Install dependencies from Gemfile

# Jekyll Best Practices
# - Use _config.yml for site-wide configurations
# - Place templates in _layouts directory
# - Store reusable content in _includes
# - Put posts in _posts with YYYY-MM-DD-title.md format
# - Use collections for custom content types



