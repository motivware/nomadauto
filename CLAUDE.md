# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What Is This?

Motivware CRM — a multi-tenant SaaS help desk / CRM built with Rails 7.0 and Ruby 3.3.0. Users get subdomain-based accounts with 30-day trials, manage contacts, tasks (Kanban board), tickets, and knowledge base articles within projects.

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
- `SubdomainPresent`: tenant resources (projects, contacts, tasks, tickets, etc.)
- `ApplicationController#current_account` finds the `User` by `request.subdomain`
- All tenant resources are nested under `Projects` which belong to the subdomain owner
- Local development uses `lvh.me` (resolves to localhost with subdomain support)

### Authentication (Custom, No Devise)
- `User` model uses `has_secure_password` with BCrypt
- `SessionsController` + `SessionsHelper` manage login/logout
- Session stored in `session[:user_id]` with optional persistent remember-me cookies
- `logged_in?` checks both session existence AND `request.subdomain == current_user.subdomain`
- Account activation and password reset via email tokens (2-hour expiry for reset)

### Authorization
- **Pundit** policies in `app/policies/` scope resources by project/workorder
- `ApplicationController` includes `Pundit::Authorization` and rescues `NotAuthorizedError`

### Trial/Billing
- `ApplicationController#remaining_days` calculates days remaining in 30-day trial from `current_account.created_at`
- `trial_expired?` before_action redirects free-tier users (`plan_id != 2`) when trial ends
- Stripe integration exists (gem version 1.48.0 — very old)

### Frontend
- **Tailwind CSS** (primary) via `tailwindcss-rails` gem, with legacy Bootstrap/Sass still present
- **Stimulus** + **Turbo** for JS interactivity and navigation
- **esbuild** for JS bundling, **Sprockets** + **importmap** for asset pipeline
- **Flowbite** for Tailwind UI components, **Shopify Draggable** for Kanban
- **Trix** for rich text editing (Action Text)
- Legacy jQuery, CoffeeScript, and React still in dependencies

### Key Models & Relationships
- `User` → has many `Projects` (one per account, acts as tenant container)
- `Project` → has many `Contacts`, `Tasks`, `Tickets`, `Collections`, `Articles`, `Profiles`
- `Task` → has many `Columns` → has many `Items` (Kanban board)
- `Contact` → has many `Notes`, `Addresses`, `Questionnaires` → `Responses`
- `Collection` → has many `Articles` (knowledge base)

### Testing
- **RSpec** with **Capybara** + **Playwright** (chromium) for feature tests
- `spec/features/` contains E2E smoke tests for login, signup, contacts, multitenancy, subscribers
- `transactional_fixtures: false` — be aware of database state between tests
- Test fixtures loaded from `spec/fixtures`; Faker gem available for generated data
- Playwright headless controlled by `CI` or `HEADLESS` env vars

### Database
- PostgreSQL: `project_development` / `project_test`
- Action Mailbox (Mailgun), Active Storage (local), Active Text all enabled
