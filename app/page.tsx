import type { Metadata } from "next";

import { ArchitectureCard } from "@/components/cards/ArchitectureCard";
import { FeatureCard } from "@/components/cards/FeatureCard";
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
import { homePage, pages } from "@/content/pages";
import { Images } from "@/lib/images";
import { createNextMetadata } from "@/lib/metadata";
import {
  generateOrganizationSchema,
  generateWebPageSchema,
  generateWebsiteSchema,
} from "@/lib/schema";
import type { PageSection } from "@/types/page";

export const metadata: Metadata = createNextMetadata(homePage.metadata);

const schemaGraph = [
  generateOrganizationSchema(),
  generateWebsiteSchema(),
  generateWebPageSchema({
    name: homePage.metadata.title,
    path: homePage.path,
    description: homePage.metadata.description,
    image: homePage.hero.image,
  }),
];

const objectivePreviewSlugs = [
  "objectives",
  "operatingLoop",
  "measuringOutcomes",
] as const;

const architecturePreviewSlugs = ["architecture", "deployment", "documentation"] as const;

export default function Home() {
  const manifesto = getHomeSection("engineering-manifesto");
  const orchardNeed = getHomeSection("why-commercial-orchards-need-more");
  const orchardOperatingSystem = getHomeSection("what-is-orchard-operating-system");
  const objectives = getHomeSection("engineering-objectives");
  const operatingLoop = getHomeSection("operating-loop-preview");
  const measuringOutcomes = getHomeSection("measuring-outcomes-preview");
  const architecture = getHomeSection("architecture-preview");
  const deployment = getHomeSection("deployment-preview");
  const journal = getHomeSection("engineering-journal-preview");
  const about = getHomeSection("about-preview");

  return (
    <Page page={homePage} relatedPages>
      <JsonLd data={schemaGraph} />
      <Hero
        {...homePage.hero}
        primaryCTA={homePage.primaryCTA}
        secondaryCTA={homePage.secondaryCTA}
      />

      <Section id={manifesto.id} background="surface">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:items-center">
          <Stack gap="large">
            <SectionHeader
              title={manifesto.title}
              description={manifesto.summary}
              headingId={`${manifesto.id}-heading`}
            />
            {homePage.hero.supportingText ? (
              <Callout>{homePage.hero.supportingText}</Callout>
            ) : null}
          </Stack>
          <ImageBlock image={Images.pages.home.manifesto} />
        </div>
      </Section>

      <Section id={orchardNeed.id}>
        <Stack gap="xlarge">
          <SectionHeader
            title={orchardNeed.title}
            description={orchardNeed.summary}
            headingId={`${orchardNeed.id}-heading`}
          />
          <Grid>
            <FeatureCard
              title={orchardOperatingSystem.title}
              description={orchardOperatingSystem.summary}
              href={homePage.secondaryCTA?.href}
              linkLabel={homePage.secondaryCTA?.label}
            />
            <ObjectiveCard
              title={objectives.title}
              description={objectives.summary}
              href={pages.objectives.path}
            />
            <FeatureCard
              title={operatingLoop.title}
              description={operatingLoop.summary}
              href={pages.operatingLoop.path}
              linkLabel={pages.operatingLoop.primaryCTA.label}
            />
          </Grid>
        </Stack>
      </Section>

      <Section id={objectives.id} background="surface">
        <Stack gap="xlarge">
          <SectionHeader
            title={objectives.title}
            description={objectives.summary}
            headingId={`${objectives.id}-heading`}
          />
          <Grid>
            {objectivePreviewSlugs.map((slug) => (
              <FeatureCard
                key={pages[slug].path}
                title={pages[slug].hero.title}
                description={pages[slug].purpose}
                href={pages[slug].path}
                linkLabel={pages[slug].primaryCTA.label}
              />
            ))}
          </Grid>
        </Stack>
      </Section>

      <Section id={measuringOutcomes.id}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center">
          <Stack gap="large">
            <SectionHeader
              title={measuringOutcomes.title}
              description={measuringOutcomes.summary}
              headingId={`${measuringOutcomes.id}-heading`}
            />
            <FeatureCard
              title={operatingLoop.title}
              description={operatingLoop.summary}
              href={pages.operatingLoop.path}
              linkLabel={pages.operatingLoop.primaryCTA.label}
            />
          </Stack>
          <ImageBlock image={pages.measuringOutcomes.hero.image} />
        </div>
      </Section>

      <Section id={architecture.id} background="surface">
        <Stack gap="xlarge">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:items-center">
            <SectionHeader
              title={architecture.title}
              description={architecture.summary}
              headingId={`${architecture.id}-heading`}
            />
            <ImageBlock image={Images.pages.home.architecturePreview} />
          </div>
          <Grid>
            {architecturePreviewSlugs.map((slug) => (
              <ArchitectureCard
                key={pages[slug].path}
                layer={pages[slug].hero.title}
                description={pages[slug].purpose}
                href={pages[slug].path}
              />
            ))}
          </Grid>
        </Stack>
      </Section>

      <Section id={deployment.id}>
        <Grid>
          <FeatureCard
            title={deployment.title}
            description={deployment.summary}
            href={pages.deployment.path}
            linkLabel={pages.deployment.primaryCTA.label}
          />
          <FeatureCard
            title={journal.title}
            description={journal.summary}
            href={pages.journal.path}
            linkLabel={pages.journal.primaryCTA.label}
          />
          <FeatureCard
            title={about.title}
            description={about.summary}
            href={pages.about.path}
            linkLabel={pages.about.primaryCTA.label}
          />
        </Grid>
      </Section>
    </Page>
  );
}

function getHomeSection(
  id: string,
): Required<Pick<PageSection, "id" | "title" | "summary">> {
  const section = homePage.sections.find((item) => item.id === id);

  if (!section?.summary) {
    throw new Error(`Missing Home page section content for ${id}`);
  }

  return {
    id: section.id,
    title: section.title,
    summary: section.summary,
  };
}
