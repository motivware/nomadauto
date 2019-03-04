# README
# Motivware - Web Based Software as a Service App

Motivware is an open source customer relationship management application to assist auto-mechanic shops with organization and business process improvements. It will keep track of customers vehicles and the repairs that have been completed. It will generate invoices, help find parts, provide repair estimates and more!  

# In Its Current State 

Nomad Auto is currently being hosted at [Motivware](https://www.motivware.com). Users are able to sign up right away and start inviting their colleagues at the autoshop. Teams can be formed with autoshops that have multiple garages. Each team member can start creating work orders, adding customers, and view a timeline. Users after thirty days can then choose to pay for their subscription or request additional free time. 

# Features to be Created

•	Organize tasks for each mechanic

•	Generation of invoices 

•	Generation of repair estimates 

•	Assisting with data normalization 

•	Searching for best deals on parts 

•	Used as a search directory for customers and vehicles

•	Help to find instructions online to complete car repairs

•	Customer facing portal to share info

# Tech Stack
- [Ruby on Rails](https://guides.rubyonrails.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Javascript](https://www.javascript.com/)
- [Sass](https://sass-lang.com/)

# Setting up your Dev Environment
If your computer is not setup to run ruby on rails yet - then you can follow one of the links below. These links will provide instructions on how to get your computer ready for developing rails.

[GoRails - Windows Setup](https://gorails.com/setup/windows/10)

[GoRails - MAC Setup](https://gorails.com/setup/osx/10.14-mojave)

Once your computer is setup and running ruby on rails with Postgres you can clone the project and start working locally. Open your terminal window and follow the steps below to get a local version of motivware setup on your computer. 

```
mkdir projects
cd projects
git clone https://github.com/DamonClark/nomadauto/
cd nomadauto
bundle install
rails server -p 3000 -b lvh.me
```

You can now open your browser to [lvh.me:3000](lvh.me:3000)

# How to Contribute 
When contributing always make sure that you have the most recents changes by running `git pull`. Also you only want to make changes inside your own branch. You can follow the steps below to get started.

1. Create your personal branch:
```
git checkout -b <branch-name>
```

2. Open your editor of choice and make your code changes

3. View the files that you changed
```
git status
```

4. Add your changes to master
```
git add <files>
git commit -m '<commit_message>'
git push
```

4. Create pull request using github 
