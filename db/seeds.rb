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
