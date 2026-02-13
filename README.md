# SynthMonitor

Synthetic user monitoring for critical path testing. Run automated browser tests against your production app on a schedule and get alerted when something breaks.

Built with Rails 7.0, Ruby 3.3.0, PostgreSQL, Tailwind CSS, and Stimulus.

## Features

- Scheduled headless browser tests (Playwright)
- No-code multi-step test builder
- Email alerts with screenshots and error details
- Uptime and performance dashboard
- Multi-tenant subdomain-based accounts
- 30-day free trial with Stripe billing

## Setup

### Prerequisites

- Ruby 3.3.0 (via rbenv)
- PostgreSQL
- Node.js + Yarn

### Install

```bash
bundle install
yarn install
bin/rails db:prepare
bin/rails db:seed
```

### Run

```bash
bin/dev
```

Visit [http://lvh.me:3000](http://lvh.me:3000) — uses `lvh.me` for subdomain support in development.

## Tests

```bash
bundle exec rspec                    # All tests
bundle exec rspec spec/features      # Feature/E2E tests
HEADLESS=true bundle exec rspec      # Headless browser mode
```

## Seed Data

- 3 plans: basic (free), pro ($49/mo), invite (free)
- 3 users on subdomain "testing": Damon (manager, pro), Owen (employee), Ruby (employee)
- 1 demo project ("Demo Shop")
