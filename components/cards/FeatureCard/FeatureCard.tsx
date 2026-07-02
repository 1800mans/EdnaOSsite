import { CardShell } from "@/components/cards/CardShell";
import { Heading } from "@/components/ui/Heading";
import { Link } from "@/components/ui/Link";
import { Text } from "@/components/ui/Text";

interface FeatureCardProps {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
}

export function FeatureCard({ title, description, href, linkLabel }: FeatureCardProps) {
  return (
    <CardShell>
      <Heading level={3}>{title}</Heading>
      <Text muted className="mt-3">
        {description}
      </Text>
      {href && linkLabel ? (
        <div className="mt-6">
          <Link href={href}>{linkLabel}</Link>
        </div>
      ) : null}
    </CardShell>
  );
}
