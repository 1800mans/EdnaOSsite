# EDNA OS Website
# Project Structure
## Version 1.0

---

# Purpose

This document defines the physical directory structure of the EDNA OS website.

Its objective is to provide a predictable, scalable and maintainable project organization for both developers and AI coding assistants.

Every file should have a logical location.

Every directory should have a single responsibility.

---

# Technology Stack

Framework

- Next.js (App Router)

Language

- TypeScript

Styling

- Tailwind CSS

Deployment

- Static Site Generation (SSG)

Package Manager

- npm

Version Control

- Git

---

# Project Root

```
/home/eugene/EdnaOSsite/
```

---

# Repository Layout

```
EdnaOSsite/

├── CODEX/
├── app/
├── components/
├── content/
├── lib/
├── public/
├── styles/
├── types/
├── hooks/
├── data/
├── config/
├── scripts/
├── docs/
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── eslint.config.js
├── README.md
└── .gitignore
```

---

# CODEX

Purpose

Engineering specifications.

Contains all documentation used by Codex and future developers.

```
CODEX/

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

# app/

Purpose

Next.js App Router.

Contains all routes.

Example

```
app/

layout.tsx

page.tsx

loading.tsx

not-found.tsx

globals.css

objectives/

page.tsx

operating-loop/

page.tsx

measuring-outcomes/

page.tsx

architecture/

page.tsx

deployment/

page.tsx

documentation/

page.tsx

journal/

page.tsx

company/

page.tsx
```

---

# Nested Routes

Example

```
architecture/

plc-layer/

page.tsx

edge-layer/

page.tsx

cloud-layer/

page.tsx

decision-layer/

page.tsx
```

Example

```
measuring-outcomes/

lysimeter/

page.tsx

water-balance/

page.tsx

root-zone/

page.tsx
```

---

# components/

Purpose

Reusable React components.

Structure

```
components/

layout/

navigation/

hero/

sections/

cards/

content/

ui/

shared/

architecture/

journal/

documentation/

company/
```

Example

```
components/

hero/

Hero.tsx

index.ts
```

---

# content/

Purpose

Structured content.

The website should eventually move most page content outside React components.

Example

```
content/

pages/

journal/

documentation/

whitepapers/

metadata/

faq/
```

Future content may be stored as

Markdown

MDX

JSON

YAML

---

# lib/

Purpose

Shared utilities.

Example

```
lib/

images.ts

metadata.ts

schema.ts

navigation.ts

breadcrumbs.ts

seo.ts

constants.ts

helpers.ts
```

---

# public/

Purpose

Static assets.

Structure

```
public/

assets/

images/

logos/

icons/

documents/

downloads/

favicon.ico

robots.txt

sitemap.xml
```

---

# Images

```
public/

assets/

images/

home/

objectives/

operating-loop/

measuring-outcomes/

architecture/

deployment/

documentation/

journal/

company/

shared/
```

Image naming follows

```
05_IMAGE_CONVENTION.md
```

---

# Logos

```
public/

assets/

logos/

edna-logo.svg

edna-mark.svg

favicon.svg

og-image.webp
```

---

# Icons

```
public/

assets/

icons/
```

SVG preferred.

---

# styles/

Purpose

Global styling.

```
styles/

globals.css

typography.css

utilities.css
```

Tailwind remains the primary styling method.

---

# hooks/

Purpose

Reusable React hooks.

Example

```
hooks/

useScroll.ts

useMediaQuery.ts

useNavigation.ts
```

Keep hooks generic.

---

# types/

Purpose

Shared TypeScript definitions.

Example

```
types/

page.ts

navigation.ts

article.ts

hero.ts

metadata.ts
```

Avoid duplicated interfaces.

---

# data/

Purpose

Static structured data.

Example

```
data/

navigation.ts

timeline.ts

metrics.ts

faq.ts

team.ts
```

No business logic.

---

# config/

Purpose

Project configuration.

Example

```
config/

site.ts

navigation.ts

seo.ts

theme.ts
```

All project constants belong here.

---

# scripts/

Purpose

Developer automation.

Examples

```
scripts/

optimize-images.ts

generate-sitemap.ts

generate-og.ts

check-links.ts
```

Scripts should never be imported into the application.

---

# docs/

Purpose

Supporting documentation.

Examples

```
docs/

hardware/

electrical/

cad/

diagrams/

whitepapers/
```

This directory is separate from CODEX.

CODEX defines the website.

docs contains project reference material.

---

# Metadata Strategy

Metadata should never be duplicated.

Use

```
lib/metadata.ts
```

Every page imports metadata from a shared source.

---

# Schema Strategy

Structured data belongs in

```
lib/schema.ts
```

Never embed JSON-LD directly inside page components.

---

# Image Strategy

All image paths should be centralized.

Use

```
lib/images.ts
```

Example

```ts
export const Images = {

home: {
hero: "...",
},

architecture: {
hero: "...",
},

}
```

Never hardcode image paths throughout the application.

---

# Navigation Strategy

Navigation structure belongs in

```
config/navigation.ts
```

The navigation should never be duplicated across components.

---

# Page Strategy

Each page directory should contain only

```
page.tsx
```

Optional

```
loading.tsx

error.tsx
```

Business logic belongs elsewhere.

---

# Component Strategy

Pages assemble components.

Components do not know which page they belong to.

Example

```
Page

↓

Hero

↓

Section

↓

Card
```

Never

```
Hero

↓

Architecture Page

↓

Objectives Page
```

Components remain independent.

---

# Future Expansion

The project structure is designed for future growth.

Possible additions

```
api/

search/

research/

engineering-evidence/

failure-reports/

case-studies/

version-history/

glossary/

rss/
```

These additions should integrate without restructuring the repository.

---

# Repository Principles

Every directory has one purpose.

Every file has one responsibility.

Avoid duplicate content.

Avoid duplicate utilities.

Avoid duplicate metadata.

Avoid duplicate styling.

Predictability is preferred over convenience.

---

# Version Control

Git is the authoritative version history.

Large generated assets should not be committed unless required.

Documentation should evolve together with implementation.

Every architectural change should be reflected in

```
CODEX/CHANGELOG.md
```

---

# Final Statement

The EDNA OS repository should resemble the structure of a long-term engineering project rather than a typical marketing website.

The directory structure should remain stable as the project grows from a simple website into a comprehensive engineering knowledge base documenting the creation of the Orchard Operating System.

A well-organized repository reduces maintenance, improves collaboration and allows both humans and AI assistants to work efficiently for years without structural changes.
