class ConversationMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.conversation_mailer.new_post.subject
  #
  def new_post
    headers["In-Reply-To"] = params[:in_reply_to]
    headers["References"] = params[:references]

    mail to: params[:to], bcc: params[:bcc]
  end

end
