# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ProjectsController, type: :routing do
  describe 'routing' do
    it 'routes to #index' do
      expect(get: 'http://testing.lvh.me/projects').to route_to('projects#index')
    end

    it 'routes to #new' do
      expect(get: 'http://testing.lvh.me/projects/new').to route_to('projects#new')
    end

    it 'routes to #show' do
      expect(get: 'http://testing.lvh.me/projects/1').to route_to('projects#show', id: '1')
    end

    it 'routes to #create' do
      expect(post: 'http://testing.lvh.me/projects').to route_to('projects#create')
    end
  end
end
