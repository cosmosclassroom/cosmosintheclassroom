source "https://rubygems.org"

# Ruby version requirement
ruby ">= 3.2.0"

# Core Gems
gem "webrick", "~> 1.8"
# Jekyll version is managed by github-pages gem
gem "activesupport", "~> 7.0" # Pin to version compatible with Ruby 3.2
gem "rake", "~> 13.0"
gem "highline"
gem "kramdown-math-katex"
gem "csv"
gem "json"
gem "nokogiri"
gem "faraday-retry"

# Windows-specific gems
platform :mswin, :mingw, :x64_mingw do
  gem "wdm", ">= 0.1.0"
end

group :jekyll_plugins do
  gem "github-pages", "~> 231"
  gem "kramdown-parser-gfm"
  gem "jekyll-relative-links"
  gem "jekyll-redirect-from"
  gem "jekyll-sitemap"
  gem "jekyll-paginate-v2"
end

group :development do
  gem "solargraph"
  gem "ruby-debug-ide"
  gem "debase"
end
