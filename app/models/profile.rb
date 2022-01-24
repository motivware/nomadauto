# frozen_string_literal: true

class Profile < ActiveRecord::Base
  belongs_to :user
  belongs_to :project

  has_attached_file :avatar,
                    styles: { medium: '300x300>', thumb: '100x100>' },
                    default_url: '/images/:style/missing.png',
                    url: '/assets/:id/:style/:basename.:extension'
  validates_attachment_content_type :avatar, content_type: %r{\Aimage/.*\z}
end
