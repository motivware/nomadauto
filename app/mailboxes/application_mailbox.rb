class ApplicationMailbox < ActionMailbox::Base
  routing /.*@*.motivware.com/i => :forwards
end
