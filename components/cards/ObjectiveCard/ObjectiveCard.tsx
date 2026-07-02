import { CardShell } from "@/components/cards/CardShell";
import { Heading } from "@/components/ui/Heading";
import { Link } from "@/components/ui/Link";
import { Text } from "@/components/ui/Text";

interface ObjectiveCardProps {
  title: string;
  description: string;
  href?: string;
}

export function ObjectiveCard({ title, description, href }: ObjectiveCardProps) {
  return (
    <CardShell>
      <Heading level={3}>{title}</Heading>
      <Text muted className="mt-3">
        {description}
      </Text>
      {href ? (
        <div className="mt-6">
          <Link href={href}>Explore objective</Link>
        </div>
      ) : null}
    </CardShell>
  );
}
