# README
# Motivware CRM

Motivware is a web-based customer support help desk application that provides a simple solution for small customer support teams to manage tickets.

# Tech Stack
- [Ruby on Rails](https://guides.rubyonrails.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Javascript](https://www.javascript.com/)
- [Sass](https://sass-lang.com/)

# Motivware Application Setup

## Install Ruby 2.7.6 with rbenv
1.	Clone rbenv into ~/.rbenv: `git clone https://github.com/rbenv/rbenv.git ~/.rbenv`

2.	Initialize rbenv when terminal is opened: `rbenv init`
    
     <em>You may have to exit and reopen terminal to activate rbenv</em>

4.	Install ruby 2.7.6: `rbenv install 2.7.6`
      
     <em>If you get an error saying that 2.7.6 is not available<em>, try running: `git clone https://github.com/rbenv/ruby-build.git “$(rbenv root)”/plugins/ruby-build`

## Setup the Postgres Database
1.	Get your system ready to install postgres: `sudo apt update`
    
2.	Run the installation command for PostgreSQL by running: `sudo apt install postgresql`

3.	Verify the active status of PostgreSQL by running: `sudo systemct1 status postgresql`
    
    <em>Check that active shows in output<em>
    
4.	Start the PostgreSQL server: `Sudo -I -u postgres`
    
5.	Enter PSQL interpreter: `psql`
    
6.	Create role on pgsql with privilege as “superuser”: `CREATE ROLE root superuser;`
    
7.	Then create the user by running: `CREATE USER username;`
    
8.	Assign privilege to user: `GRANT ROOT TO username;`
    
9.	Then enable login with that user: `ALTER ROLE root WITH LOGIN;`

10.	Quit psql: `\q`

11.	Quit postgres: `exit`


## Setup the Motivware application
1.	Clone the motivware app: `git clone https://github.com/motivware/nomadauto`
    
2.  Move into cloned directory: `cd nomadauto`
     
3.  Install postgresql-devel package: `sudo apt-get install libpg-dev`
      
4.	Install gem dependencies: `Bundle Install`

5.	Install ruby-railties:`apt install ruby-railties`

6.	Setup Ruby version installed by rbenv: `rbenv local 2.7.6` and `rbenv rehash`
       
7.	Install nodejs: `sudo apt-get install nodejs`
      
8.	Create the databases: `rails db:migrate`
      
9.	Run the rails server: `rails server -p 3000 -b lvh.me`

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
