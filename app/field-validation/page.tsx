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
import { fieldValidationPage } from "@/content/pages";
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

export const metadata: Metadata = createNextMetadata(fieldValidationPage.metadata);

const breadcrumbs = createBreadcrumbs(fieldValidationPage.path);

const schemaGraph = [
  generateWebPageSchema({
    name: fieldValidationPage.metadata.title,
    path: fieldValidationPage.path,
    description: fieldValidationPage.metadata.description,
    image: fieldValidationPage.hero.image,
    breadcrumb: breadcrumbs,
  }),
  generateTechArticleSchema({
    metadata: fieldValidationPage.metadata,
    headline: fieldValidationPage.hero.title,
  }),
  generateBreadcrumbSchema(breadcrumbs),
  generateImageSchema(fieldValidationPage.hero.image),
];

export default function FieldValidation() {
  const pilotOrchard = getFieldValidationSection("pilot-orchard");
  const operationalConstraints = getFieldValidationSection("operational-constraints");
  const infrastructure = getFieldValidationSection("infrastructure");
  const engineeringValidation = getFieldValidationSection("engineering-validation");
  const currentStatus = getFieldValidationSection("current-status");

  return (
    <Page page={fieldValidationPage} relatedPages>
      <JsonLd data={schemaGraph} />
      <Hero {...fieldValidationPage.hero} primaryCTA={fieldValidationPage.primaryCTA} />

      <Section id={pilotOrchard.id} background="surface">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center">
          <Stack gap="large">
            <SectionHeader
              title={pilotOrchard.title}
              description={pilotOrchard.summary}
              headingId={`${pilotOrchard.id}-heading`}
            />
            <Callout>{operationalConstraints.summary}</Callout>
          </Stack>
          <ImageBlock image={Images.pages.fieldValidation.pumpstation} />
        </div>
      </Section>

      <Section id={operationalConstraints.id}>
        <SectionHeader
          title={operationalConstraints.title}
          description={operationalConstraints.summary}
          headingId={`${operationalConstraints.id}-heading`}
        />
      </Section>

      <Section id={infrastructure.id} background="surface">
        <Stack gap="xlarge">
          <SectionHeader
            title={infrastructure.title}
            description={infrastructure.summary}
            headingId={`${infrastructure.id}-heading`}
          />
          <Grid columns={2}>
            <FeatureCard title={pilotOrchard.title} description={pilotOrchard.summary} />
            <FeatureCard
              title={engineeringValidation.title}
              description={engineeringValidation.summary}
            />
          </Grid>
          <div className="grid gap-8 lg:grid-cols-2">
            <ImageBlock image={Images.pages.fieldValidation.reservoir} />
            <ImageBlock image={Images.pages.fieldValidation.irrigation} />
          </div>
        </Stack>
      </Section>

      <Section id={engineeringValidation.id}>
        <SectionHeader
          title={engineeringValidation.title}
          description={engineeringValidation.summary}
          headingId={`${engineeringValidation.id}-heading`}
        />
      </Section>

      <Section id={currentStatus.id} background="surface">
        <Stack gap="large">
          <SectionHeader
            title={currentStatus.title}
            description={currentStatus.summary}
            headingId={`${currentStatus.id}-heading`}
          />
          <Callout>{currentStatus.summary}</Callout>
        </Stack>
      </Section>
    </Page>
  );
}

function getFieldValidationSection(
  id: string,
): Required<Pick<PageSection, "id" | "title" | "summary">> {
  const section = fieldValidationPage.sections.find((item) => item.id === id);

  if (!section?.summary) {
    throw new Error(`Missing Field Validation page section content for ${id}`);
  }

  return {
    id: section.id,
    title: section.title,
    summary: section.summary,
  };
}
