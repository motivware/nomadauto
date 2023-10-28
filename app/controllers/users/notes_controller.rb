# frozen_string_literal: true

module Users
	class NotesController < UsersController
		def create
			@project = Project.find(params[:project_id])
			@contact = Contact.find(params[:contact_id])
			@note = @contact.notes.create(params[:note].permit(:owner, :body))

			redirect_to project_contact_path(@project, @contact)
		end

		def destroy
			@project = Project.find(params[:project_id])
			@contact = Contact.find(params[:contact_id])
			@note = @contact.notes.find(params[:id])
			@note.destroy

			redirect_to project_contact_path(@project, @contact)
		end
	end
end
