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
import {
  journalEntryTypes,
  journalLogFormat,
  journalPage,
  journalRecordedSubjects,
} from "@/content/pages/journal";
import { createBreadcrumbs } from "@/lib/breadcrumbs";
import { Images } from "@/lib/images";
import { createNextMetadata } from "@/lib/metadata";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateImageSchema,
  generateWebPageSchema,
} from "@/lib/schema";
import type { PageSection } from "@/types/page";

export const metadata: Metadata = createNextMetadata(journalPage.metadata);

const breadcrumbs = createBreadcrumbs(journalPage.path);

const schemaGraph = [
  generateWebPageSchema({
    name: journalPage.metadata.title,
    path: journalPage.path,
    description: journalPage.metadata.description,
    image: journalPage.hero.image,
    breadcrumb: breadcrumbs,
  }),
  generateArticleSchema({
    metadata: journalPage.metadata,
    headline: journalPage.hero.title,
    articleSection: "Engineering Journal",
  }),
  generateBreadcrumbSchema(breadcrumbs),
  generateImageSchema(journalPage.hero.image),
];

export default function Journal() {
  const purpose = getJournalSection("purpose");
  const whatGetsRecorded = getJournalSection("what-gets-recorded");
  const journalEntryTypesSection = getJournalSection("journal-entry-types");
  const engineeringLogFormat = getJournalSection("engineering-log-format");
  const currentStatus = getJournalSection("current-status");

  return (
    <Page page={journalPage} relatedPages>
      <JsonLd data={schemaGraph} />
      <Hero {...journalPage.hero} primaryCTA={journalPage.primaryCTA} />

      <Section id={purpose.id} background="surface">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center">
          <Stack gap="large">
            <SectionHeader
              title={purpose.title}
              description={purpose.summary}
              headingId={`${purpose.id}-heading`}
            />
            <Callout>{whatGetsRecorded.summary}</Callout>
          </Stack>
          <ImageBlock image={Images.pages.journal.fieldNotes} />
        </div>
      </Section>

      <Section id={whatGetsRecorded.id}>
        <Stack gap="xlarge">
          <SectionHeader
            title={whatGetsRecorded.title}
            description={whatGetsRecorded.summary}
            headingId={`${whatGetsRecorded.id}-heading`}
          />
          <Grid columns={3}>
            {journalRecordedSubjects.map((subject) => (
              <FeatureCard
                key={subject.id}
                title={subject.title}
                description={subject.summary}
              />
            ))}
          </Grid>
        </Stack>
      </Section>

      <Section id={journalEntryTypesSection.id} background="surface">
        <Stack gap="xlarge">
          <SectionHeader
            title={journalEntryTypesSection.title}
            description={journalEntryTypesSection.summary}
            headingId={`${journalEntryTypesSection.id}-heading`}
          />
          <Grid columns={3}>
            {journalEntryTypes.map((entryType) => (
              <FeatureCard
                key={entryType.id}
                title={entryType.title}
                description={entryType.summary}
              />
            ))}
          </Grid>
        </Stack>
      </Section>

      <Section id={engineeringLogFormat.id}>
        <Stack gap="xlarge">
          <SectionHeader
            title={engineeringLogFormat.title}
            description={engineeringLogFormat.summary}
            headingId={`${engineeringLogFormat.id}-heading`}
          />
          <Grid columns={3}>
            {journalLogFormat.map((logStep) => (
              <FeatureCard
                key={logStep.id}
                title={logStep.title}
                description={logStep.summary}
              />
            ))}
          </Grid>
        </Stack>
      </Section>

      <Section id={currentStatus.id} background="surface">
        <SectionHeader
          title={currentStatus.title}
          description={currentStatus.summary}
          headingId={`${currentStatus.id}-heading`}
        />
      </Section>
    </Page>
  );
}

function getJournalSection(
  id: string,
): Required<Pick<PageSection, "id" | "title" | "summary">> {
  const section = journalPage.sections.find((item) => item.id === id);

  if (!section?.summary) {
    throw new Error(`Missing Engineering Journal page section content for ${id}`);
  }

  return {
    id: section.id,
    title: section.title,
    summary: section.summary,
  };
}
