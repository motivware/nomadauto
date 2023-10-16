require 'rails_helper'

RSpec.describe "questionnaires/edit", type: :view do
  let(:questionnaire) {
    Questionnaire.create!(
      name: "MyString"
    )
  }

  before(:each) do
    assign(:questionnaire, questionnaire)
  end

  it "renders the edit questionnaire form" do
    render

    assert_select "form[action=?][method=?]", questionnaire_path(questionnaire), "post" do

      assert_select "input[name=?]", "questionnaire[name]"
    end
  end
end
