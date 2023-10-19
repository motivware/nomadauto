require 'rails_helper'

RSpec.describe "responses/show", type: :view do
  before(:each) do
    assign(:response, Response.create!(
      questionnaire: nil,
      answers: ""
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
    expect(rendered).to match(//)
  end
end
