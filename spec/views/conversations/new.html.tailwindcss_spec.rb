require 'rails_helper'

RSpec.describe "conversations/new", type: :view do
  before(:each) do
    assign(:conversation, Conversation.new(
      subject: "MyString",
      contact: nil
    ))
  end

  it "renders new conversation form" do
    render

    assert_select "form[action=?][method=?]", conversations_path, "post" do

      assert_select "input[name=?]", "conversation[subject]"

      assert_select "input[name=?]", "conversation[contact_id]"
    end
  end
end
