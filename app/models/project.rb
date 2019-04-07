class Project < ApplicationRecord
  belongs_to :user
  #validates :title, :presence => true, :length => { :minimum => 5 }

  has_many :customers, dependent: :destroy
  has_many :deals, dependent: :destroy
  has_many :lists, dependent: :destroy
  has_many :workorders, dependent: :destroy
  has_many :invites, dependent: :destroy
  has_many :invoices, dependent: :destroy
  has_many :vehicles, dependent: :destroy
  has_many :parts, dependent: :destroy
  accepts_nested_attributes_for :workorders

end
