json.extract! response, :id, :questionnaire_id, :answers, :created_at, :updated_at
json.url response_url(response, format: :json)
