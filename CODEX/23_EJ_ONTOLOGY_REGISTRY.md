# 23_EJ_ONTOLOGY_REGISTRY.md

# EDNA OS Engineering Ontology Registry

Version: 1.0

Status: Living Registry

Maintained by:

Engineering Journal Publications

Governed by:

20_ENGINEERING_ONTOLOGY_STANDARD.md

---

# PURPOSE

This document is the canonical human-readable registry of the EDNA OS engineering ontology.

It is updated whenever an Engineering Journal article introduces, modifies or deprecates engineering knowledge.

This document does NOT replace the structured ontology stored under:

content/ontology/

Instead, it provides:

• engineering vocabulary

• engineering definitions

• engineering relationships

• ontology history

• engineering consistency

for both humans and AI systems.

---

# UPDATE RULES

Every Engineering Journal publication must answer:

□ New Entity?

□ Modified Entity?

□ New Concept?

□ Modified Concept?

□ New Relationship?

□ Modified Relationship?

□ Deprecated Relationship?

□ Updated Taxonomy?

□ Updated Vocabulary?

If none apply:

Write:

No ontology changes.

---

# ONTOLOGY VERSION

Current Version:

1.0

Last Updated:

YYYY-MM-DD

Engineering Record:

journal/article-slug

---

# ENGINEERING ENTITY REGISTRY

=================================================

Entity

Delta PLC

-------------------------------------------------

Category

Programmable Logic Controller

Aliases

PLC

Delta DVP26SE11T

Description

Primary deterministic field controller used by EDNA OS.

Status

Active

First Introduced

YYYY-MM-DD

Last Updated

YYYY-MM-DD

Related Concepts

Closed Loop Control

Operational Evidence

Telemetry

Automation

Related Entities

Pump

Valve

Pressure Sensor

Flow Meter

Related Pages

Architecture

Operating Loop

Related Engineering Records

PLC Architecture

Pump Controller Revision

Notes

None

=================================================

(Add additional entities below)



















---

# ENGINEERING CONCEPT REGISTRY

=================================================

Concept

Operational Evidence

-------------------------------------------------

Definition

Measured engineering data collected during commercial orchard operation and used to improve future control decisions.

Parent Concept

Measurement

Child Concepts

Pressure Validation

Water Consumption

EC Measurement

Related Entities

PLC

Telemetry

Pressure Sensor

Lysimeter

Related Engineering Records

Baseline Operating Evidence

Field Validation Framework

Last Updated

YYYY-MM-DD

Notes

None

=================================================

(Add additional concepts below)



















---

# RELATIONSHIP REGISTRY

Relationship Format

Entity

↓

Relationship

↓

Entity / Concept

=================================================

Delta PLC

controls

Pump

-------------------------------------------------

Telemetry

collects

Sensor Measurements

-------------------------------------------------

Pressure Sensor

produces

Pressure Data

-------------------------------------------------

Lysimeter

measures

Root Zone Water Extraction

-------------------------------------------------

Operational Evidence

improves

Decision Logic

-------------------------------------------------

Engineering Journal

updates

Ontology Registry

=================================================

(Add additional relationships below)



















---

# TAXONOMY

Controllers

    PLC

        Delta PLC

Sensors

    Pressure Sensor

    Flow Meter

    EC Sensor

    Temperature Sensor

Infrastructure

    Pump

    Valve

    Fertigation Tank

Measurement

    Telemetry

    Operational Evidence

Validation

    Field Validation

    Engineering Journal

Software

    Edge Computing

    Data Logging

    MQTT

    PostgreSQL

(Add new taxonomy nodes below)



















---

# ENGINEERING VOCABULARY

Preferred Term

↓

Avoid

-------------------------------------------------

Operational Evidence

Analytics

-------------------------------------------------

Engineering Journal

Blog

-------------------------------------------------

Field Validation

Deployment

-------------------------------------------------

Commercial Orchard

Farm

-------------------------------------------------

Orchard Operating System

Agriculture Platform

-------------------------------------------------

Telemetry

Monitoring

-------------------------------------------------

Engineering Record

Article

(Add additional terminology below)



















---

# ONTOLOGY CHANGE LOG

=================================================

Version

1.0

Date

YYYY-MM-DD

Engineering Record

baseline-operating-evidence

Changes

Initial ontology created.

=================================================

(Add new revisions at the TOP)



















---

# ONTOLOGY STATISTICS

Engineering Entities

0

Engineering Concepts

0

Relationships

0

Taxonomy Nodes

0

Vocabulary Terms

0

Engineering Records Referenced

0

Last Calculated

YYYY-MM-DD

---

# FUTURE REGISTRY

Reserved

Neo4j IDs

Knowledge Graph IDs

OWL IDs

RDF IDs

Embedding IDs

Vector IDs

External References

Leave blank until implemented.

---

# AI UPDATE INSTRUCTIONS

When processing a new Engineering Journal article:

1.

Read this registry.

2.

Identify ontology changes.

3.

Update:

• Entity Registry

• Concept Registry

• Relationship Registry

• Taxonomy

• Vocabulary

• Statistics

• Change Log

4.

Never remove engineering history.

Mark deprecated knowledge instead.

5.

Maintain backward compatibility whenever possible.

6.

The registry must remain internally consistent.

7.

If uncertain,

leave existing ontology unchanged and report the ambiguity.

---

END OF REGISTRY
