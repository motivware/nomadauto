# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What Is This?

SynthMonitor — a multi-tenant SaaS synthetic user monitoring tool built with Rails 7.0 and Ruby 3.3.0. Users get subdomain-based accounts with 30-day trials to run critical path automation tests in production on a scheduled basis and get alerted when something fails. Currently a stripped-down shell with auth, multi-tenancy, project scoping, invites, and trial/billing infrastructure in place.

## Commands

```bash
# Development
bin/dev                              # Start all processes (web, css, js) via foreman
bin/rails server -p 3000             # Rails server only
bin/rails tailwindcss:watch          # Tailwind CSS watch
yarn build --watch                   # esbuild JS watch

# Database
bin/rails db:prepare                 # Create + migrate
bin/rails db:migrate                 # Run migrations (PostgreSQL)
bin/rails db:seed                    # Seed plans, users, and demo project

# Tests
bundle exec rspec                    # All tests
bundle exec rspec spec/features      # Feature/E2E tests only
bundle exec rspec spec/features/login_spec.rb        # Single file
bundle exec rspec spec/features/login_spec.rb:8      # Single example by line
HEADLESS=true bundle exec rspec      # Headless browser mode

# Linting
rubocop                              # Ruby linter

# Assets
bin/rails assets:precompile          # Precompile for production
```

## Architecture

### Multi-Tenancy (Subdomain-Based)
- `config/routes.rb` splits routes with `SubdomainPresent` / `SubdomainBlank` constraints
- `SubdomainBlank`: public marketing pages (landing, pricing, FAQ, signup, login)
- `SubdomainPresent`: tenant resources (projects, invites)
- `ApplicationController#current_account` finds the `User` by `request.subdomain`
- `ProjectsController#index` redirects to root if `current_account` is nil (non-existent subdomain)
- All tenant resources are nested under `Projects` which belong to the subdomain owner
- Local development uses `lvh.me` (resolves to localhost with subdomain support)

### Authentication (Custom, No Devise)
- `User` model uses `has_secure_password` with BCrypt
- `SessionsController` + `SessionsHelper` manage login/logout
- Session stored in `session[:user_id]` with optional persistent remember-me cookies
- `logged_in?` checks both session existence AND `request.subdomain == current_user.subdomain`
- Account activation and password reset via email tokens (2-hour expiry for reset)

### Authorization
- **Pundit** policies in `app/policies/` scope resources by project
- `ApplicationController` includes `Pundit::Authorization` and rescues `NotAuthorizedError`

### Trial/Billing
- `ApplicationController#remaining_days` calculates days remaining in 30-day trial from `current_account.created_at`
- `trial_expired?` before_action redirects free-tier users (`plan_id != 2`) when trial ends
- Stripe integration exists (gem version 1.48.0 — very old)
- Plans: basic (free, id=1), pro ($49, id=2), invite (free, id=3)

### Frontend
- **Tailwind CSS** (primary) via `tailwindcss-rails` gem, with legacy Bootstrap/Sass still present
- **Stimulus** + **Turbo** for JS interactivity and navigation
- **esbuild** for JS bundling, **Sprockets** + **importmap** for asset pipeline
- **Flowbite** for Tailwind UI components
- Legacy jQuery still in dependencies

### Key Models & Relationships
- `User` → has many `Projects` (one per account, acts as tenant container)
- `Project` → has many `Invites`
- `Invite` → team member invitation system (links users to a subdomain/project)
- `CustomerContact` — marketing contact-us form model
- `Visitor` — newsletter signup form object

### Navigation
- Top nav header (`layouts/_header.html.erb`) shows different links based on auth state
- Logged in: Projects, Settings, Logout
- Logged out: Pricing, Contact, Log In
- Footer hidden when logged in with subdomain present

### Testing
- **RSpec** with **Capybara** + **Playwright** (chromium) for feature tests
- `spec/features/` contains E2E tests: login, signup, multitenancy, subscribers
- `transactional_fixtures: false` — be aware of database state between tests
- Seed data uses `save(validate: false)` because multiple users share the same subdomain
- Playwright headless controlled by `CI` or `HEADLESS` env vars

### Database
- PostgreSQL: `project_development` / `project_test`
- Tables: users, projects, invites, plans (plus schema_migrations, ar_internal_metadata)

### Seed Data
- 3 plans (basic, pro, invite)
- 3 users sharing subdomain "testing": Damon (manager, pro), Owen (employee, invite), Ruby (employee, invite)
- 1 demo project ("Demo Shop") owned by Damon
- 2 invites linking Owen and Ruby to the demo project
