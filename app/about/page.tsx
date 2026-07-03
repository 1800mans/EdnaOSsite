import type { Metadata } from "next";

import { FeatureCard } from "@/components/cards/FeatureCard";
import { Grid } from "@/components/layout/Grid";
import { Page } from "@/components/layout/Page";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/shared";
import { Callout } from "@/components/ui/Callout";
import { ImageBlock } from "@/components/ui/ImageBlock";
import { Link } from "@/components/ui/Link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { aboutPage } from "@/content/pages";
import { aboutFounder } from "@/content/pages/about";
import { createBreadcrumbs } from "@/lib/breadcrumbs";
import { createNextMetadata } from "@/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateImageSchema,
  generatePersonSchema,
  generateWebPageSchema,
} from "@/lib/schema";
import type { PageSection } from "@/types/page";

export const metadata: Metadata = createNextMetadata(aboutPage.metadata);

const breadcrumbs = createBreadcrumbs(aboutPage.path);

const schemaGraph = [
  generateWebPageSchema({
    name: aboutPage.metadata.title,
    path: aboutPage.path,
    description: aboutPage.metadata.description,
    image: aboutPage.hero.image,
    breadcrumb: breadcrumbs,
  }),
  generatePersonSchema({
    name: aboutFounder.name,
    jobTitle: aboutFounder.jobTitle,
    url: aboutPage.path,
    image: aboutFounder.image.src,
    description: getAboutSection("about-the-founder").summary,
  }),
  generateBreadcrumbSchema(breadcrumbs),
  generateImageSchema(aboutPage.hero.image),
];

const aboutSectionIds = [
  "project-origin",
  "why-edna-exists",
  "about-the-founder",
  "development-locations",
  "contact",
] as const;

export default function About() {
  const sections = aboutSectionIds.map((id) => getAboutSection(id));
  const [projectOrigin, whyEdnaExists, founder, locations, contact] = sections;

  return (
    <Page page={aboutPage} relatedPages>
      <JsonLd data={schemaGraph} />
      <Hero {...aboutPage.hero} primaryCTA={aboutPage.primaryCTA} />

      <Section id={projectOrigin.id} background="surface">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:items-center">
          <Stack gap="large">
            <SectionHeader
              title={projectOrigin.title}
              description={projectOrigin.summary}
              headingId={`${projectOrigin.id}-heading`}
            />
            <Callout>{whyEdnaExists.summary}</Callout>
          </Stack>
          <ImageBlock image={aboutFounder.image} />
        </div>
      </Section>

      <Section id={whyEdnaExists.id}>
        <Stack gap="xlarge">
          <SectionHeader
            title={whyEdnaExists.title}
            description={whyEdnaExists.summary}
            headingId={`${whyEdnaExists.id}-heading`}
          />
          <Grid columns={2}>
            <FeatureCard
              title={projectOrigin.title}
              description={projectOrigin.summary}
            />
            <FeatureCard title={founder.title} description={founder.summary} />
          </Grid>
        </Stack>
      </Section>

      <Section id={founder.id} background="surface">
        <SectionHeader
          title={founder.title}
          description={founder.summary}
          headingId={`${founder.id}-heading`}
        />
      </Section>

      <Section id={locations.id}>
        <SectionHeader
          title={locations.title}
          description={locations.summary}
          headingId={`${locations.id}-heading`}
        />
      </Section>

      <Section id={contact.id} background="surface">
        <Stack gap="large">
          <SectionHeader
            title={contact.title}
            description={contact.summary}
            headingId={`${contact.id}-heading`}
          />
          <p>
            <Link href={aboutPage.primaryCTA.href}>{aboutPage.primaryCTA.label}</Link>
          </p>
        </Stack>
      </Section>
    </Page>
  );
}

function getAboutSection(
  id: string,
): Required<Pick<PageSection, "id" | "title" | "summary">> {
  const section = aboutPage.sections.find((item) => item.id === id);

  if (!section?.summary) {
    throw new Error(`Missing About page section content for ${id}`);
  }

  return {
    id: section.id,
    title: section.title,
    summary: section.summary,
  };
}
