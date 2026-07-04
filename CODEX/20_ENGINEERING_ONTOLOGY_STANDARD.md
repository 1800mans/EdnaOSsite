# 20_ENGINEERING_ONTOLOGY_STANDARD.md

# EDNA OS Engineering Ontology Standard

Version: 1.0

Status: Engineering Standard

Applies to:

- Engineering Journal
- Architecture
- Field Validation
- Future Documentation
- Future AI Search
- Future RAG
- Future Knowledge Graph

---

# Purpose

The Engineering Ontology is the canonical knowledge model of EDNA OS.

It defines:

• engineering entities

• engineering concepts

• relationships

• aliases

• terminology

• internal linking

The ontology exists independently of the website.

The website is one presentation layer built upon the ontology.

---

# Engineering Philosophy

Every published Engineering Journal record contributes knowledge.

Publishing an article is not only publishing text.

It is updating the engineering knowledge base.

---

# Ontology Repository

The ontology is stored separately from articles.

Repository structure

content/

    ontology/

        entities/

        concepts/

        relationships/

        taxonomy/

Every ontology object lives in its own file.

Never store the entire ontology inside one markdown document.

---

# Ontology Layers

Layer 1

Engineering Entities

Physical things.

Examples

Delta PLC

ESP32

Pressure Sensor

Flow Meter

Lysimeter

Pump

Valve

Weather Station

---

Layer 2

Engineering Concepts

Abstract engineering ideas.

Examples

Operational Evidence

Closed Loop Irrigation

Distributed Control

Root Zone Measurement

Telemetry

Validation

Automation

---

Layer 3

Relationships

Examples

measures

controls

connectedTo

dependsOn

validates

produces

consumes

contains

installedIn

uses

publishes

documents

---

Layer 4

Taxonomy

Hierarchical organization.

Example

Sensors

↓

Pressure Sensor

↓

Honeywell PX3

---

# Entity Structure

Every entity should define

id

name

aliases

description

category

relatedConcepts

relatedEntities

relatedPages

relatedJournalRecords

firstIntroduced

lastUpdated

status

---

# Concept Structure

Every concept defines

id

name

description

parentConcept

childConcepts

relatedEntities

relatedJournalRecords

lastUpdated

---

# Relationship Structure

Relationships should be directional.

Example

Lysimeter

measures

Root Zone Water Extraction

Pressure Sensor

produces

Pressure Data

PLC

controls

Pump

---

# Engineering Journal Integration

Every Engineering Journal article must declare

Entities

Concepts

Relationships introduced

Relationships modified

Relationships removed

Publishing an article should automatically update the ontology registry.

---

# Ontology Review

Each new Engineering Journal article must answer

Does it introduce a new entity?

Does it introduce a new concept?

Does it create a new relationship?

Does it modify an existing relationship?

Does it obsolete previous knowledge?

If yes

update the ontology.

---

# Versioning

Every ontology object contains

version

revision

lastReviewed

reviewStatus

These follow the same lifecycle as Engineering Records.

---

# AI Search

The ontology exists to improve

semantic search

internal search

AI assistants

RAG

knowledge graphs

entity linking

automatic recommendations

---

# Google Cloud Natural Language

Google Cloud Natural Language is used offline.

Workflow

Engineering Record

↓

Entity Extraction

↓

Manual Review

↓

Ontology Update

↓

Static Build

Google never modifies the ontology directly.

Human review is always required.

---

# Internal Linking

The ontology is the primary source for

Related Pages

Related Journal Records

Related Concepts

Related Entities

No links should be generated from keywords alone.

Links should be ontology-driven.

---

# C4 Integration

C4 diagrams should reference ontology entities rather than free-form names.

Example

PLC

instead of

Main Controller

This ensures consistency across diagrams.

---

# Charts

Charts should reference ontology entities and concepts.

Example

Entity

Pressure Sensor

Concept

Pressure Stability

Chart

Pressure Trend

---

# Publishing Workflow

Every Engineering Journal publication follows

Engineering Notes

↓

Engineering Record

↓

Ontology Review

↓

Entity Update

↓

Concept Update

↓

Relationship Update

↓

Metadata

↓

JSON-LD

↓

Static Build

↓

Deployment

---

# Long-Term Vision

The ontology becomes the canonical engineering knowledge base of EDNA OS.

Articles describe engineering work.

The ontology describes engineering knowledge.

Future systems should derive:

AI Search

Knowledge Graphs

Semantic Search

Internal Linking

Engineering Assistants

from the ontology rather than directly from article text.
