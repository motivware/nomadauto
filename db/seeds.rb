# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Plan.create(id: 1, name: 'basic', price: 0)
Plan.create(id: 2, name: 'pro', price: 49)
Plan.create(id: 3, name: 'invite', price: 0)

user_list = [
  [1, 'Damon Clark', 'damon-user@test.com', 'password', 2, 'TRUE',Faker::Date.between(from: 2.days.ago, to: Date.today), 'testing'],
  [2, 'Owen Clark', 'owen-user@test.com', 'password', 3, 'TRUE', Faker::Date.between(from: 2.days.ago, to: Date.today), 'testing'],
  [3, 'Ruby Clark', 'ruby-user@test.com', 'password', 3, 'TRUE', Faker::Date.between(from: 2.days.ago, to: Date.today), 'testing'],
]

user_list.each do |id, name, email, password, plan_id, activated, activated_at, subdomain|
  User.new(id: id, name: name,
                  email: email, password: password,
                  plan_id: plan_id, activated: activated, activated_at: activated_at, subdomain: subdomain).save(validate: false)
end

Project.create(id: 1,
               title: 'Demo Shop',
               details: 'This is a demo',
               user_id: 1)

Invite.create(email: 'owen-user@test.com', 
              subdomain: 'testing',
              project_id: 1)

Invite.create(email: 'ruby-user@test.com', 
              subdomain: 'testing',
              project_id: 1)
              
40.times do 
  Contact.create(company: Faker::Company.name, 
                 first_name: Faker::Name.first_name,
                 last_name: Faker::Name.last_name,
                 phone_number: Faker::PhoneNumber.phone_number,
                 website: Faker::Internet.url,
                 email: Faker::Internet.email,
                 project_id: 1,
                 user_id: [1, 2, 3].sample)
  end
  
30.times do 
  Task.create(title: Faker::Lorem.word,
              description: Faker::Lorem.paragraph,
              status: ["Open", "Pending", "Closed"].sample,
              priority: ["High", "Medium", "Low"].sample,
              owner: ["Damon Clark", "Owen Clark", "Ruby Clark"].sample,
              project_id: 1,
              user_id: [1, 2, 3].sample)
  end

30.times do 
  Ticket.create(subject: Faker::Lorem.word,
                customer: Faker::Name.last_name + Faker::Name.first_name,
                assigned_to: ["Damon Clark", "Owen Clark", "Ruby Clark"].sample,
                priority: ["High", "Medium", "Low"].sample,
                status: ["Open", "Pending", "Closed", "On Hold"].sample,
                details: Faker::Lorem.paragraph,
                project_id: 1,
                due_date: Faker::Date.in_date_period,
                user_id: [1, 2, 3].sample)
  end

30.times do 
  Activity.create(action:["create", "update"].sample,
                  trackable_type: ["Ticket", "Contact", "Task"].sample,
                  trackable_id: 1,
                  created_at: Faker::Date.in_date_period,
                  updated_at: Faker::Date.in_date_period,
                  project_id: 1,
                  user_id: [1, 2, 3].sample)
  end