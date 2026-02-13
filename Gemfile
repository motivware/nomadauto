# frozen_string_literal: true

source 'https://rubygems.org'

gem 'jquery-rails', '4.4.0'
gem 'public_activity', '2.0.2'
gem "puma", "6.4.3"
gem 'rails', '~> 8.0.0'
gem 'record_tag_helper', '~> 1.0'
gem 'importmap-rails'
gem 'stimulus-rails'
gem 'sprockets-rails'
gem 'turbo-rails', '~> 2.0'
gem 'jsbundling-rails'
gem 'sass-rails', '~> 6.0'
gem 'wicked_pdf'
gem 'wkhtmltopdf-binary'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.13'
# Redis + Sidekiq for background jobs
gem 'redis', '~> 5.0'
gem 'sidekiq', '~> 7.2'
gem 'sidekiq-scheduler', '~> 5.0'
gem 'bcrypt', '3.1.21'
gem 'bootstrap-sass', '>= 3.4.1'
gem 'dotenv-rails'
gem 'font-awesome-sass', '~> 4.6.2'
gem 'hirb', '0.7.3'

# Use gibbon to connect to the mailchimp API
gem 'gibbon'
# Use Stripe for payment processing
gem 'stripe'
gem 'chartkick', '>= 3.2.0'
# gem 'figaro', '1.1.1'
gem 'groupdate'
gem "kt-paperclip", "~> 6.4", ">= 6.4.1"
gem "recaptcha", require: "recaptcha/rails"
gem "tailwindcss-rails", "~> 4.4"
gem 'image_processing', '~> 1.2'
# Pin logger below 1.7 to avoid default-gem activation conflicts on older Bundler/deploy images
gem 'logger', '= 1.6.0'



# Linter
gem 'rubocop', '1.43', require: false

# Google maps Integration
gem 'geocoder'
gem 'pg', '~> 1.6'
# roles and multi-tenant
gem 'pundit', '~> 2.1'
# gem 'rails_12factor'
gem 'acts_as_list', '~> 1.0', '>= 1.0.2'

# Playwright for browser automation (monitors + tests)
gem 'capybara'
gem 'capybara-playwright-driver'

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'faker'
  gem 'rspec-rails', '~> 8.0'
  gem 'letter_opener', group: :development
  gem 'railroady'
end

group :development do
  gem 'listen', '3.5.0'
  gem 'web-console', '~> 4.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  # gem 'spring'
  # gem 'spring-watcher-listen', '2.0.0'
end

group :production do
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
ruby '3.3.0'
