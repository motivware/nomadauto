require 'rails_helper'

RSpec.describe "columns/show", type: :view do
  before(:each) do
    assign(:column, Column.create!(
      tasks: nil,
      name: "Name"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
    expect(rendered).to match(/Name/)
  end
end
