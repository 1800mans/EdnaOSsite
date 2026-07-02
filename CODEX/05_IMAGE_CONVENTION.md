# EDNA OS Website
# Image Convention
## Version 1.0

---

# Purpose

This document defines the image organization standard for the EDNA OS website.

The objective is to create a predictable and maintainable image library that allows placeholder images to be replaced by real engineering photography without modifying application code.

Image filenames, directory structure and usage are standardized across the project.

---

# Design Philosophy

Photography is one of the most important design elements of EDNA OS.

Images should document engineering reality.

They are not decoration.

Every photograph should strengthen the credibility of the project.

---

# Image Sources

Preferred

• Original photography from the EDNA pilot orchard

• Engineering photographs

• Infrastructure

• Equipment

• Sensors

• PLC cabinets

• Pump stations

• Irrigation hardware

• Root systems

• Field work

---

Acceptable During Development

Temporary placeholder photographs that match the intended composition.

These must eventually be replaced by original photography.

---

Never Use

AI-generated imagery

Generic technology stock photos

Corporate business imagery

People using tablets

Futuristic interfaces

Blue dashboards

Abstract graphics

Marketing illustrations

---

# Directory Structure

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

icons/

logos/
```

---

# Naming Convention

Every image name consists of four parts.

```
page

purpose

sequence

size
```

Pattern

```
page-purpose-##-size.ext
```

Example

```
home-hero-01-xl.webp
```

```
home-manifesto-01-lg.webp
```

```
architecture-plc-01-xl.webp
```

```
deployment-orchard-01-xl.webp
```

```
company-founder-01-lg.webp
```

---

# Image Sizes

Suffix

```
xl
```

Full-width hero

Approximately

2400 px

---

```
lg
```

Section image

1600 px

---

```
md
```

Cards

1200 px

---

```
sm
```

Thumbnails

800 px

---

```
icon
```

Small illustrations

SVG preferred

---

# File Formats

Preferred

WebP

---

Supported

AVIF

JPEG

PNG (only when transparency is required)

SVG (logos and icons)

---

Avoid

BMP

TIFF

GIF

---

# Hero Images

Every Level 1 page has one hero image.

Naming

```
page-hero-01-xl.webp
```

Examples

```
home-hero-01-xl.webp

objectives-hero-01-xl.webp

operating-loop-hero-01-xl.webp

measuring-outcomes-hero-01-xl.webp

architecture-hero-01-xl.webp

deployment-hero-01-xl.webp

documentation-hero-01-xl.webp

journal-hero-01-xl.webp

company-hero-01-xl.webp
```

---

# Section Images

Each major section receives its own image.

Examples

```
home-manifesto-01-lg.webp

home-preview-architecture-01-lg.webp

architecture-plc-01-lg.webp

architecture-edge-01-lg.webp

architecture-cloud-01-lg.webp

deployment-power-01-lg.webp

deployment-water-01-lg.webp

deployment-orchard-01-lg.webp
```

---

# Component Images

Images used by reusable React components belong in

```
public/assets/images/shared/
```

Examples

```
card-placeholder.webp

article-placeholder.webp

section-divider.webp
```

---

# Logos

```
public/assets/logos/
```

Examples

```
edna-logo.svg

edna-mark.svg

favicon.svg

apple-touch-icon.png

og-image.webp
```

---

# Icons

```
public/assets/icons/
```

Use SVG whenever possible.

Do not rasterize icons.

---

# Image Metadata

Every image should have

Meaningful filename

ALT text

Title (optional)

Description (optional)

Author (optional)

Date taken (if known)

Location (if known)

---

# ALT Text

Describe engineering reality.

Good

```
Delta PLC controlling irrigation valves inside the EDNA pump station
```

Good

```
Commercial durian orchard during irrigation validation
```

Bad

```
photo
```

Bad

```
picture
```

Bad

```
image1
```

---

# Composition Rules

Images should communicate

Scale

Infrastructure

Operation

Purpose

Avoid excessive close-ups.

Whenever possible include surrounding engineering context.

---

# Photography Style

Natural light

Real equipment

Operational condition

Visible wear is acceptable

No heavy editing

No dramatic HDR

No artificial saturation

No fake lens flare

---

# Orientation

Hero

Landscape

16:9

---

Section

Landscape

4:3

---

Cards

4:3

or

1:1

---

Portrait orientation should be used only when absolutely necessary.

---

# Placeholder Policy

During development every placeholder image must use the final filename.

Example

```
architecture-plc-01-xl.webp
```

Later simply overwrite the file with the real photograph.

No React component should require modification.

---

# Image Optimization

Images should

be compressed

have responsive sizes

use lazy loading where appropriate

avoid layout shift

specify width and height

---

# Open Graph Images

Every major page should eventually have its own OpenGraph image.

Naming

```
home-og.webp

architecture-og.webp

deployment-og.webp

company-og.webp
```

Size

```
1200 × 630 px
```

---

# Future Asset Library

The image library is expected to grow.

Future categories may include

```
hardware/

plc/

electrical/

irrigation/

fertigation/

lysimeter/

root-zone/

telemetry/

research/

engineering/

whitepapers/
```

The naming convention should remain unchanged.

---

# File Replacement Rule

Never rename images after they are referenced in code.

Replace the file.

Not the filename.

This keeps React components stable and avoids unnecessary code changes.

---

# Final Statement

The EDNA OS image library is designed as an engineering asset repository.

Images are treated as permanent project resources rather than temporary visual elements.

A consistent naming convention ensures that photography can evolve over the lifetime of the project without requiring changes to the website implementation.

Every image should reinforce the same message:

**Real engineering. Real infrastructure. Real commercial orchard.**
