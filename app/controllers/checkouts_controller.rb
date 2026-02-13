# frozen_string_literal: true

class CheckoutsController < ApplicationController
  before_action :logged_in_user

  def create
    checkout_session = Stripe::Checkout::Session.create(
      customer_email: current_user.email,
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [{ price: ENV['STRIPE_PRICE_ID'], quantity: 1 }],
      success_url: checkout_success_url(subdomain: current_user.subdomain),
      cancel_url: checkout_cancel_url(subdomain: current_user.subdomain)
    )
    redirect_to checkout_session.url, allow_other_host: true
  end

  def success
    current_user.update!(plan_id: 2)
    flash[:success] = 'Welcome to SynthMonitor Pro!'
    redirect_to root_path
  end

  def cancel
    flash[:info] = 'Checkout cancelled. You can subscribe anytime from Settings.'
    redirect_to root_path
  end
end
