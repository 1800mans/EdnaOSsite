# EDNA OS Website
# Accessibility
## Version 1.0

---

# Purpose

This document defines the accessibility requirements for the EDNA OS website.

Accessibility is a fundamental engineering requirement—not an optional enhancement.

The objective is to ensure that the website is usable by the widest possible audience while maintaining the engineering quality and visual identity of EDNA OS.

Accessibility should be considered during design, implementation and future development.

---

# Accessibility Philosophy

Engineering exists to solve real-world problems.

Accessibility is part of good engineering.

The website should be:

- usable
- readable
- navigable
- understandable
- predictable

Accessibility improvements should never compromise engineering accuracy.

---

# Compliance Goal

Target

**WCAG 2.2 Level AA**

Every page should meet or exceed this standard whenever practical.

---

# General Principles

Every feature should satisfy the following principles:

Perceivable

Operable

Understandable

Robust

These four principles guide all accessibility decisions.

---

# Semantic HTML

Use semantic HTML whenever possible.

Preferred elements

```
<header>

<nav>

<main>

<section>

<article>

<aside>

<footer>

<figure>

<figcaption>
```

Avoid using generic `<div>` elements where semantic elements are appropriate.

---

# Heading Structure

Every page must contain exactly one

```
H1
```

Headings should follow a logical hierarchy.

Example

```
H1

↓

H2

↓

H3

↓

H4
```

Never skip heading levels.

---

# Navigation

Navigation must be fully keyboard accessible.

Requirements

- Logical tab order
- Visible focus indicator
- Keyboard operable menus
- Accessible mobile navigation

Navigation should never trap keyboard focus.

---

# Keyboard Navigation

Every interactive element must be usable without a mouse.

Examples

Buttons

Links

Menus

Accordion

Tabs

Forms

Modal dialogs

Dropdowns

---

# Focus States

Every interactive element must display a visible focus indicator.

Focus indicators should have sufficient contrast.

Never remove browser focus styles without replacing them.

---

# Skip Navigation

Every page should include

```
Skip to Main Content
```

The link should become visible when focused.

---

# Links

Link text should describe the destination.

Good

```
Explore Architecture

Read Engineering Documentation

View Deployment
```

Poor

```
Click Here

Learn More

Read More
```

---

# Buttons

Buttons should describe their action.

Good

```
Explore Architecture
```

Poor

```
Submit
```

unless used in a form.

---

# Color Contrast

Minimum contrast ratio

Normal text

```
4.5 : 1
```

Large text

```
3 : 1
```

Interactive elements must remain readable under all states.

---

# Color Usage

Color should never be the only method of conveying information.

Always provide

Text

Icons

Labels

Patterns

when necessary.

---

# Typography

Minimum body text

```
16px
```

Preferred line height

```
1.5
```

Paragraph width

Approximately

```
70–75 characters
```

Avoid justified text.

---

# Images

Every meaningful image requires ALT text.

Good

```
Delta PLC controlling irrigation valves inside the EDNA pump station.
```

Good

```
Commercial durian orchard during irrigation validation.
```

Poor

```
image
```

Poor

```
photo
```

Decorative images should use

```
alt=""
```

---

# Hero Images

Hero images should reinforce page content.

They must not contain essential text that exists only inside the image.

Important information must remain available as HTML.

---

# Icons

Icons should not communicate meaning alone.

Whenever appropriate,

provide

Visible labels

or

Accessible labels.

---

# Forms

Every form control requires

Label

Associated input

Keyboard support

Error messaging

Autocomplete where appropriate

Accessible validation

Placeholder text is not a replacement for labels.

---

# Error Messages

Error messages should

Clearly explain the problem

Explain how to correct it

Be announced to assistive technologies

Avoid vague wording.

---

# Tables

Use tables only for tabular data.

Every table should include

```
<thead>

<tbody>

<th>
```

Avoid tables for layout.

---

# Lists

Use semantic lists.

```
<ul>

<ol>

<li>
```

Avoid manually formatted bullet characters.

---

# Motion

Respect

```
prefers-reduced-motion
```

Animations should be reduced or disabled when requested by the user.

---

# Animation Rules

Allowed

Fade

Opacity

Small translation

Avoid

Flashing

Rapid movement

Infinite animation

Parallax

Spinning elements

Background animations

---

# Responsive Design

The website should remain fully usable on

Desktop

Tablet

Mobile

Landscape

Portrait

Touch targets should be at least

```
44 × 44 px
```

---

# Images

Images should

Scale correctly

Avoid layout shift

Remain readable

Preserve important engineering details

Never crop critical information.

---

# Documents

Downloadable documents should

Use descriptive filenames

Be accessible when practical

Clearly identify file type

Example

```
Engineering_Architecture_v1.0.pdf
```

---

# Screen Readers

Interactive elements should include

Accessible names

ARIA labels only when necessary

Semantic HTML should always be preferred over excessive ARIA usage.

---

# ARIA

Use ARIA only when native HTML cannot provide the required semantics.

Examples

```
aria-label

aria-expanded

aria-controls

aria-current
```

Avoid unnecessary ARIA attributes.

---

# Landmarks

Every page should contain

```
<header>

<nav>

<main>

<footer>
```

These landmarks improve navigation for assistive technologies.

---

# Language

Specify

```
lang="en"
```

Future multilingual support should correctly update the language attribute.

---

# External Links

When opening in a new tab,

inform the user.

Example

```
GitHub (opens in a new tab)
```

---

# Loading States

Loading indicators should be

Visible

Accessible

Understandable

Avoid endless loading animations.

---

# Empty States

If no content exists,

explain why.

Provide a logical next action.

Avoid blank pages.

---

# Accessibility Testing

Every release should include testing with

Keyboard only

Screen reader

High contrast mode

Reduced motion

Mobile accessibility

Responsive layout

Google Lighthouse

Accessibility Score

Target

```
100
```

---

# Future Improvements

Potential future additions

Accessibility statement

Keyboard shortcuts

Reading mode

High contrast theme

Print-friendly documentation

Offline documentation

These features should integrate naturally with the existing design system.

---

# Accessibility Principles

Accessibility should never feel separate from design.

A well-designed engineering website should naturally be:

Readable

Logical

Predictable

Inclusive

Maintainable

Accessibility is simply good engineering applied to user experience.

---

# Final Statement

The EDNA OS website should be accessible by design.

Every engineering concept should be understandable regardless of how visitors interact with the website.

Accessibility is not a compliance checklist.

It is a reflection of the engineering values behind EDNA OS.

The same attention given to deterministic control, operational evidence and system architecture should also be applied to usability, clarity and inclusiveness.
