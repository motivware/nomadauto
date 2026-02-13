# frozen_string_literal: true

Plan.find_or_create_by!(id: 1) { |p| p.name = 'basic'; p.price = 0 }
Plan.find_or_create_by!(id: 2) { |p| p.name = 'pro'; p.price = 49 }
Plan.find_or_create_by!(id: 3) { |p| p.name = 'invite'; p.price = 0 }

user_list = [
  [1, 'Damon Clark', 'damon-user@test.com', 'password', 2, 'TRUE', Faker::Date.between(from: 2.days.ago, to: Date.today), 'testing'],
  [2, 'Owen Clark', 'owen-user@test.com', 'password', 3, 'TRUE', Faker::Date.between(from: 2.days.ago, to: Date.today), 'testing'],
  [3, 'Ruby Clark', 'ruby-user@test.com', 'password', 3, 'TRUE', Faker::Date.between(from: 2.days.ago, to: Date.today), 'testing'],
]

user_list.each do |id, name, email, password, plan_id, activated, activated_at, subdomain|
  unless User.exists?(id: id)
    User.new(id: id, name: name, email: email, password: password,
             plan_id: plan_id, activated: activated, activated_at: activated_at,
             subdomain: subdomain).save(validate: false)
  end
end

Project.find_or_create_by!(id: 1) do |p|
  p.title = 'Demo Shop'
  p.details = 'This is a demo'
  p.user_id = 1
end

Invite.find_or_create_by!(email: 'owen-user@test.com', subdomain: 'testing', project_id: 1)
Invite.find_or_create_by!(email: 'ruby-user@test.com', subdomain: 'testing', project_id: 1)

# Clear activation digest for seeded users (simulates confirmed email)
User.where(activated: true).where.not(activation_digest: nil).update_all(activation_digest: nil)

ActiveRecord::Base.connection.execute("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
ActiveRecord::Base.connection.execute("SELECT setval('projects_id_seq', (SELECT MAX(id) FROM projects))")
