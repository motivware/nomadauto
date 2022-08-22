# frozen_string_literal: true

require_relative 'boot'

require 'rails/all'
require 'csv'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Saasapp
  class Application < Rails::Application
    # We use a cookie_store for session data
    config.session_store :cookie_store,
                         key: '_saasapp_session',
                         domain: :all
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.autoload_paths += Dir["#{config.root}/lib/**/"]
    # config.middleware.use CustomDomainCookie, ".lvh.me"

    config.to_prepare do 
      
      # some monkey patches
      Rails::Conductor::ActionMailbox::InboundEmailsController.class_eval do
        private
        def new_mail
          Mail.new(mail_params.except(:attachments).to_h).tap do |mail|
            mail[:bcc]&.include_in_headers = true
            mail_params[:attachments].to_a.compact_blank.each do |attachment|
              mail.add_file(filename: attachment.original_filename, content: attachment.read)
            end
          end
        end
      end    
    end
  end
end
