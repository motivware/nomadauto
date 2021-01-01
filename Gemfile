source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '5.2.4.4'
# Use Puma as the app server
gem 'puma', '4.3.5'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 6.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '3.0.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '4.2.2'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# pdf generation gems
gem 'wicked_pdf'
gem 'wkhtmltopdf-binary'

# nokogiri
gem "nokogiri", ">= 1.10.4"

# action
# gem "actionpack", ">= 5.2.4.3"
# gem "activesupport", ">= 5.2.4.3"
# gem "actionview", ">= 5.2.4.4"

# Use jquery as the JavaScript library
gem 'jquery-rails', '4.1.1'

gem 'react-rails'

# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '5.0.0'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.10', '>= 2.10.1'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '3.0'
# Use ActiveModel has_secure_password
gem 'bcrypt', '3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use Twitter Bootstrap library for front end UI and layout
gem "bootstrap-sass", ">= 3.4.1"

# Use Font Awesome sass gem for adding icons
gem 'font-awesome-sass', '~> 4.6.2'

# Use herb for better database table display in console
gem 'hirb', '0.7.3'

# Use gibbon to connect to the mailchimp API
gem 'gibbon'

# Use Devise for user inviations
# gem 'devise',           '~> 4.2'
# gem 'devise_invitable', '~> 1.7.0'

# Use Stripe for payment processing
gem 'stripe', '1.48.0'

# Use Figaro for ENV variables
gem 'figaro', '1.1.1'

# User paparclip for image upload
gem 'paperclip', '~> 6.1'
# Charts with rails
gem 'chartkick', ">= 3.2.0"

# Analysis times of entry
gem 'groupdate'

# Google maps Integration
gem 'geocoder'

# Use pg as the database for Active Record
gem 'pg', '1.1.4'

# authorization library
gem 'cancan'

# subdomains
# gem 'apartment'

# pagination
gem 'will_paginate', '~> 3.0.3'
gem 'will_paginate-bootstrap'

# roles and multi-tenant
gem 'pundit', '~> 2.1'
#gem 'rails_12factor'

# sorting of list position
gem 'acts_as_list', '~> 1.0', '>= 1.0.2'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri

  # Gem letter opener to avoid sending emails
  gem "letter_opener", :group => :development

  # TDD
  gem 'capybara'

  # UML Diagram
  gem 'railroady'

end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '3.0.0'
  gem 'listen', '3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  # gem 'spring'
  #gem 'spring-watcher-listen', '2.0.0'
end

group :production do

end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
ruby '2.6.3'