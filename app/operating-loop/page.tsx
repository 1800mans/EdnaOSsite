import type { Metadata } from "next";

import { Page } from "@/components/layout/Page";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/shared";
import { Callout } from "@/components/ui/Callout";
import { ImageBlock } from "@/components/ui/ImageBlock";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { operatingLoopPage } from "@/content/pages";
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

export const metadata: Metadata = createNextMetadata(operatingLoopPage.metadata);

const breadcrumbs = createBreadcrumbs(operatingLoopPage.path);

const schemaGraph = [
  generateWebPageSchema({
    name: operatingLoopPage.metadata.title,
    path: operatingLoopPage.path,
    description: operatingLoopPage.metadata.description,
    image: operatingLoopPage.hero.image,
    breadcrumb: breadcrumbs,
  }),
  generateTechArticleSchema({
    metadata: operatingLoopPage.metadata,
    headline: operatingLoopPage.hero.title,
  }),
  generateBreadcrumbSchema(breadcrumbs),
  generateImageSchema(operatingLoopPage.hero.image),
];

export default function OperatingLoop() {
  const observe = getOperatingLoopSection("observe");
  const operate = getOperatingLoopSection("operate");
  const measure = getOperatingLoopSection("measure");
  const record = getOperatingLoopSection("record");
  const learn = getOperatingLoopSection("learn");
  const improve = getOperatingLoopSection("improve");
  const philosophy = getOperatingLoopSection("operating-philosophy");

  return (
    <Page page={operatingLoopPage} relatedPages>
      <JsonLd data={schemaGraph} />
      <Hero {...operatingLoopPage.hero} primaryCTA={operatingLoopPage.primaryCTA} />

      <Section id={observe.id} background="surface">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center">
          <Stack gap="large">
            <SectionHeader
              title={observe.title}
              description={observe.summary}
              headingId={`${observe.id}-heading`}
            />
            {operatingLoopPage.hero.supportingText ? (
              <Callout>{operatingLoopPage.hero.supportingText}</Callout>
            ) : null}
          </Stack>
          <ImageBlock image={Images.pages.operatingLoop.process} />
        </div>
      </Section>

      <Section id={operate.id} background="surface">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
          <ImageBlock image={operatingLoopPage.hero.image} />
          <SectionHeader
            title={operate.title}
            description={operate.summary}
            headingId={`${operate.id}-heading`}
          />
        </div>
      </Section>

      <Section id={measure.id}>
        <SectionHeader
          title={measure.title}
          description={measure.summary}
          headingId={`${measure.id}-heading`}
        />
      </Section>

      <Section id={record.id} background="surface">
        <SectionHeader
          title={record.title}
          description={record.summary}
          headingId={`${record.id}-heading`}
        />
      </Section>

      <Section id={learn.id}>
        <SectionHeader
          title={learn.title}
          description={learn.summary}
          headingId={`${learn.id}-heading`}
        />
      </Section>

      <Section id={improve.id} background="surface">
        <SectionHeader
          title={improve.title}
          description={improve.summary}
          headingId={`${improve.id}-heading`}
        />
      </Section>

      <Section id={philosophy.id}>
        <Callout title={philosophy.title}>{philosophy.summary}</Callout>
      </Section>
    </Page>
  );
}

function getOperatingLoopSection(
  id: string,
): Required<Pick<PageSection, "id" | "title" | "summary">> {
  const section = operatingLoopPage.sections.find((item) => item.id === id);

  if (!section?.summary) {
    throw new Error(`Missing Operating Loop page section content for ${id}`);
  }

  return {
    id: section.id,
    title: section.title,
    summary: section.summary,
  };
}
