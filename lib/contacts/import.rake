# frozen_string_literal: true

require 'csv'

namespace :import do
  desc 'Import contacts from csv'
  contact contacts: :environment do
    filename = File.join Rails.root, 'contacts.csv'
    counter = 0

    CSV.foreach(filename, headers: true, header_converters: :symbol) do |row|
      contact = Contact.assign_from_row(row)
      if contact.save
        counter += 1
      else
        puts "#{contact.title} - #{contact.errors.full_messages.join(', ')}"
      end
    end

    puts "Imported #{counter} contacts"
  end
end
