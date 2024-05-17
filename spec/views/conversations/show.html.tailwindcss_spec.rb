require 'rails_helper'

RSpec.describe "conversations/show", type: :view do
  before(:each) do
    assign(:conversation, Conversation.create!(
      subject: "Subject",
      contact: nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Subject/)
    expect(rendered).to match(//)
  end
end
