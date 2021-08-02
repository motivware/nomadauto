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
            plan_id: '2', activated: 'TRUE', subdomain: 'company' )

Project.create(title: 'Mechanic Shop',
               details: 'This is a demo for an auto mechanic shop',
               user_id: '1')

customer_list = [
  ["", "John", "Smith", 4121231234, "test.com", "test@email.com", 1 ],
  ["", "Kevin", "Steven", 4121231234, "test.com", "test@email.com", 1 ],
  ["", "Jeff", "Rock", 4125431234, "test.com", "test@email.com", 1 ],
  ["", "Craig", "Smith", 4121221212, "test.com", "test@email.com", 1 ],
  ["", "Ray", "Fenz", 4121231512, "test.com", "test@email.com", 1 ],
  ["", "Ryan", "Fenz", 4112231512, "test.com", "test@email.com", 1 ],
  ["", "Devon", "McDonald", 4121221212, "test.com", "test@email.com", 1 ],
  ["", "Rebecca", "Leon", 4121231512, "test.com", "test@email.com", 1 ],
  ["", "Winston", "Settle", 4112231512, "test.com", "test@email.com", 1 ]
]

vehicles_list = [
  ["1GNKVFED0HJ335214", "Subaru", "Outback", "Subaru", "2019", "10,000", "3.6L; DOHC; 24V; DI", "", "Automatic" , 1],
  ["1GNKVFED0HJ335214", "Chevrolet", "Traverse", "General Motors", "2009", "90,000", "V6, 3.6L; DOHC; 24V; DI", "", "Automatic" , 1],
  ["1GNKVFED0HJ335214", "Dodge", "Dakota", "Dodge", "2019", "10,000", "V6, 3.6L; DOHC; 24V; DI", "", "Automatic" , 1],
  ["1GNKVFED0HJ335524", "Chevrolet", "Malibu", "General Motors", "2000", "10,000", "V6, 3.6L; DOHC; 24V; DI", "", "Automatic" , 1],
  ["1GNKVFED0HJ335424", "Honda", "Civic", "Honda", "2008", "100,000", "V6, 3.6L; DOHC; 24V; DI", "", "Manual" , 1],
  ["1GNKVFED0HJ335474", "Honda", "Prelude", "Honda", "1999", "58,000", "V6, 3.6L; DOHC; 24V; DI", "", "Automatic" , 1],
  ["1GNKVFED0HJ331274", "Toyota", "Outlander", "Toyota", "2008", "50,000", "V6, 3.6L; DOHC; 24V; DI", "", "Automatic" , 1],
  ["1GNKVFED0HJ330974", "Acura", "Mdx", "Subaru", "2008", "120,000", "V6, 3.6L; DOHC; 24V; DI", "", "Automatic" , 1],
  ["1GNKVFED0HJ330874", "Toyata", "Prius", "Toyota", "2007", "19,000", "V6, 3.6L; DOHC; 24V; DI", "", "Manual" , 1],
]

parts_list = [
  ["Fender", "Part description", 1, 1, "100", "10", "511"],
  ["Bumper", "Part description", 1, 1, "100", "10", "999"],
  ["Hinge", "Part description", 1, 1, "100", "10",  "882"],
  ["Door latch", "Part description", 1, 1, "100", "10", "123"],
  ["Alternator", "Part description", 1, 1, "100", "10", "124"],
  ["Odometer", "Part description", 1, 1, "100", "10",  "412"],
  ["Fog light", "Part description", 1, 1, "100", "10",  "231"],
  ["Headlight", "Part description", 1, 1, "100", "10",  "111"],
]

workorders_list = [
  ["Replace Catalytic Converter", "description", "Open", "High", "John Clark", "10", "400", 1, 1],
  ["Inspect For Fluid Leaks", "description", "Open", "High", "John Clark", "10", "400", 1, 1],
  ["Replace Catalytic Converter", "description", "Open", "High", "John Clark", "10", "400", 1, 1],
  ["Brake Replacement", "description", "Closed", "Low", "John Clark", "10", "400", 1, 1],
  ["Tire Change", "description", "Closed", "High", "John Clark", "10", "400", 1, 1],
  ["Replace Catalytic Converter", "description", "Pending", "High", "John Clark", "10", "400", 1, 1],
  ["Replace Catalytic Converter", "description", "Open", "Low", "John Clark", "10", "400", 1, 1],
  ["Replace Catalytic Converter", "description", "Open", "High", "John Clark", "10", "400", 1, 1],
]

invoices_list = [
  ["2021-07-31", "100", "15", "10", "100", "100", "100", 1, 1, 1, 1, 1],
  ["2021-07-29", "100", "15", "10", "100", "100", "100", 1, 1, 1, 1, 1],
  ["2021-06-25", "100", "15", "10", "100", "100", "100", 1, 1, 1, 1, 1],
  ["2021-03-22", "100", "15", "10", "100", "100", "100", 1, 1, 1, 1, 1],
  ["2021-02-20", "100", "15", "10", "100", "100", "100", 1, 1, 1, 1, 1],
  ["2021-02-19", "100", "15", "10", "100", "100", "100", 1, 1, 1, 1, 1],
  ["2021-01-18", "100", "15", "10", "100", "100", "100", 1, 1, 1, 1, 1],
  ["2021-01-12", "100", "15", "10", "100", "100", "100", 1, 1, 1, 1, 1],
]

customer_list.each do |company, first_name, last_name, phone_number, website, email, project_id|
  Customer.create( company: company, first_name: first_name,
                  last_name: last_name, phone_number: phone_number,
                  website: website, email: email, project_id: project_id )
  end

vehicles_list.each do |vin, make, model, manufacturer, year, miles, engine, license_plate, transmission, project_id| 
  Vehicle.create(vin: vin, make: make, model: model, manufacturer: manufacturer, 
                 year: year, miles: miles, engine: engine, license_plate: license_plate, 
                 transmission: transmission, project_id: project_id)
  end

parts_list.each do |name, description, vehicle_id, project_id, price, quantity, part_number| 
  Part.create(name: name, description: description, vehicle_id: vehicle_id, 
                project_id: project_id, price: price, quantity: quantity, part_number: part_number)
  end

workorders_list.each do |title, description, status, priority, owner, time, charge, project_id, user_id| 
  Workorder.create(title: title, description: description, status: status, priority: priority, 
                    owner: owner, time: time, charge: charge, project_id: project_id, user_id: user_id)                                 
  end

invoices_list.each do |date, subtotal, otherfees, salestax, total, paid, due, project_id, workorder_id, customer_id, vehicle_id, part_id| 
  Invoice.create(date: date, subtotal: subtotal, otherfees: otherfees, salestax: salestax, total: total, paid: paid, 
               due: due, project_id: project_id, workorder_id: workorder_id, customer_id: customer_id, vehicle_id: vehicle_id, part_id: part_id)
  end
