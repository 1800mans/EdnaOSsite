# 21_EJ_RECORD_TEMPLATE.md

# EDNA OS Engineering Journal Record Template

Version: 1.1

Status: Publishing Template

Applies to:

- Every Engineering Journal publication
- All Engineering Records
- Architecture Notes
- Field Reports
- Validation Reports
- Measurement Notes
- Design Revisions

---

# Purpose

This template defines the canonical structure of every Engineering Journal article.

It follows:

18_ENGINEERING_JOURNAL_STANDARD.md

19_ENGINEERING_RECORD_SCHEMA.md

20_ENGINEERING_ONTOLOGY_STANDARD.md

This template contains no implementation rules.

It defines only the article layout.

---

# ARTICLE HEADER

Title

Description

Slug

Record Type

Schema Type

Status

Version

Revision

Author

Date Published

Date Modified

Last Reviewed

Review Status

Reading Time

Hero Image

---

# OBJECTIVE

What engineering problem is being solved?

---

# BACKGROUND

Engineering context.

Previous implementation.

Why this work became necessary.

---

# IMPLEMENTATION

Describe exactly what was engineered.

Include:

Hardware

Software

PLC

Telemetry

Construction

Algorithms

Protocols

---

# TECHNICAL DETAILS

Concrete engineering information.

Measurements.

Equipment.

Part numbers.

Firmware.

Protocols.

Dimensions.

Configuration.

---

# RESULTS

Observed behaviour.

Measurements.

Advantages.

Remaining limitations.

Unexpected observations.

---

# LESSONS LEARNED

Engineering conclusions.

Failures.

Trade-offs.

Future improvements.

---

# NEXT STEPS

Future engineering work.

Open questions.

Future validation.

---

# RELATED WEBSITE PAGES

Architecture

Objectives

Operating Loop

Field Validation

Measuring Outcomes

Engineering Journal

About

---

# RELATED ENGINEERING RECORDS

List previous related records.

---

# ENGINEERING ENTITIES

Physical engineering objects.

Examples

Delta PLC

Pressure Sensor

Lysimeter

ESP32

Flow Meter

Pump

Valve

---

# ENGINEERING CONCEPTS

Abstract engineering concepts.

Examples

Operational Evidence

Closed Loop Irrigation

Telemetry

Root Zone Measurement

Automation

Validation

---

# ONTOLOGY IMPACT

Every article must answer:

New entities introduced

Existing entities modified

New concepts introduced

Existing concepts modified

Relationships introduced

Relationships modified

Deprecated relationships

Ontology files affected

---

# C4 DIAGRAMS

Recommended diagrams.

Context

Container

Component

Dynamic

Deployment

Code (optional)

---

# CHARTS

Recommended charts.

Chart title

Purpose

Dataset

X-axis

Y-axis

Measurement units

---

# DATASETS

CSV

JSON

Measurement tables

Future PostgreSQL exports

---

# REFERENCES

Internal references only.

---

# SEO

SEO Title

Meta Description

Canonical URL

OpenGraph Title

OpenGraph Description

Suggested Image Filename

---

# JSON-LD

Generated automatically.

Do not manually edit unless necessary.

---

# GOOGLE CLOUD NATURAL LANGUAGE

Offline enrichment only.

Suggested entities

Suggested ontology additions

Suggested entity relationships

---

# INTERNAL LINKING

Related website pages

Related Engineering Records

Related entities

Related concepts

---

# PUBLISHING CHECKLIST

✓ Engineering review complete

✓ Measurements verified

✓ Images registered

✓ Ontology updated

✓ Metadata verified

✓ JSON-LD generated

✓ Internal links verified

✓ Build successful

npm run lint

npm run typecheck

npm run build

---

# END OF TEMPLATE
