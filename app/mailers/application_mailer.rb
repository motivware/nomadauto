# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: 'noreply@motivware.com'
  layout 'mailer'
end
