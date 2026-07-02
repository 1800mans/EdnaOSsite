# EDNA OS Website
# Metadata Library
## Version 1.0

---

# Purpose

This document defines the metadata standards for every page of the EDNA OS website.

The objective is to ensure that every page shares a consistent metadata structure while avoiding duplication across the project.

Metadata should be generated from a centralized library rather than being manually recreated for each page.

This document defines **what metadata exists**, not how it is implemented.

---

# Metadata Philosophy

Metadata is part of the engineering architecture.

Every page should be:

- uniquely identifiable
- accurately described
- easily indexed
- consistently structured

Metadata should never be treated as an afterthought.

---

# General Rules

Every public page must define:

- Title
- Description
- Canonical URL
- OpenGraph Metadata
- Twitter Card Metadata
- Robots Directive
- Language
- Keywords (internal reference)
- Image
- Page Type

---

# Metadata Strategy

Metadata should be stored centrally.

Recommended implementation

```
lib/

metadata.ts
```

Each page imports its metadata.

Avoid hardcoding metadata inside page components.

---

# Global Metadata

Site Name

```
EDNA OS
```

---

Site Title

```
EDNA OS
```

---

Tagline

```
Defining the Orchard Operating System
```

---

Primary Description

```
EDNA OS is an engineering project documenting the creation of the Orchard Operating System through deterministic control, operational evidence and continuous validation on a commercial orchard.
```

---

Website URL

```
https://ednaos.com
```

---

Language

```
en-US
```

---

Author

```
EDNA OS
```

---

Publisher

```
EDNA OS
```

---

# Default Metadata

Every page inherits the following defaults unless explicitly overridden.

```
Title

Description

OpenGraph Image

Twitter Card

Canonical

Robots

Language
```

---

# Title Format

Standard pattern

```
<Page Title> | EDNA OS
```

Examples

```
Home | EDNA OS

Architecture | EDNA OS

Deployment | EDNA OS

Engineering Journal | EDNA OS
```

Maximum length

60 characters

---

# Description Rules

Maximum

160 characters

Should answer

"What does this page explain?"

Never write promotional copy.

Good

```
Learn how EDNA OS applies deterministic engineering and operational evidence to commercial orchard management.
```

Poor

```
The world's most advanced orchard platform.
```

---

# Canonical URL

Every page defines one canonical URL.

Examples

```
https://ednaos.com/
```

```
https://ednaos.com/objectives
```

```
https://ednaos.com/architecture
```

Never include

tracking parameters

session IDs

temporary URLs

---

# OpenGraph

Every page defines

Title

Description

Image

URL

Type

Site Name

Locale

---

Default Image

```
/assets/logos/og-image.webp
```

Recommended Size

```
1200 × 630 px
```

---

# Twitter Cards

Card Type

```
summary_large_image
```

Fields

Title

Description

Image

Creator (optional)

---

# Robots

Default

```
index, follow
```

Development

```
noindex, nofollow
```

Never publish development pages with indexing enabled.

---

# Page Types

The following page types are supported.

Home

Landing

Documentation

Engineering Article

Journal Entry

Research Paper

Architecture

Deployment

Reference

Company

Each page type may define additional metadata.

---

# Metadata Library Structure

Example

```
lib/

metadata/

site.ts

pages.ts

journal.ts

documentation.ts

company.ts
```

---

# Home Page Metadata

Title

```
EDNA OS | Defining the Orchard Operating System
```

Description

```
An engineering project documenting the creation of the Orchard Operating System through deterministic control and operational evidence.
```

Keywords

```
Orchard Operating System

Commercial Orchard

Deterministic Control

Operational Evidence

Industrial Agriculture
```

---

# Objectives Metadata

Title

```
Engineering Objectives | EDNA OS
```

Description

```
Discover the operational engineering objectives guiding the development of EDNA OS.
```

---

# Operating Loop Metadata

Title

```
Operating Loop | EDNA OS
```

Description

```
Learn how every irrigation cycle becomes operational evidence used to improve future engineering decisions.
```

---

# Measuring Outcomes Metadata

Title

```
Measuring Outcomes | EDNA OS
```

Description

```
Explore how EDNA measures root zone response, runoff and operational evidence instead of simply measuring irrigation inputs.
```

---

# Architecture Metadata

Title

```
Architecture | EDNA OS
```

Description

```
Explore the layered architecture of EDNA OS including PLC control, telemetry, decision logic and field infrastructure.
```

---

# Deployment Metadata

Title

```
Deployment | EDNA OS
```

Description

```
See how EDNA OS is engineered and validated on a commercial durian orchard.
```

---

# Documentation Metadata

Title

```
Engineering Documentation | EDNA OS
```

Description

```
Browse engineering documentation covering architecture, deployment, hardware and operational principles.
```

---

# Engineering Journal Metadata

Title

```
Engineering Journal | EDNA OS
```

Description

```
Follow the engineering progress, field validation and design evolution of EDNA OS.
```

---

# Company Metadata

Title

```
Company | EDNA OS
```

Description

```
Learn why EDNA OS exists and how operational experience inspired the Orchard Operating System.
```

---

# Journal Metadata

Every Engineering Journal entry should define

Title

Summary

Published Date

Modified Date

Author

Hero Image

Keywords

Article Schema

Reading Time

Previous Article

Next Article

---

# Documentation Metadata

Engineering documentation pages should include

Version

Revision Date

Document Status

Related Documents

Category

Schema Type

---

# Research Metadata

Future research papers should include

Publication Date

Revision History

Document Version

Research Category

Citation Information

DOI (if applicable)

---

# Keywords

Keywords are maintained for consistency.

Examples

```
Orchard Operating System

Commercial Orchard

Deterministic Control

Operational Evidence

PLC

Telemetry

Precision Irrigation

Fertigation

Lysimeter

Root Zone

Industrial Agriculture

Engineering Validation
```

Keywords should be selected naturally.

Avoid keyword stuffing.

---

# OpenGraph Images

Every major page should eventually have its own image.

Examples

```
home-og.webp

architecture-og.webp

deployment-og.webp

journal-og.webp

company-og.webp
```

These images should reflect real engineering work.

---

# Metadata Validation

Every page should be checked for

Unique Title

Unique Description

Valid Canonical URL

OpenGraph Image

Twitter Card

Schema

Accessible Title

Semantic Heading Structure

---

# Future Metadata

Future metadata may include

Version Numbers

Engineering Status

Research Status

Reading Time

Difficulty Level

Document Category

Revision Number

Related Hardware

Related Software

Related Deployment

These fields should be added without changing the existing metadata structure.

---

# Metadata Principles

Metadata should be

Accurate

Consistent

Human-readable

Machine-readable

Search-engine friendly

Easy to maintain

Centralized

Metadata should never become duplicated across the project.

---

# Final Statement

Metadata is a foundational part of the EDNA OS architecture.

Well-structured metadata improves discoverability, supports long-term maintainability and reinforces the identity of EDNA OS as the definitive reference for the Orchard Operating System.

Every page should describe itself clearly, consistently and truthfully.
