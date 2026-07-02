import { Container } from "@/components/layout/Container";
import { Stack } from "@/components/layout/Stack";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { ImageBlock } from "@/components/ui/ImageBlock";
import { Link } from "@/components/ui/Link";
import { Text } from "@/components/ui/Text";
import type { CTA, HeroContent } from "@/types/page";

interface HeroProps extends HeroContent {
  primaryCTA?: CTA;
  secondaryCTA?: CTA;
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  description,
  image,
  primaryCTA,
  secondaryCTA,
  supportingText,
}: HeroProps) {
  return (
    <section className="bg-[var(--color-background)] py-12 sm:py-16 lg:py-20">
      <Container width="site">
        <div className="grid min-h-[40vh] items-center gap-8 lg:min-h-[70vh] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <Stack gap="large">
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            <div>
              <Heading level={1}>{title}</Heading>
              {subtitle ? (
                <Text size="large" className="mt-4 text-[var(--color-text-primary)]">
                  {subtitle}
                </Text>
              ) : null}
            </div>
            <Text size="large" muted>
              {description}
            </Text>
            {primaryCTA || secondaryCTA ? (
              <div className="flex flex-col gap-3 sm:flex-row">
                {primaryCTA ? (
                  <Link href={primaryCTA.href} variant="primary">
                    {primaryCTA.label}
                  </Link>
                ) : null}
                {secondaryCTA ? (
                  <Link href={secondaryCTA.href} variant="secondary">
                    {secondaryCTA.label}
                  </Link>
                ) : null}
              </div>
            ) : null}
            {supportingText ? (
              <Text size="small" muted>
                {supportingText}
              </Text>
            ) : null}
          </Stack>
          <ImageBlock
            image={image}
            priority
            className="aspect-[16/9] lg:min-h-[520px]"
            sizes="(min-width: 1024px) 55vw, 100vw"
          />
        </div>
      </Container>
    </section>
  );
}
