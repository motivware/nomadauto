# frozen_string_literal: true

module Users
	class PostsController < UsersController
		before_action :set_conversation

		def create 
			post = @conversation.posts.new(post_params)
			@contact = @project.contacts.find(params[:contact_id])

			post.author = current_user
			respond_to do |format|
				if post.save 
					ReplyJob.perform_later(post)
					format.turbo_stream { render turbo_stream: turbo_stream.replace("form", partial: "users/posts/form", locals: { project: @project, conversation: @conversation, post: @post } )}
					format.html { redirect_to project_contact_conversation_path(@project, @contact, @conversation) }
				else
					format.turbo_stream { render turbo_stream: turbo_stream.replace("form", partial: "users/posts/form", locals: { project: @project, conversation: @conversation, post: @post } )}
					format.html { redirect_to project_contact_conversation_path(@project, @contact, @conversation) }
				end
			end
		end
		
		private 

		def set_conversation
			@project = Project.find(params[:project_id])
			@conversation = @project.conversations.find(params[:conversation_id])
		end

		def post_params
			params.require(:post).permit(:body)
		end
	end
end