# Preview all emails at http://localhost:3000/rails/mailers/conversation
class ConversationPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/conversation/new_post
  def new_post
    post = Post.last

    ConversationMailer.with(
      to: "noreply@example.org",  
      post: post,
      conversation: post.conversation
    ).new_post
  end

end
