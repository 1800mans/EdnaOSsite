# EDNA OS Website
# Schema Library
## Version 1.0

---

# Purpose

This document defines the structured data (Schema.org / JSON-LD) strategy for the EDNA OS website.

Structured data helps search engines understand the content of the website, improves search result quality and reinforces EDNA OS as the authoritative reference for the **Orchard Operating System**.

All schema definitions should be generated from centralized reusable modules.

Schema should never be duplicated throughout the project.

---

# Philosophy

Schema exists to describe engineering knowledge.

It is not intended to manipulate search rankings.

Every schema implementation should accurately represent the content of the page.

Truthfulness always takes precedence over optimization.

---

# Implementation Strategy

Schema should be centralized.

Recommended implementation

```
lib/

schema/

organization.ts

website.ts

webpage.ts

article.ts

techArticle.ts

breadcrumb.ts

person.ts

image.ts

faq.ts

index.ts
```

Page components should import schema generators rather than embedding JSON-LD directly.

---

# Required Schemas

The following Schema.org types are approved.

```
Organization

WebSite

WebPage

BreadcrumbList

TechArticle

Article

Person

ImageObject

FAQPage
```

Future schemas may be added without changing existing implementations.

---

# Organization Schema

Purpose

Describe EDNA OS as an engineering organization.

Fields

```
name

url

logo

description

sameAs

contactPoint
```

Example

```
EDNA OS

https://ednaos.com

Defining the Orchard Operating System
```

---

# WebSite Schema

Purpose

Describe the entire website.

Fields

```
name

url

description

publisher

inLanguage
```

Future

SearchAction may be added when internal search is implemented.

---

# WebPage Schema

Purpose

Describe every public page.

Fields

```
name

url

description

primaryImage

breadcrumb

isPartOf
```

Every public page should include WebPage schema.

---

# BreadcrumbList

Purpose

Describe page hierarchy.

Required for

Level 2 pages

Level 3 pages

Example

```
Home

>

Architecture

>

PLC Layer
```

Each breadcrumb should include

```
position

name

item
```

---

# TechArticle

Purpose

Engineering documentation.

Used for

Architecture

Deployment

Engineering Documentation

White Papers

Technical References

Research Articles

Fields

```
headline

description

author

publisher

datePublished

dateModified

image

keywords

mainEntityOfPage
```

---

# Article

Purpose

Engineering Journal.

Used for

Journal Entries

Engineering Updates

Validation Reports

Lessons Learned

Fields

```
headline

description

author

publisher

datePublished

dateModified

image

articleSection

keywords
```

---

# Person

Purpose

Founder page.

Fields

```
name

jobTitle

worksFor

url

image

description
```

Only factual information should be included.

Avoid unnecessary personal details.

---

# ImageObject

Purpose

Describe important engineering photographs.

Fields

```
contentUrl

caption

creator

copyrightNotice

description
```

Used primarily for

Hero Images

Engineering Photography

Deployment Images

---

# FAQPage

Purpose

Frequently Asked Questions.

Use only when genuine question-and-answer content exists.

Avoid creating FAQ pages solely for SEO.

---

# Schema Hierarchy

Home

```
WebSite

Organization

WebPage
```

---

Architecture

```
WebPage

TechArticle

BreadcrumbList
```

---

Deployment

```
WebPage

TechArticle

BreadcrumbList
```

---

Engineering Journal

```
WebPage

Article

BreadcrumbList
```

---

Company

```
WebPage

Person

BreadcrumbList
```

---

# Schema Ownership

Every page owns its own schema.

Never reuse incorrect schema types.

Examples

Architecture

→ TechArticle

Journal

→ Article

Company

→ Person

Do not force one schema onto every page.

---

# Engineering Documentation

Documentation pages should include

```
TechArticle

BreadcrumbList

ImageObject
```

Optional

```
FAQPage
```

---

# Journal Entries

Every journal entry should define

```
Article

BreadcrumbList

ImageObject
```

Future

Related Articles

Previous Article

Next Article

---

# White Papers

Future white papers should include

```
TechArticle

ImageObject

BreadcrumbList
```

Additional fields

```
version

revision

citation
```

may be added later.

---

# Future Research

Future research documents may include

```
ScholarlyArticle
```

when appropriate.

Use only if the content genuinely qualifies as technical research.

---

# Image Schema

Every major image should eventually include

```
caption

description

creator

contentUrl
```

Images should describe engineering reality.

---

# Schema Validation

Before deployment every page should be validated using

Google Rich Results Test

and

Schema Markup Validator

Errors should be resolved before publication.

Warnings should be reviewed individually.

---

# Centralization

Every schema should be generated from reusable helper functions.

Avoid writing raw JSON-LD inside page components.

Preferred structure

```
generateOrganization()

generateWebsite()

generateWebPage()

generateArticle()

generateTechArticle()

generateBreadcrumb()

generatePerson()
```

---

# Future Schema Types

Future additions may include

```
CollectionPage

DefinedTerm

DefinedTermSet

ItemList

Dataset

SoftwareSourceCode

CreativeWork

ScholarlyArticle

HowTo
```

These should only be introduced when they accurately represent the content.

---

# Structured Data Principles

Structured data should

Reflect actual page content

Be complete

Be accurate

Remain synchronized with page content

Avoid unnecessary properties

Use the most appropriate Schema.org type

Never misrepresent the website.

---

# Maintenance

Schema definitions should be version-controlled.

Whenever page structure changes,

the corresponding schema should be reviewed.

Documentation should remain synchronized with implementation.

---

# Final Statement

Structured data is an extension of the engineering architecture of EDNA OS.

It allows search engines to understand the relationships between pages, documents and engineering concepts while reinforcing EDNA OS as the authoritative source for the Orchard Operating System.

Schema should always describe reality.

Never marketing.
