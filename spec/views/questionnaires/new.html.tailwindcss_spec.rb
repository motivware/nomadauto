require 'rails_helper'

RSpec.describe "questionnaires/new", type: :view do
  before(:each) do
    assign(:questionnaire, Questionnaire.new(
      name: "MyString"
    ))
  end

  it "renders new questionnaire form" do
    render

    assert_select "form[action=?][method=?]", project_questionnaires_path, "post" do

      assert_select "input[name=?]", "questionnaire[name]"
    end
  end
end
