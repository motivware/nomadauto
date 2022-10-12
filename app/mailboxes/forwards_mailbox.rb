class ForwardsMailbox < ApplicationMailbox
  before_processing :extract_recipient

  def process
    project_id = Project.find_by(user_id: @recipient.id)
    p mail.from.to_s
    Ticket.create({
      subject: mail.subject,
      from: mail.from,
      details: mail.body,
      project_id: project_id.id
    })
  end

  def extract_recipient
    # p mail.to.to_s.split('@').last.split('.').first
    @recipient = User.find_by(subdomain: mail.to.to_s.split('@').first.split('.').last)
  end

end