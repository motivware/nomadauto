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
    render text: "HZEEI0l56ltW99QT5CxMpFwJGRHqiKh4T204Z0r16zg"
  end
end
