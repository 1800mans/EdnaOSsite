import { CardShell } from "@/components/cards/CardShell";
import { Heading } from "@/components/ui/Heading";
import { Link } from "@/components/ui/Link";
import { Text } from "@/components/ui/Text";

interface ArchitectureCardProps {
  layer: string;
  description: string;
  href?: string;
  linkLabel?: string;
}

export function ArchitectureCard({
  layer,
  description,
  href,
  linkLabel = "Explore layer",
}: ArchitectureCardProps) {
  return (
    <CardShell>
      <Heading level={3}>{layer}</Heading>
      <Text muted className="mt-3">
        {description}
      </Text>
      {href ? (
        <div className="mt-6">
          <Link href={href}>{linkLabel}</Link>
        </div>
      ) : null}
    </CardShell>
  );
}
