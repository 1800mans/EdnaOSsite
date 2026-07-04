import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FeatureCard } from "@/components/cards/FeatureCard";
import { Grid } from "@/components/layout/Grid";
import { Page } from "@/components/layout/Page";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { JsonLd } from "@/components/shared";
import { Callout } from "@/components/ui/Callout";
import { Heading } from "@/components/ui/Heading";
import { ImageBlock } from "@/components/ui/ImageBlock";
import { Tag } from "@/components/ui/Tag";
import { Text } from "@/components/ui/Text";
import { c4Diagrams } from "@/content/c4/diagrams";
import { journalCharts } from "@/content/charts/journalCharts";
import { ontologyEntities } from "@/content/ontology/entities";
import { journalPage } from "@/content/pages";
import { pages } from "@/content/pages";
import { createJournalRecordMetadata } from "@/lib/journal/journalMetadata";
import { generateJournalRecordSchema } from "@/lib/journal/journalSchema";
import {
  getPublishedJournalRecordBySlug,
  getPublishedJournalRecords,
  getRelatedJournalRecords,
} from "@/lib/journal/getJournalRecords";
import { createNextMetadata } from "@/lib/metadata";
import {
  generateBreadcrumbSchema,
  generateImageSchema,
  generateWebPageSchema,
} from "@/lib/schema";
import type { EngineeringJournalRecord } from "@/content/journal";
import type { BreadcrumbItem } from "@/types/schema";

interface JournalRecordPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getPublishedJournalRecords().map((record) => ({
    slug: record.slug,
  }));
}

export async function generateMetadata({
  params,
}: JournalRecordPageProps): Promise<Metadata> {
  const { slug } = await params;
  const record = getPublishedJournalRecordBySlug(slug);

  if (!record) {
    return {};
  }

  return createNextMetadata(createJournalRecordMetadata(record));
}

export default async function JournalRecordPage({ params }: JournalRecordPageProps) {
  const { slug } = await params;
  const record = getPublishedJournalRecordBySlug(slug);

  if (!record) {
    notFound();
  }

  const metadata = createJournalRecordMetadata(record);
  const breadcrumbs = createRecordBreadcrumbs(record);
  const relatedRecords = getRelatedJournalRecords(record);
  const primaryImage = record.images[0];
  const schemaGraph = [
    generateWebPageSchema({
      name: metadata.title,
      path: metadata.path,
      description: metadata.description,
      image: primaryImage,
      breadcrumb: breadcrumbs,
    }),
    generateJournalRecordSchema({ record, metadata }),
    generateBreadcrumbSchema(breadcrumbs),
    ...(primaryImage ? [generateImageSchema(primaryImage)] : []),
  ];

  return (
    <Page page={journalPage}>
      <JsonLd data={schemaGraph} />

      <article>
        <Section background="surface">
          <Stack gap="xlarge">
            <header className="max-w-[760px]">
              <Text size="small" muted>
                {formatRecordDate(record.datePublished)} · {record.recordType}
              </Text>
              <Heading level={1} className="mt-4">
                {record.title}
              </Heading>
              <Text size="large" muted className="mt-5">
                {record.description}
              </Text>
              <div className="mt-6 flex flex-wrap gap-2" aria-label="Record tags">
                {record.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </header>
            {primaryImage ? <ImageBlock image={primaryImage} priority /> : null}
            <Callout title="Record Summary">{record.summary}</Callout>
          </Stack>
        </Section>

        {record.sections.map((section, index) => (
          <Section
            key={section.id}
            id={section.id}
            background={index % 2 === 0 ? "default" : "surface"}
          >
            <Stack gap="large">
              <header className="max-w-[760px]">
                <Heading level={2} id={`${section.id}-heading`}>
                  {section.title}
                </Heading>
                {section.summary ? (
                  <Text size="large" muted className="mt-4">
                    {section.summary}
                  </Text>
                ) : null}
              </header>
              <Stack gap="medium">
                {section.body.map((paragraph) => (
                  <Text key={paragraph} muted>
                    {paragraph}
                  </Text>
                ))}
              </Stack>
            </Stack>
          </Section>
        ))}

        <Section id="entities" background="surface">
          <Stack gap="xlarge">
            <Heading level={2}>Ontology References</Heading>
            <Grid columns={3}>
              {record.entities.map((entityKey) => {
                const entity = ontologyEntities[entityKey];

                return (
                  <FeatureCard
                    key={entity.id}
                    title={entity.name}
                    description={entity.description}
                  />
                );
              })}
            </Grid>
          </Stack>
        </Section>

        <Section id="c4-diagrams">
          <Stack gap="xlarge">
            <Heading level={2}>C4 Diagram References</Heading>
            {record.c4Diagrams.map((diagramKey) => {
              const diagram = c4Diagrams[diagramKey];

              return (
                <section key={diagram.id} aria-labelledby={`${diagram.id}-heading`}>
                  <Heading level={3} id={`${diagram.id}-heading`}>
                    {diagram.title}
                  </Heading>
                  <Text muted className="mt-3">
                    {diagram.description}
                  </Text>
                  <pre className="mt-5 overflow-x-auto rounded-[18px] border border-[var(--color-border)] bg-white p-5 text-sm leading-6 text-[var(--color-text-primary)]">
                    {formatC4Diagram(diagram)}
                  </pre>
                </section>
              );
            })}
          </Stack>
        </Section>

        <Section id="charts" background="surface">
          <Stack gap="xlarge">
            <Heading level={2}>Chart References</Heading>
            {record.charts.map((chartKey) => {
              const chart = journalCharts[chartKey];

              return (
                <section key={chart.id} aria-labelledby={`${chart.id}-heading`}>
                  <Heading level={3} id={`${chart.id}-heading`}>
                    {chart.title}
                  </Heading>
                  <Text muted className="mt-3">
                    {chart.description}
                  </Text>
                  <div className="mt-5 overflow-x-auto">
                    <table className="w-full border-collapse bg-white text-left text-sm">
                      <caption className="sr-only">{chart.title}</caption>
                      <thead>
                        <tr>
                          {chart.columns.map((column) => (
                            <th
                              key={column}
                              scope="col"
                              className="border border-[var(--color-border)] p-3 font-bold"
                            >
                              {column}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {chart.rows.map((row) => (
                          <tr key={row.join("|")}>
                            {row.map((cell) => (
                              <td
                                key={cell}
                                className="border border-[var(--color-border)] p-3 text-[var(--color-text-secondary)]"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <Text size="small" muted className="mt-3">
                    Source: {chart.source}
                  </Text>
                </section>
              );
            })}
          </Stack>
        </Section>

        <Section id="related-links">
          <Stack gap="xlarge">
            <Heading level={2}>Related Internal Links</Heading>
            <Grid columns={2}>
              {record.relatedPages.map((pageSlug) => {
                const relatedPage = pages[pageSlug];

                return (
                  <FeatureCard
                    key={relatedPage.path}
                    title={relatedPage.metadata.title.replace(" | EDNA OS", "")}
                    description={relatedPage.purpose}
                    href={relatedPage.path}
                    linkLabel={`Open ${relatedPage.metadata.title.replace(" | EDNA OS", "")}`}
                  />
                );
              })}
            </Grid>
          </Stack>
        </Section>

        <Section id="related-records" background="surface">
          <Stack gap="large">
            <Heading level={2}>Related Records</Heading>
            {relatedRecords.length > 0 ? (
              <Grid columns={2}>
                {relatedRecords.map((relatedRecord) => (
                  <FeatureCard
                    key={relatedRecord.slug}
                    title={relatedRecord.title}
                    description={relatedRecord.summary}
                    href={`/journal/${relatedRecord.slug}`}
                    linkLabel={`Open ${relatedRecord.title}`}
                  />
                ))}
              </Grid>
            ) : (
              <Text muted>No related engineering records have been published yet.</Text>
            )}
          </Stack>
        </Section>

        <Section id="google-cnl">
          <Callout title="Google Cloud Natural Language Preparation">
            {record.googleCnl?.notes ??
              "Entity enrichment is prepared for offline processing before commit."}
          </Callout>
        </Section>
      </article>
    </Page>
  );
}

function createRecordBreadcrumbs(record: EngineeringJournalRecord): BreadcrumbItem[] {
  return [
    { name: "Home", path: "/" },
    { name: "Engineering Journal", path: "/journal" },
    { name: record.title, path: `/journal/${record.slug}` },
  ];
}

function formatRecordDate(value: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00.000Z`));
}

function formatC4Diagram(diagram: {
  level: string;
  elements: string[];
  relationships: string[];
}): string {
  return [
    `Level: ${diagram.level}`,
    "",
    "Elements:",
    ...diagram.elements.map((element) => `- ${element}`),
    "",
    "Relationships:",
    ...diagram.relationships.map((relationship) => `- ${relationship}`),
  ].join("\n");
}
