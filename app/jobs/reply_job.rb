class ReplyJob < ApplicationJob
	attr_reader :post

	def perform(post)
		return if post.message_id?
		
		@post = post
		
		mail = ConversationMailer.with(
			to: "noreply@motivware.com",
			reply_to: "conversation-#{@post.conversation_id}@example.com",
			bcc: recipients.map { |r| "#{r.name} <#{r.email}>" },
			post: @post,
			conversation: conversation,
			in_reply_to: previous_message_ids.last,
			references: previous_message_ids
		).new_post.deliver_now

		post.update(message_id: mail.message_id)
	end

	def conversation
		@conversation ||=	post.conversation
	end

	def recipients
		@recipients ||=	conversation.authors - [post.author]
	end

	def previous_message_ids
		@previous_message_ids ||= conversation.posts.where.not(id: post.id).pluck(:message_id).compact
	end
end