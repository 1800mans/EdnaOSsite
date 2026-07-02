# EDNA OS Website
# Component Rules
## Version 1.0

---

# Purpose

This document defines the component architecture of the EDNA OS website.

Its objective is to ensure every page is built from a consistent set of reusable React components.

Components should solve layout problems.

Content belongs in page files.

Styling belongs in components.

Business logic belongs in utilities.

---

# Design Philosophy

Components should be:

- reusable
- predictable
- modular
- strongly typed
- composable
- accessible

A component should have one clearly defined responsibility.

---

# General Rules

Every component must:

- use TypeScript
- define explicit interfaces
- use semantic HTML
- avoid inline styling
- use Tailwind utility classes
- remain presentation-focused whenever possible

---

# Component Hierarchy

```
Layout

↓

Navigation

↓

Page

↓

Section

↓

Content Components

↓

UI Components
```

---

# Directory Structure

```
components/

layout/

navigation/

hero/

sections/

cards/

content/

ui/

journal/

documentation/

architecture/

company/

shared/
```

---

# Naming Convention

Component names use PascalCase.

Examples

```
Hero.tsx

Section.tsx

Navigation.tsx

Footer.tsx

ObjectiveCard.tsx

ArchitectureCard.tsx

JournalCard.tsx
```

---

Folders

```
components/

Hero/

Section/

Navigation/
```

Each folder contains

```
Hero.tsx

index.ts
```

Optional

```
types.ts

constants.ts
```

---

# Required Layout Components

The website should be built from the following reusable components.

---

## Layout

Responsibility

Global page wrapper.

Includes

Navigation

Main Content

Footer

---

## Navigation

Sticky top navigation.

Desktop menu.

Mobile menu.

Current page highlighting.

---

## Footer

Site navigation.

Documentation links.

Contact.

Copyright.

---

## Hero

Required on every Level 1 page.

Contains

Eyebrow

Title

Description

CTA

Hero Image

Optional supporting statement.

---

## Section

Standard content wrapper.

Provides

Maximum width

Vertical spacing

Responsive padding

Optional section heading.

---

## Container

Controls page width.

No business logic.

---

# Content Components

Examples

```
ObjectiveCard

FeatureCard

MetricCard

ArchitectureCard

JournalCard

DocumentationCard

TimelineCard

ImageCard

QuoteCard

Callout

Figure

Diagram
```

Each component has one responsibility.

---

# UI Components

Examples

```
Button

Badge

Tag

Link

Icon

Breadcrumb

Divider

Alert

Accordion

Tabs

Modal

Tooltip
```

Reusable across the website.

---

# Page Composition

Every Level 1 page should follow this structure.

```
Layout

↓

Hero

↓

Section

↓

Section

↓

Section

↓

Related Topics

↓

Footer
```

Pages should never contain custom layouts unless absolutely necessary.

---

# Hero Component

Props

```
eyebrow

title

description

primaryCTA

secondaryCTA

image

supportingText
```

Requirements

One H1 only.

Responsive.

Accessible.

Image always required.

---

# Section Component

Props

```
title

subtitle

children

background

id
```

Used for every major content block.

---

# Card Components

Cards should contain only presentation.

Content comes through props.

Never hardcode page-specific text inside reusable components.

---

# Buttons

Supported Variants

```
primary

secondary

outline

text
```

Supported Sizes

```
small

medium

large
```

---

# Icons

Use only

Lucide React

No mixed icon libraries.

No emoji.

---

# Images

All images use the Next.js Image component.

Requirements

Responsive

Optimized

Width and height defined

ALT text required

No HTML img elements.

---

# Links

Internal

Use Next.js Link.

External

Open in a new tab only when appropriate.

Always indicate external destinations visually.

---

# Forms

Future use.

Components

```
Input

Textarea

Checkbox

Select

Button
```

Validation should be handled outside the UI component.

---

# Props

Prefer explicit interfaces.

Example

```tsx
interface HeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}
```

Avoid

```
any
```

Avoid unnecessary optional props.

---

# State Management

Prefer local state.

Avoid global state unless required.

Use React Context sparingly.

Avoid unnecessary complexity.

---

# Server Components

Default

Server Components.

Use Client Components only when interaction requires them.

Examples

Allowed

Navigation menu

Accordion

Tabs

Search

Forms

---

# Styling

Tailwind only.

Avoid custom CSS unless necessary.

No inline style attributes.

Spacing follows the Design System.

---

# Responsive Design

Every component must support

Desktop

Tablet

Mobile

No desktop-only components.

No mobile-only layouts unless justified.

---

# Accessibility

Every component must support

Keyboard navigation

Visible focus states

Semantic HTML

ARIA attributes where required

Screen readers

Reduced motion preferences

---

# Component Documentation

Complex components should include

Purpose

Props

Usage example

Dependencies

Limitations

Future improvements

---

# Component Independence

Components should not depend on page-specific content.

Instead

```
Good

<Hero
title="Architecture"
description="..."
/>
```

Not

```
Hero.tsx

const title = "Architecture";
```

---

# Composition Over Inheritance

Small reusable components are preferred.

Example

```
Section

↓

CardGrid

↓

ArchitectureCard
```

Rather than large monolithic components.

---

# File Organization

Each component folder should contain

```
Component/

Component.tsx

index.ts
```

Optional

```
types.ts

constants.ts

hooks.ts
```

Tests may be added later.

---

# Performance

Avoid unnecessary re-renders.

Avoid deeply nested component trees.

Lazy load heavy components when appropriate.

Prefer static rendering.

---

# Error Handling

Components should fail gracefully.

Missing content should not break layouts.

Fallbacks should be simple and unobtrusive.

---

# Animation

Animations should remain subtle.

Allowed

Fade

Opacity

Small translate

Never

Bounce

Rotate

Infinite animations

Decorative motion

---

# Future Components

The architecture should support future additions such as

EngineeringTimeline

ResearchPaperCard

FailureReport

VersionHistory

TelemetryDiagram

WhitePaperList

GlossaryTerm

LysimeterVisualization

These should integrate without changing existing component patterns.

---

# Final Statement

The EDNA OS component library should resemble an engineering toolkit rather than a collection of custom page elements.

Every component should have a single responsibility.

Every page should be assembled from reusable building blocks.

Consistency is more important than novelty.

The component architecture should support years of incremental growth while preserving a coherent user experience.
