import type { Metadata } from "next";

import { ObjectiveCard } from "@/components/cards/ObjectiveCard";
import { Grid } from "@/components/layout/Grid";
import { Page } from "@/components/layout/Page";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/shared";
import { Callout } from "@/components/ui/Callout";
import { ImageBlock } from "@/components/ui/ImageBlock";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { objectivesPage } from "@/content/pages";
import { createBreadcrumbs } from "@/lib/breadcrumbs";
import { createNextMetadata } from "@/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateImageSchema,
  generateTechArticleSchema,
  generateWebPageSchema,
} from "@/lib/schema";
import type { PageSection } from "@/types/page";

export const metadata: Metadata = createNextMetadata(objectivesPage.metadata);

const breadcrumbs = createBreadcrumbs(objectivesPage.path);

const schemaGraph = [
  generateWebPageSchema({
    name: objectivesPage.metadata.title,
    path: objectivesPage.path,
    description: objectivesPage.metadata.description,
    image: objectivesPage.hero.image,
    breadcrumb: breadcrumbs,
  }),
  generateTechArticleSchema({
    metadata: objectivesPage.metadata,
    headline: objectivesPage.hero.title,
  }),
  generateBreadcrumbSchema(breadcrumbs),
  generateImageSchema(objectivesPage.hero.image),
];

const objectiveSectionIds = [
  "reduce-water-consumption",
  "reduce-fertilizer-losses",
  "reduce-soil-erosion",
  "improve-root-zone-health",
  "increase-export-quality",
  "improve-production-consistency",
  "lower-operating-costs",
] as const;

export default function Objectives() {
  const technology = getObjectivesSection("technology-is-not-the-objective");
  const overview = getObjectivesSection("engineering-objectives-overview");
  const objectiveSections = objectiveSectionIds.map((id) => getObjectivesSection(id));

  return (
    <Page page={objectivesPage} relatedPages>
      <JsonLd data={schemaGraph} />
      <Hero {...objectivesPage.hero} primaryCTA={objectivesPage.primaryCTA} />

      <Section id={technology.id} background="surface">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:items-center">
          <Stack gap="large">
            <SectionHeader
              title={technology.title}
              description={technology.summary}
              headingId={`${technology.id}-heading`}
            />
            {objectivesPage.hero.supportingText ? (
              <Callout>{objectivesPage.hero.supportingText}</Callout>
            ) : null}
          </Stack>
          <ImageBlock image={objectivesPage.hero.image} />
        </div>
      </Section>

      <Section id={overview.id}>
        <Stack gap="xlarge">
          <SectionHeader
            title={overview.title}
            description={overview.summary}
            headingId={`${overview.id}-heading`}
          />
          <Grid>
            {objectiveSections.map((section) => (
              <ObjectiveCard
                key={section.id}
                title={section.title}
                description={section.summary}
              />
            ))}
          </Grid>
        </Stack>
      </Section>

      {objectiveSections.map((section, index) => (
        <Section
          key={section.id}
          id={section.id}
          background={index % 2 === 0 ? "surface" : "default"}
        >
          <SectionHeader
            title={section.title}
            description={section.summary}
            headingId={`${section.id}-heading`}
          />
        </Section>
      ))}
    </Page>
  );
}

function getObjectivesSection(
  id: string,
): Required<Pick<PageSection, "id" | "title" | "summary">> {
  const section = objectivesPage.sections.find((item) => item.id === id);

  if (!section?.summary) {
    throw new Error(`Missing Objectives page section content for ${id}`);
  }

  return {
    id: section.id,
    title: section.title,
    summary: section.summary,
  };
}
