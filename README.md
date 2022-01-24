# README
# Motivware CRM

Motivware is a web-based sales crm application that provides the capability for creating tasks, creating contacts and more coming soon.

# Tech Stack
- [Ruby on Rails](https://guides.rubyonrails.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Javascript](https://www.javascript.com/)
- [Sass](https://sass-lang.com/)

# Setting up your Dev Environment
If your computer is not setup to run ruby on rails yet - then you can follow one of the links below. These links will provide instructions on how to get your computer ready for developing rails. (Choose ruby 2.7.4 and rails 5.2.4.4) 

[GoRails - Windows Setup](https://gorails.com/setup/windows/10)

[GoRails - MAC Setup](https://gorails.com/setup/osx/10.14-mojave)

[GoRails - Ubuntu](https://gorails.com/setup/ubuntu/16.04)

Once your computer is setup and running ruby on rails with Postgres you can clone the project and start working locally. Open your terminal window and follow the steps below to get a local version of motivware setup on your computer. 

```
mkdir projects
cd projects
git clone https://github.com/motivware/nomadauto.git
cd nomadauto
bundle install
rails db:create
rails db:migrate
rails server -p 3000 -b lvh.me
```

You can now open your browser to [lvh.me:3000](lvh.me:3000)
# Tech Features

  - User authenticated accounts with teams
  - Multi-tenant subdomain support
  - 30 day free trial access with stripe integration
  - Newlsetter integration with mailchimp
  - Contact form functionality
  - Mobile friendly landing pages

# Motivware Features 

  - Create Contacts
  - Create Tasks
  - Invite Multiple Team Members
  
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

5. Create pull request using github 
