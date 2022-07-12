# app/helpers/ticket_helper.rb
module TicketHelper
	def current_page_params
		# Modify this list to whitelist url params for linking to the current page
		request.params.slice("status", "filter")
	end
end