# frozen_string_literal: true

class PagesController < ApplicationController
  def home; end

  def features
    @basic_plan = Plan.find(1)
    @pro_plan = Plan.find(2)
    @invite_plan = Plan.find(3)
  end

  def pricing
    @basic_plan = Plan.find(1)
    @pro_plan = Plan.find(2)
    @invite_plan = Plan.find(3)
  end

  def letsencrypt
    # use your code here, not mine
    render text: "9O6eVfIG0VUHej65RZaWURAPKM0jToZg7SMh0LEmLGs.IXKMeet-X-pDUiVENONb9g1ibOurGYOPwtg6qZRJb_I"
  end
end
