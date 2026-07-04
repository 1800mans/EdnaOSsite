# 18_ENGINEERING_JOURNAL_STANDARD.md

# EDNA OS Engineering Journal Standard

Version: 1.0

Status: Engineering Standard

Applies to:
- All Engineering Journal entries
- Future technical publications
- Architecture records
- Field validation reports
- Design revisions
- Measurement reports

---

# Purpose

The Engineering Journal is **not** a blog.

It is the permanent engineering record documenting the evolution of EDNA OS and the Orchard Operating System.

Every published record should provide long-term technical value for:

- engineers
- automation professionals
- commercial growers
- researchers
- investors
- search engines
- AI systems

The Engineering Journal is intended to become the primary technical knowledge base of EDNA OS.

---

# Engineering Philosophy

Every publication must document engineering reality.

The journal records:

- engineering decisions
- implementation
- validation
- measurements
- failures
- revisions
- lessons learned

The journal never exists to promote products or marketing claims.

Operational evidence always takes priority over opinion.

---

# Writing Style

Required style:

- technical
- objective
- measurable
- concise
- engineering-focused
- documentary

Avoid:

- marketing language
- startup language
- AI hype
- exaggerated claims
- vague promises

Never use phrases such as:

- revolutionary
- game changing
- next generation
- cutting edge
- world class
- disruptive
- industry leading
- breakthrough technology

Prefer:

- implemented
- measured
- validated
- observed
- recorded
- modified
- engineered
- evaluated

---

# Article Categories

Every record must belong to one category.

Allowed categories:

## Architecture Note

Documents engineering architecture.

Examples:

- PLC Architecture
- Edge Computing
- Telemetry Design

---

## Engineering Record

General engineering implementation.

Examples:

- Pump Control
- Valve Logic
- Software Design

---

## Field Report

Real-world observations.

Examples:

- Orchard Deployment
- Seasonal Results
- Irrigation Performance

---

## Validation Report

Engineering verification.

Examples:

- Pressure Validation
- EC Validation
- Water Consumption

---

## Measurement Note

Focused engineering measurements.

Examples:

- Sensor Calibration
- Flow Rate
- Pressure Stability

---

## Design Revision

Engineering improvements.

Examples:

- Architecture Revision
- Wiring Revision
- Control Logic Revision

---

# Schema Selection

Preferred schema:

TechArticle

Use Article when content is broader.

Use Dataset when measurements are the primary content.

Every article should generate structured data.

---

# Required Sections

Every Engineering Journal record should contain the following sections where applicable.

## Title

Clear engineering title.

Good:

Pressure Stability During Sequential Zone Switching

Bad:

Big Improvement To Our System

---

## Description

150–250 characters.

Used for:

- SEO
- OpenGraph
- summaries

---

## Objective

What engineering problem is being solved?

---

## Background

Explain:

- previous implementation
- limitations
- engineering context

---

## Implementation

Describe exactly what was built or modified.

Include:

- hardware
- software
- PLC
- edge software
- telemetry
- construction

---

## Technical Details

Concrete engineering information.

Examples:

- dimensions
- pressure
- voltage
- flow
- EC
- firmware
- protocol
- PLC model

Numbers are encouraged.

---

## Results

Describe:

Observed behaviour

Measurements

Unexpected observations

Remaining issues

---

## Lessons Learned

Document engineering conclusions.

Failures are valuable.

Do not hide unsuccessful experiments.

---

## Next Steps

Future engineering work.

---

# Engineering Evidence

Whenever possible include:

- measurements
- tables
- photographs
- diagrams
- calculations
- validation records

Engineering evidence is preferred over descriptive text.

---

# Images

Each article may include:

Hero image

Supporting photographs

Equipment photographs

Construction photographs

Annotated diagrams

Images must follow the existing image naming convention.

---

# C4 Diagrams

Where applicable include:

System Context

Container

Component

Dynamic

Deployment

Code

C4 diagrams should explain architecture rather than implementation details.

---

# Charts

Charts are encouraged.

Recommended chart types:

Pressure over time

Water usage

Flow rate

EC trend

Temperature

Pump runtime

Sensor calibration

Development progress

Charts should be generated from structured datasets whenever possible.

Avoid decorative graphics.

---

# Datasets

Measurement-heavy articles should include structured datasets.

Supported formats:

CSV

JSON

Tables

Future PostgreSQL exports

Datasets should remain machine-readable.

---

# Engineering Entities

Each article should declare engineering entities.

Examples:

Delta PLC

Telemetry

Lysimeter

Pressure Sensor

EC Sensor

VFD

Root Zone

Fertigation

Weather Station

Pump

Valve

Flow Meter

These entities become part of the EDNA OS engineering ontology.

---

# Google Cloud Natural Language

Google Cloud Natural Language API is **not** called during page rendering.

Instead it is used offline during article preparation.

Suggested workflow:

Engineering Notes

↓

Draft Article

↓

Google Cloud Natural Language Analysis

↓

Entity Extraction

↓

Manual Review

↓

Engineering Record

↓

Static Site Build

Entity extraction should be reviewed by a human before publication.

---

# Internal Linking

Every article should link to:

Relevant website pages

Relevant Engineering Journal records

Related engineering concepts

Avoid orphan articles.

---

# Metadata

Each article must define:

Title

Description

Slug

Canonical URL

Publication date

Modification date

Author

Category

Record type

Schema type

Tags

Reading time

Featured image

---

# JSON-LD

Every article should generate JSON-LD.

Typical schemas:

TechArticle

Article

Dataset

ImageObject

BreadcrumbList

Person

Organization

JSON-LD must always match visible page content.

---

# Accessibility

Articles should maintain:

One H1

Logical heading hierarchy

Semantic sections

Accessible tables

Meaningful image alt text

Descriptive links

---

# SEO

Each article should have:

Unique title

Unique description

Canonical URL

OpenGraph metadata

Twitter metadata

Internal links

Relevant engineering terminology

No keyword stuffing.

Write for engineers first.

---

# Future AI Readiness

Engineering Journal records should be structured so they can later support:

AI Search

Knowledge Graphs

Ontology

Semantic Search

RAG

Engineering Assistants

The journal should become the canonical technical knowledge source for EDNA OS.

---

# Publishing Checklist

Before publishing verify:

✓ Technical accuracy

✓ Measurements included where available

✓ Engineering terminology reviewed

✓ Images named correctly

✓ JSON-LD valid

✓ Internal links verified

✓ Related pages linked

✓ Related records linked

✓ Metadata complete

✓ Build passes

npm run lint

npm run typecheck

npm run build

---

# Long-Term Vision

The Engineering Journal is intended to evolve into a permanent engineering archive documenting the creation and evolution of the Orchard Operating System.

It is both a historical record and a technical reference.

Every article should remain valuable years after publication.

Future readers should be able to understand not only **what** was built, but **why** engineering decisions were made and **how** they were validated.

The Engineering Journal is the technical memory of EDNA OS.
