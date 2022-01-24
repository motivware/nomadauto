# frozen_string_literal: true

# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# remove default error validations in rails
ActionView::Base.field_error_proc = proc do |html_tag, _instance|
  html_tag.html_safe
end
