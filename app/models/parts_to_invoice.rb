class PartsToInvoice < ApplicationRecord
  belongs_to :invoice
  belongs_to :part
end
