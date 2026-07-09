import type { Metadata } from "next";

import { Page } from "@/components/layout/Page";
import { Section } from "@/components/layout/Section";
import { Stack } from "@/components/layout/Stack";
import { Link } from "@/components/ui/Link";

export const metadata: Metadata = {
  title: "Page Not Found | EDNA OS",
  description:
    "The requested EDNA OS page does not exist, may have moved, or is no longer available.",
  alternates: {
    canonical: "/404",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <Page>
      <Section background="surface">
        <Stack gap="large" className="max-w-[760px]">
          <h1 className="text-4xl font-bold leading-tight text-[var(--color-text-primary)] md:text-5xl">
            Page Not Found
          </h1>
          <p className="text-lg leading-8 text-[var(--color-text-secondary)]">
            The page you requested does not exist, may have moved, or is no longer
            available.
          </p>
          <p className="text-lg leading-8 text-[var(--color-text-secondary)]">
            Return to the EDNA OS homepage to continue exploring the Orchard Operating
            System.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" variant="primary">
              Return Home
            </Link>
            <Link href="/journal" variant="secondary">
              Engineering Journal
            </Link>
          </div>
        </Stack>
      </Section>
    </Page>
  );
}
