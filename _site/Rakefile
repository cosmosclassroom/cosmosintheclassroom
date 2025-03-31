require 'rake'

desc 'Clean the site'
task :clean do 
  sh 'bundle exec jekyll clean'
end

desc 'Build the site'
task :build do
  sh 'bundle exec jekyll build'
end

desc 'Serve the site locally'
task :serve do
  sh 'bundle exec jekyll serve'
end

desc 'Full rebuild and serve'
task :rebuild => [:clean, :build, :serve] do
  puts "Site rebuilt and served at http://localhost:4000"
end
