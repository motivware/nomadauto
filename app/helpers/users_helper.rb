# frozen_string_literal: true

module UsersHelper
  def user_status(_user)
    if logged_in?
      content_tag(:span, '', class: 'glyphicon glyphicon-ok color-success')
    else
      'Invitation Pending'
    end
  end
end
