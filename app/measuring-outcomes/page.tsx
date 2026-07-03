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
import { SectionHeader } from "@/components/ui/SectionHeader";
import { measuringOutcomesPage } from "@/content/pages";
import { createBreadcrumbs } from "@/lib/breadcrumbs";
import { Images } from "@/lib/images";
import { createNextMetadata } from "@/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateImageSchema,
  generateTechArticleSchema,
  generateWebPageSchema,
} from "@/lib/schema";
import type { PageSection } from "@/types/page";

export const metadata: Metadata = createNextMetadata(measuringOutcomesPage.metadata);

const breadcrumbs = createBreadcrumbs(measuringOutcomesPage.path);

const schemaGraph = [
  generateWebPageSchema({
    name: measuringOutcomesPage.metadata.title,
    path: measuringOutcomesPage.path,
    description: measuringOutcomesPage.metadata.description,
    image: measuringOutcomesPage.hero.image,
    breadcrumb: breadcrumbs,
  }),
  generateTechArticleSchema({
    metadata: measuringOutcomesPage.metadata,
    headline: measuringOutcomesPage.hero.title,
  }),
  generateBreadcrumbSchema(breadcrumbs),
  generateImageSchema(measuringOutcomesPage.hero.image),
];

const measuringOutcomeSectionIds = [
  "input-vs-outcome",
  "operational-evidence",
  "lysimeter-system",
  "root-zone-monitoring",
  "why-this-matters",
] as const;

export default function MeasuringOutcomes() {
  const inputVsOutcome = getMeasuringOutcomeSection("input-vs-outcome");
  const operationalEvidence = getMeasuringOutcomeSection("operational-evidence");
  const lysimeterSystem = getMeasuringOutcomeSection("lysimeter-system");
  const rootZoneMonitoring = getMeasuringOutcomeSection("root-zone-monitoring");
  const whyThisMatters = getMeasuringOutcomeSection("why-this-matters");
  const overviewSections = measuringOutcomeSectionIds
    .filter((id) => id !== "input-vs-outcome")
    .map((id) => getMeasuringOutcomeSection(id));

  return (
    <Page page={measuringOutcomesPage} relatedPages>
      <JsonLd data={schemaGraph} />
      <Hero
        {...measuringOutcomesPage.hero}
        primaryCTA={measuringOutcomesPage.primaryCTA}
      />

      <Section id={inputVsOutcome.id} background="surface">
        <Stack gap="xlarge">
          <SectionHeader
            title={inputVsOutcome.title}
            description={inputVsOutcome.summary}
            headingId={`${inputVsOutcome.id}-heading`}
          />
          {measuringOutcomesPage.hero.supportingText ? (
            <Callout>{measuringOutcomesPage.hero.supportingText}</Callout>
          ) : null}
          <Grid columns={2}>
            {overviewSections.map((section) => (
              <FeatureCard
                key={section.id}
                title={section.title}
                description={section.summary}
              />
            ))}
          </Grid>
        </Stack>
      </Section>

      <Section id={operationalEvidence.id}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center">
          <Stack gap="large">
            <SectionHeader
              title={operationalEvidence.title}
              description={operationalEvidence.summary}
              headingId={`${operationalEvidence.id}-heading`}
            />
            <FeatureCard
              title={whyThisMatters.title}
              description={whyThisMatters.summary}
            />
          </Stack>
          <ImageBlock image={Images.pages.measuringOutcomes.drainage} />
        </div>
      </Section>

      <Section id={lysimeterSystem.id} background="surface">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
          <ImageBlock image={measuringOutcomesPage.hero.image} />
          <SectionHeader
            title={lysimeterSystem.title}
            description={lysimeterSystem.summary}
            headingId={`${lysimeterSystem.id}-heading`}
          />
        </div>
      </Section>

      <Section id={rootZoneMonitoring.id}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center">
          <SectionHeader
            title={rootZoneMonitoring.title}
            description={rootZoneMonitoring.summary}
            headingId={`${rootZoneMonitoring.id}-heading`}
          />
          <ImageBlock image={Images.pages.measuringOutcomes.rootZone} />
        </div>
      </Section>

      <Section id={whyThisMatters.id} background="surface">
        <SectionHeader
          title={whyThisMatters.title}
          description={whyThisMatters.summary}
          headingId={`${whyThisMatters.id}-heading`}
        />
      </Section>
    </Page>
  );
}

function getMeasuringOutcomeSection(
  id: string,
): Required<Pick<PageSection, "id" | "title" | "summary">> {
  const section = measuringOutcomesPage.sections.find((item) => item.id === id);

  if (!section?.summary) {
    throw new Error(`Missing Measuring Outcomes page section content for ${id}`);
  }

  return {
    id: section.id,
    title: section.title,
    summary: section.summary,
  };
}
