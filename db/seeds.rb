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

User.create(name: 'test user', email: 'user@test.com', password: 'MotiVw@re',
            plan_id: '2', activated: 'TRUE', subdomain: 'company' )

Project.create(title: 'Mechanic Shop',
               details: 'This is a demo for an auto mechanic shop',
               user_id: '1')

customer_list = [
  ["McDonalds", "John", "Smith", 4121231234, "test.com", "test/@email.com", 1 ],
  ["BurgerKing", "Kevin", "Steven", 4121231234, "test.com", "test/@email.com", 1 ],
  ["", "Jeff", "Rock", 4125431234, "test.com", "test/@email.com", 1 ],
  ["", "Craig", "Smith", 4121221212, "test.com", "test/@email.com", 1 ],
  ["", "Ray", "Fenz", 4121231512, "test.com", "test/@email.com", 1 ],
  ["", "Ryan", "Fenz", 4112231512, "test.com", "test/@email.com", 1 ]


]

customer_list.each do |company, first_name, last_name, phone_number, website, email, project_id|
  Customer.create( company: company, first_name: first_name,
                  last_name: last_name, phone_number: phone_number,
                  website: website, email: email, project_id: project_id )
end
