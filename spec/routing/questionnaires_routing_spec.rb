require "rails_helper"

RSpec.describe QuestionnairesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/questionnaires").to route_to("questionnaires#index")
    end

    it "routes to #new" do
      expect(get: "/questionnaires/new").to route_to("questionnaires#new")
    end

    it "routes to #show" do
      expect(get: "/questionnaires/1").to route_to("questionnaires#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/questionnaires/1/edit").to route_to("questionnaires#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/questionnaires").to route_to("questionnaires#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/questionnaires/1").to route_to("questionnaires#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/questionnaires/1").to route_to("questionnaires#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/questionnaires/1").to route_to("questionnaires#destroy", id: "1")
    end
  end
end
