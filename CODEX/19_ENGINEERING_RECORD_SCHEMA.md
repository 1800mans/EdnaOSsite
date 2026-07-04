# 19_ENGINEERING_RECORD_SCHEMA.md

# EDNA OS Engineering Record Schema

Version: 1.0

Status: Engineering Standard

Applies to:

- Engineering Journal
- Technical Publications
- Validation Reports
- Architecture Notes
- Measurement Records

---

# Purpose

This document defines the canonical data model for every Engineering Journal record.

The schema is independent of presentation.

An Engineering Record is the single source of truth from which the website generates:

- HTML
- Metadata
- JSON-LD
- OpenGraph
- Internal Links
- C4 Diagrams
- Charts
- Future Knowledge Graphs

The rendering layer must never contain engineering content.

Content belongs only inside Engineering Records.

---

# Design Principles

Engineering Records must be:

- deterministic
- machine readable
- human readable
- version controlled
- static-site friendly
- future database compatible

The schema is designed so that records can later migrate from static TypeScript files to PostgreSQL without changing the public website.

---

# Repository Structure

```
content/

    journal/

        records/

            2026-07-03-website-v1.ts

            2026-07-20-first-validation.ts

            ...

        index.ts

        types.ts
```

Every record exports exactly one EngineeringRecord object.

---

# TypeScript Schema

```typescript
export interface EngineeringRecord {

    slug: string

    title: string

    description: string

    summary: string

    status:
        | "draft"
        | "published"
        | "archived"

    recordType:
        | "Architecture Note"
        | "Engineering Record"
        | "Field Report"
        | "Validation Report"
        | "Measurement Note"
        | "Design Revision"

    schemaType:
        | "TechArticle"
        | "Article"
        | "Dataset"

    author: string

    datePublished: string

    dateModified?: string

    readingTimeMinutes: number

    heroImage: string

    sections: EngineeringSection[]

    entities: string[]

    tags: string[]

    relatedPages: string[]

    relatedRecords: string[]

    c4Diagrams: string[]

    charts: string[]

    datasets: string[]

    references: string[]

    googleCnl?: GoogleCnlAnalysis

}
```

---

# EngineeringSection

```typescript
export interface EngineeringSection {

    id: string

    heading: string

    body: string

}
```

Sections appear in page order.

---

# Record Status

Allowed values

```
draft
published
archived
```

Only

```
published
```

records appear in the public Engineering Journal.

---

# Record Types

## Architecture Note

Engineering architecture.

Examples

- PLC Architecture
- Telemetry
- Software Design

---

## Engineering Record

General implementation.

---

## Field Report

Real-world deployment.

---

## Validation Report

Verification of engineering assumptions.

---

## Measurement Note

Engineering measurements.

---

## Design Revision

Changes to previous implementation.

---

# Schema Types

Choose the schema matching the article.

```
TechArticle
```

Default.

---

```
Article
```

General engineering publication.

---

```
Dataset
```

Measurement-heavy publications.

---

# Required Fields

Every published record must define:

```
slug

title

description

summary

status

recordType

schemaType

author

datePublished

readingTimeMinutes

heroImage

sections

entities

tags
```

---

# Slug Rules

Use lowercase.

Use hyphens.

Never use spaces.

Good

```
first-pressure-validation
```

Bad

```
Pressure Validation Final
```

---

# Sections

Recommended order

```
Objective

Background

Implementation

Technical Details

Results

Lessons Learned

Next Steps
```

Not every article requires every section.

---

# Entities

Entities describe engineering concepts.

Examples

```
Delta PLC

Lysimeter

Pressure Sensor

Telemetry

Root Zone

EC Sensor

Pump

Valve

Flow Meter

Weather Station

Fertigation
```

Entities are used for

- internal linking

- ontology

- AI search

- future RAG

---

# Tags

Tags are broader than entities.

Example

```
PLC

Automation

Telemetry

Precision Agriculture

Irrigation

Sensors
```

---

# Related Pages

Website pages related to the article.

Example

```
/architecture

/field-validation

/objectives
```

---

# Related Records

Links to Engineering Journal records.

Example

```
pressure-validation

plc-control

lysimeter-installation
```

---

# Hero Image

Every article should define one hero image.

Image names follow the existing image registry.

Never hardcode image paths.

---

# C4 Diagrams

Optional.

Reference diagram IDs.

Example

```
plc-container

telemetry-component

system-context
```

Diagrams remain stored separately.

---

# Charts

Optional.

Reference chart IDs.

Example

```
pressure-trend

water-consumption

pump-runtime
```

Charts remain stored separately.

---

# Datasets

Optional.

Reference dataset IDs.

Example

```
validation-001

pressure-week-03

ec-calibration-02
```

Datasets remain independent.

---

# References

Internal references only.

Examples

```
Architecture

Field Validation

Engineering Journal

Pressure Validation Report
```

Avoid unnecessary external links.

---

# Google Cloud Natural Language

Optional.

```
googleCnl
```

stores offline analysis.

```typescript
export interface GoogleCnlAnalysis {

    analyzedAt: string

    entities: GoogleEntity[]

}
```

---

# GoogleEntity

```typescript
export interface GoogleEntity {

    name: string

    type: string

    salience: number

    mentions: number

    wikipediaUrl?: string

}
```

Google Cloud Natural Language analysis is performed offline.

Never during page rendering.

---

# JSON-LD

Every published record automatically generates:

- Article OR TechArticle OR Dataset

- BreadcrumbList

- ImageObject

- Person

- Organization

JSON-LD must always reflect visible page content.

---

# Metadata

Every record generates:

SEO Title

Meta Description

Canonical URL

OpenGraph

Twitter Metadata

Reading Time

Publication Date

Modified Date

---

# Internal Linking

During build, records should automatically generate:

Related Articles

Related Website Pages

Shared Engineering Entities

Future ontology links

No published record should become an orphan page.

---

# Build Pipeline

```
Engineering Record

↓

Validation

↓

Metadata

↓

JSON-LD

↓

Related Links

↓

Static HTML

↓

Search Engine Indexing
```

Future pipeline

```
Engineering Record

↓

Google Cloud Natural Language

↓

Entity Verification

↓

Ontology Update

↓

Static Build
```

---

# Future Database Compatibility

The schema is intentionally database-neutral.

Future storage may become:

```
PostgreSQL

SQLite

Headless CMS

API

JSON
```

without changing the rendering architecture.

---

# Version Control

Every Engineering Record is committed individually.

Git history becomes the engineering history of EDNA OS.

Engineering decisions should remain permanently traceable.

---

# Validation Checklist

Every published record should pass:

✓ Required fields complete

✓ Valid slug

✓ Valid schema type

✓ Engineering terminology reviewed

✓ Metadata generated

✓ JSON-LD valid

✓ Hero image registered

✓ Internal links verified

✓ Build passes

```
npm run lint

npm run typecheck

npm run build
```

---

# Long-Term Vision

The Engineering Record schema is the canonical data model of the EDNA OS knowledge base.

It enables a single engineering record to generate:

- Human-readable publication
- Search-engine optimized page
- Structured metadata
- Knowledge graph nodes
- AI-ready ontology
- Future semantic search
- RAG document source
- Technical archive

The schema is intentionally stable and should evolve cautiously.

Changes should preserve backward compatibility whenever practical.
