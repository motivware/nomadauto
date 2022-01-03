# frozen_string_literal: true

class UserGroup < ActiveRecord::Base
  has_many :invites
end
