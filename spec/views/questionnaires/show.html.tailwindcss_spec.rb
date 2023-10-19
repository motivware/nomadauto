require 'rails_helper'

RSpec.describe "questionnaires/show", type: :view do
  before(:each) do
    assign(:questionnaire, Questionnaire.create!(
      name: "Name"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
  end
end
