# frozen_string_literal: true

class PartsToInvoice < ApplicationRecord
  belongs_to :invoice
  belongs_to :part
end
