# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Plan.create(name: 'basic', price: 0)
Plan.create(name: 'pro', price: 49)
Plan.create(name: 'invite', price: 0)

User.create(name: 'Damon Clark', email: 'demouser@test.com', password: 'MotiVw@re',
            plan_id: '2', activated: 'TRUE', subdomain: 'company')

Project.create(title: 'Demo Shop',
               details: 'This is a demo',
               user_id: '1')

contact_list = [
  ['', 'John', 'Smith', 592 - 775 - 0o112, 'N/A', 'jsmith@gmail.com', 1],
  ['', 'Kevin', 'Steven', 709 - 474 - 9595, 'N/A', 'ksteven@outlook.com', 1],
  ['', 'Jeff', 'Rock', 846 - 635 - 3297, 'N/A', 'jeff.rock144@gmail.com', 1],
  ['', 'Craig', 'Smith', 576 - 331 - 8419, 'N/A', 'craig.smith@email.com', 1],
  ['', 'Ray', 'Fenz', 471 - 562 - 1377, 'N/A', 'rfenz56@gmail.com', 1],
  ['', 'Ryan', 'Oswalt', 768 - 394 - 6097, 'N/A', 'oswalt891@yahoo.com', 1],
  ['', 'Devon', 'McDonald', 454 - 552 - 8321, 'N/A', 'mcodnald0109@yahoo.com', 1],
  ['', 'Rebecca', 'Leon', 403 - 311 - 4914, 'N/A', 'leon12038@outlook.com', 1],
  ['', 'Winston', 'Settle', 424 - 714 - 6431, 'N/A', 'wsettle134@gmail.com', 1]
]

contact_list.each do |company, first_name, last_name, phone_number, website, email, project_id|
  Contact.create(company: company, first_name: first_name,
                  last_name: last_name, phone_number: phone_number,
                  website: website, email: email, project_id: project_id)
end