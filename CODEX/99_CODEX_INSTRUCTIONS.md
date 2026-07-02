# EDNA OS Website
# Codex Instructions
## Version 1.0

---

# Purpose

This document defines how Codex should work within the EDNA OS repository.

It is **not** part of the website.

It is the operating manual for AI-assisted development.

Every Codex session should begin by reading this document.

---

# Project Root

```
/home/eugene/EdnaOSsite
```

---

# Documentation Root

```
/home/eugene/EdnaOSsite/CODEX
```

---

# First Rule

Before modifying any code, read every document inside `/CODEX` in numerical order.

The documentation is the engineering specification.

If implementation conflicts with documentation,

> **Documentation always wins.**

Never assume missing information.

Always use the documentation as the source of truth.

---

# Required Reading Order

Read the following documents before implementation.

```
00_MASTER_PROMPT.md

01_SITE_ARCHITECTURE.md

02_DESIGN_SYSTEM.md

03_SEO_REQUIREMENTS.md

04_CONTENT_GUIDE.md

05_IMAGE_CONVENTION.md

06_COMPONENT_RULES.md

07_PROJECT_STRUCTURE.md

08_FUTURE_ROADMAP.md

09_COPYWRITING_STYLE.md

10_METADATA_LIBRARY.md

11_SCHEMA_LIBRARY.md

12_ACCESSIBILITY.md

CHANGELOG.md
```

---

# Project Identity

This project is

NOT

- SaaS
- Startup
- Product Landing Page
- Marketing Website

This project IS

- Engineering Project
- Industrial Engineering Documentation
- Commercial Orchard Research
- Operational Engineering
- Continuous Validation

Everything should reinforce this identity.

---

# Primary Objective

Build a modern engineering website documenting the creation of a new engineering discipline:

> **Orchard Operating System**

Every implementation decision should reinforce this objective.

---

# Technology Stack

Framework

Next.js (App Router)

Language

TypeScript

UI

React

Styling

Tailwind CSS

Rendering

Static Site Generation

Deployment

Google Cloud or VPS

---

# Development Philosophy

Prefer

Simple

Readable

Modular

Reusable

Predictable

Maintainable

Avoid

Magic

Complex abstractions

Overengineering

Premature optimization

Duplicate code

---

# Coding Standards

Always

- Use TypeScript
- Define interfaces
- Prefer Server Components
- Use semantic HTML
- Use Next.js Image
- Use Next.js Link
- Use reusable components
- Follow Tailwind conventions

Never

- Use `any`
- Duplicate layouts
- Hardcode metadata
- Hardcode image paths
- Hardcode navigation
- Add unnecessary dependencies

---

# Design Rules

Follow

```
02_DESIGN_SYSTEM.md
```

Exactly.

Do not invent:

- colors
- typography
- spacing
- component styles

If a design decision is missing,

use the closest existing pattern.

Maintain visual consistency.

---

# Content Rules

Follow

```
04_CONTENT_GUIDE.md
```

Never rewrite engineering language into marketing language.

Never replace engineering terminology with startup terminology.

The website should educate.

Not advertise.

---

# Image Rules

Follow

```
05_IMAGE_CONVENTION.md
```

Every image should reference the standardized asset library.

Never invent filenames.

Never scatter image paths throughout the codebase.

Use centralized image constants.

---

# Component Rules

Follow

```
06_COMPONENT_RULES.md
```

Every component should have

one responsibility

strong typing

reusable API

consistent naming

---

# SEO Rules

Follow

```
03_SEO_REQUIREMENTS.md

10_METADATA_LIBRARY.md

11_SCHEMA_LIBRARY.md
```

Every page must include

Metadata

Canonical URL

Structured Data

OpenGraph

Twitter Card

Semantic HTML

Breadcrumbs where appropriate

---

# Accessibility Rules

Follow

```
12_ACCESSIBILITY.md
```

Accessibility is mandatory.

Do not treat it as optional.

---

# Project Structure

Follow

```
07_PROJECT_STRUCTURE.md
```

Never create new directories without justification.

Keep the repository organized.

---

# File Organization

Prefer

```
components/

lib/

types/

config/

hooks/

content/

data/
```

Do not place unrelated logic inside page components.

---

# Architecture

Prefer

```
Page

↓

Section

↓

Component

↓

UI Component
```

Rather than large monolithic pages.

---

# State Management

Default

Server Components

Local State

Only introduce Context or global state when clearly justified.

---

# Styling

Use

Tailwind CSS

Avoid custom CSS unless absolutely necessary.

No inline styles.

No CSS frameworks beyond Tailwind.

---

# Performance

Prefer

Static Generation

Server Components

Lazy Loading

Optimized Images

Minimal JavaScript

The website should target

Google Lighthouse

Performance

95+

Accessibility

100

SEO

100

Best Practices

100

---

# Git Philosophy

Make focused changes.

Avoid unrelated refactoring.

Do not rename files unless required.

Respect the existing architecture.

---

# Engineering Mindset

Build as if this project will exist for the next decade.

Every decision should improve

maintainability

clarity

predictability

documentation

Avoid shortcuts.

---

# Development Workflow

For every task

1.

Understand the request.

2.

Review relevant documentation.

3.

Identify affected files.

4.

Implement the smallest correct solution.

5.

Verify consistency.

6.

Report completed work.

---

# After Every Task

Provide a summary including

Completed work

Created files

Modified files

Important decisions

Potential improvements

Suggested next milestone

This summary should be concise and engineering-focused.

---

# If Documentation Is Missing

Never invent large architectural decisions.

Instead

Follow existing patterns.

Keep implementation simple.

Document assumptions.

Recommend updating the documentation if appropriate.

---

# If Requirements Conflict

Priority order

```
User Instructions

↓

CODEX Documentation

↓

Existing Code

↓

Personal Preference
```

Never prioritize convenience over documented architecture.

---

# Milestone Strategy

Build incrementally.

Recommended order

Phase 1

Project foundation

---

Phase 2

Layout

Navigation

Footer

---

Phase 3

Shared Components

---

Phase 4

Home Page

---

Phase 5

Remaining Pages

---

Phase 6

SEO

Schema

Metadata

---

Phase 7

Performance

Accessibility

Optimization

---

Phase 8

Deployment

---

Never attempt to build the entire website in one step.

---

# Code Quality

Before considering a task complete, verify

- TypeScript compiles
- No ESLint errors
- No duplicated logic
- Responsive layout
- Accessibility maintained
- SEO preserved
- Documentation respected

---

# Long-Term Vision

The website should grow from a simple engineering website into the definitive public reference for the Orchard Operating System.

Future additions should extend the existing architecture rather than replace it.

The codebase should remain understandable after years of development.

---

# Final Instruction

Build EDNA OS as an engineering project.

Not a startup.

Not a marketing website.

Not a SaaS platform.

Every line of code should reinforce the same central idea:

**EDNA OS is documenting the creation of the Orchard Operating System through real engineering, deterministic control and continuous operational validation.**
