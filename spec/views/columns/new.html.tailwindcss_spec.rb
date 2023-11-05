require 'rails_helper'

RSpec.describe "columns/new", type: :view do
  before(:each) do
    assign(:column, Column.new(
      tasks: nil,
      name: "MyString"
    ))
  end

  it "renders new column form" do
    render

    assert_select "form[action=?][method=?]", columns_path, "post" do

      assert_select "input[name=?]", "column[tasks_id]"

      assert_select "input[name=?]", "column[name]"
    end
  end
end
