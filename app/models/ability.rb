# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user); end

  def validate_user
    raise CanCan::AccessDenied unless current_user.id == params[:id].to_i
  end
end
