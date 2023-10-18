require 'rails_helper'

RSpec.describe "responses/new", type: :view do
  before(:each) do
    assign(:response, Response.new(
      questionnaire: nil,
      answers: ""
    ))
  end

  it "renders new response form" do
    render

    assert_select "form[action=?][method=?]", responses_path, "post" do

      assert_select "input[name=?]", "response[questionnaire_id]"

      assert_select "input[name=?]", "response[answers]"
    end
  end
end
