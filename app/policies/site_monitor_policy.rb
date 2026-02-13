# frozen_string_literal: true

class SiteMonitorPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      project_ids = user.user_projects.map(&:id)
      scope.where(project_id: project_ids)
    end
  end

  def initialize(user, site_monitor)
    @user = user
    @site_monitor = site_monitor
  end

  def show?
    owns_project?
  end

  def create?
    owns_project?
  end

  def update?
    owns_project?
  end

  def destroy?
    owns_project?
  end

  def toggle?
    owns_project?
  end

  def run_now?
    owns_project?
  end

  private

  def owns_project?
    user.user_projects.map(&:id).include?(@site_monitor.project_id)
  end
end
