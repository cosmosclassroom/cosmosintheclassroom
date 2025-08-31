---
Layout: default
Title: Jekyll Quick Reference Guide
Author: Jonathan Corbett and Claude 3.5 Sonnett
css: /assets/css/style.css
---


# Jekyll Quick Reference Guide

## Basic Jekyll Commands
- `jekyll new site-name` - Create a new Jekyll site
- `jekyll serve` or `jekyll s` - Start local server
- `jekyll build` or `jekyll b` - Build the site
- `bundle exec jekyll serve` - Run with Bundler

## Front Matter
```yaml
---
layout: post
title: "My Post"
date: 2023-01-01
categories: [blog, tutorial]
math: true  # Enable LaTeX support
marp: true  # Enable Marp slides
---
```

## Directory Structure
```
.
├── _config.yml    # Configuration
├── _posts/        # Blog posts
├── _layouts/      # Templates
├── _includes/     # Reusable components
└── assets/        # Static files
```

## LaTeX Integration
- Inline math: `$formula$`
- Display math: `$$formula$$`
Example:
$E = mc^2$
$$\frac{d}{dx}(x^n) = nx^{n-1}$$

## Marp Compatibility
```yaml
---
marp: true
theme: default
---
```
- Slide separator: `---`
- Page number: `<!-- paginate: true -->`
- Background: `<!-- _backgroundColor: color -->`

## Common Liquid Tags
{% raw %}
```liquid
{{ page.title }}          # Page variable
{% include file.html %}   # Include component
{% if condition %}        # Conditional
{% for item in items %}   # Loop
```
{% endraw %}

## Code Highlighting
```ruby
# Code block with syntax highlighting
def hello
  puts "Hello, Jekyll!"
end
```

## Collections
```yaml
# In _config.yml
collections:
  my_collection:
    output: true
```

## Additional Tips
- Use `baseurl` in `_config.yml` for project pages
- Enable incremental builds: `jekyll serve --incremental`
- Draft posts go in `_drafts/` folder