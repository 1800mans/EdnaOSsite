import type { Metadata } from "next";

import { ArchitectureCard } from "@/components/cards/ArchitectureCard";
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
import { architecturePage } from "@/content/pages";
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

export const metadata: Metadata = createNextMetadata(architecturePage.metadata);

const breadcrumbs = createBreadcrumbs(architecturePage.path);

const schemaGraph = [
  generateWebPageSchema({
    name: architecturePage.metadata.title,
    path: architecturePage.path,
    description: architecturePage.metadata.description,
    image: architecturePage.hero.image,
    breadcrumb: breadcrumbs,
  }),
  generateTechArticleSchema({
    metadata: architecturePage.metadata,
    headline: architecturePage.hero.title,
  }),
  generateBreadcrumbSchema(breadcrumbs),
  generateImageSchema(architecturePage.hero.image),
];

const layerSectionIds = [
  "plc-layer",
  "edge-layer",
  "cloud-layer",
  "decision-layer",
] as const;

export default function Architecture() {
  const engineeringProblem = getArchitectureSection("engineering-problem");
  const distributedArchitecture = getArchitectureSection("why-distributed-architecture");
  const plcLayer = getArchitectureSection("plc-layer");
  const edgeLayer = getArchitectureSection("edge-layer");
  const cloudLayer = getArchitectureSection("cloud-layer");
  const decisionLayer = getArchitectureSection("decision-layer");
  const failSafeEngineering = getArchitectureSection("fail-safe-engineering");
  const layers = layerSectionIds.map((id) => getArchitectureSection(id));

  return (
    <Page page={architecturePage} relatedPages>
      <JsonLd data={schemaGraph} />
      <Hero {...architecturePage.hero} primaryCTA={architecturePage.primaryCTA} />

      <Section id={engineeringProblem.id} background="surface">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center">
          <Stack gap="large">
            <SectionHeader
              title={engineeringProblem.title}
              description={engineeringProblem.summary}
              headingId={`${engineeringProblem.id}-heading`}
            />
            <Callout>{distributedArchitecture.summary}</Callout>
          </Stack>
          <ImageBlock image={Images.pages.architecture.pumpstation} />
        </div>
      </Section>

      <Section id={distributedArchitecture.id}>
        <Stack gap="xlarge">
          <SectionHeader
            title={distributedArchitecture.title}
            description={distributedArchitecture.summary}
            headingId={`${distributedArchitecture.id}-heading`}
          />
          <Grid columns={2}>
            {layers.map((layer) => (
              <ArchitectureCard
                key={layer.id}
                layer={layer.title}
                description={layer.summary}
              />
            ))}
          </Grid>
        </Stack>
      </Section>

      <Section id={plcLayer.id} background="surface">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
          <ImageBlock image={Images.pages.architecture.plc} />
          <SectionHeader
            title={plcLayer.title}
            description={plcLayer.summary}
            headingId={`${plcLayer.id}-heading`}
          />
        </div>
      </Section>

      <Section id={edgeLayer.id}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center">
          <SectionHeader
            title={edgeLayer.title}
            description={edgeLayer.summary}
            headingId={`${edgeLayer.id}-heading`}
          />
          <ImageBlock image={Images.pages.architecture.vfd} />
        </div>
      </Section>

      <Section id={cloudLayer.id} background="surface">
        <Stack gap="xlarge">
          <SectionHeader
            title={cloudLayer.title}
            description={cloudLayer.summary}
            headingId={`${cloudLayer.id}-heading`}
          />
          <FeatureCard title={decisionLayer.title} description={decisionLayer.summary} />
        </Stack>
      </Section>

      <Section id={decisionLayer.id}>
        <SectionHeader
          title={decisionLayer.title}
          description={decisionLayer.summary}
          headingId={`${decisionLayer.id}-heading`}
        />
      </Section>

      <Section id={failSafeEngineering.id} background="surface">
        <Stack gap="large">
          <SectionHeader
            title={failSafeEngineering.title}
            description={failSafeEngineering.summary}
            headingId={`${failSafeEngineering.id}-heading`}
          />
          <Callout>{failSafeEngineering.summary}</Callout>
        </Stack>
      </Section>
    </Page>
  );
}

function getArchitectureSection(
  id: string,
): Required<Pick<PageSection, "id" | "title" | "summary">> {
  const section = architecturePage.sections.find((item) => item.id === id);

  if (!section?.summary) {
    throw new Error(`Missing Architecture page section content for ${id}`);
  }

  return {
    id: section.id,
    title: section.title,
    summary: section.summary,
  };
}
