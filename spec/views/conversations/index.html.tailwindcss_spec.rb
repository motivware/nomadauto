require 'rails_helper'

RSpec.describe "conversations/index", type: :view do
  before(:each) do
    assign(:conversations, [
      Conversation.create!(
        subject: "Subject",
        contact: nil
      ),
      Conversation.create!(
        subject: "Subject",
        contact: nil
      )
    ])
  end

  it "renders a list of conversations" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Subject".to_s), count: 2
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
  end
end
