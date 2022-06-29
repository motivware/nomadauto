# frozen_string_literal: true

class Contact < ApplicationRecord
  belongs_to :user
  belongs_to :project

  has_many :tasks

  validates :first_name, :presence => true

  def first_last_name
    "#{first_name.capitalize} #{last_name.capitalize}"
  end

  def self.assign_from_row(row)
    contact = Contact.where(project_id: row[:project_id],
                                company: row[:company],
                                first_name: row[:first_name],
                                last_name: row[:last_name],
                                phone_number: row[:phone_number],
                                email: row[:email],
                                website: row[:website]).first_or_initialize
    contact
  end

  def self.import(file)
    counter = 0
    CSV.foreach(file.pathmap, headers: true, header_converters: :symbol) do |row|
      contact = Contact.assign_from_row(row)
      if contact.save
        counter += 1
      else
        puts "#{contact.title} - #{contact.errors.full_messages.join(', ')}"
      end
    end
    counter
  end
end
