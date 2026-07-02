import { FeatureCard } from "@/components/cards/FeatureCard";
import { Grid } from "@/components/layout/Grid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { pages } from "@/content/pages";
import type { ContentPage } from "@/types/page";

interface RelatedPagesProps {
  page: ContentPage;
  title?: string;
}

export function RelatedPages({ page, title = "Related Topics" }: RelatedPagesProps) {
  const related = page.relatedPages.map((slug) => pages[slug]);

  if (related.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="related-pages-heading">
      <SectionHeader title={title} headingId="related-pages-heading" />
      <Grid className="mt-8">
        {related.map((relatedPage) => (
          <FeatureCard
            key={relatedPage.path}
            title={relatedPage.metadata.title}
            description={relatedPage.purpose}
            href={relatedPage.path}
            linkLabel="Open topic"
          />
        ))}
      </Grid>
    </section>
  );
}
