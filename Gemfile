# frozen_string_literal: true

source 'https://rubygems.org'

gem 'coffee-rails', '4.2.2'
gem 'jquery-rails', '4.1.1'
gem "puma", ">= 4.3.12"
gem 'rails', '6.1.6.1'
gem 'react-rails'
gem 'sass-rails', '~> 6.0'
gem 'turbolinks', '5.0.0'
gem 'uglifier', '3.0.0'
gem 'webpacker'
gem 'wicked_pdf'
gem 'wkhtmltopdf-binary'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.10', '>= 2.10.1'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '3.0'
gem 'bcrypt', '3.1.16'
gem 'bootstrap-sass', '>= 3.4.1'
gem 'dotenv-rails'
gem 'font-awesome-sass', '~> 4.6.2'
gem 'hirb', '0.7.3'

# Use gibbon to connect to the mailchimp API
gem 'gibbon'
# Use Stripe for payment processing
gem 'stripe', '1.48.0'
gem 'chartkick', '>= 3.2.0'
# gem 'figaro', '1.1.1'
gem 'groupdate'
gem 'paperclip', '~> 6.1'
gem "recaptcha", require: "recaptcha/rails"
gem "tailwindcss-rails", "~> 2.0"
gem 'image_processing', '~> 1.2'


# Linter
gem 'rubocop', '0.63.1', require: false

# Google maps Integration
gem 'cancan'
gem 'geocoder'
gem 'pg', '1.1.4'

# roles and multi-tenant
gem 'pundit', '~> 2.1'
# gem 'rails_12factor'
gem 'acts_as_list', '~> 1.0', '>= 1.0.2'

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'capybara'
  gem 'rspec-rails', '~> 6.0.0.rc1'
  gem 'selenium-webdriver'
  gem 'letter_opener', group: :development
  gem 'railroady'
end

group :development do
  gem 'listen', '3.0.5'
  gem 'web-console', '3.0.0'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  # gem 'spring'
  # gem 'spring-watcher-listen', '2.0.0'
end

group :production do
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
ruby '3.1.2'