require 'rails_helper'

RSpec.describe "conversations/edit", type: :view do
  let(:conversation) {
    Conversation.create!(
      subject: "MyString",
      contact: nil
    )
  }

  before(:each) do
    assign(:conversation, conversation)
  end

  it "renders the edit conversation form" do
    render

    assert_select "form[action=?][method=?]", conversation_path(conversation), "post" do

      assert_select "input[name=?]", "conversation[subject]"

      assert_select "input[name=?]", "conversation[contact_id]"
    end
  end
end
