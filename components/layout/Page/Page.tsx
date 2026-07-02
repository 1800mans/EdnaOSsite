import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { RelatedPages } from "@/components/layout/RelatedPages";
import { Section } from "@/components/layout/Section";
import { Navigation } from "@/components/navigation/Navigation";
import type { ContentPage } from "@/types/page";

interface PageProps {
  children: ReactNode;
  page?: ContentPage;
  relatedPages?: boolean;
}

export function Page({ children, page, relatedPages = false }: PageProps) {
  return (
    <>
      <Navigation currentPath={page?.path} />
      <main id="main-content">
        {children}
        {page && relatedPages ? (
          <Section background="surface">
            <RelatedPages page={page} />
          </Section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
