require 'rails_helper'

RSpec.describe "columns/edit", type: :view do
  let(:column) {
    Column.create!(
      tasks: nil,
      name: "MyString"
    )
  }

  before(:each) do
    assign(:column, column)
  end

  it "renders the edit column form" do
    render

    assert_select "form[action=?][method=?]", column_path(column), "post" do

      assert_select "input[name=?]", "column[tasks_id]"

      assert_select "input[name=?]", "column[name]"
    end
  end
end
