import { CardShell } from "@/components/cards/CardShell";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Link } from "@/components/ui/Link";
import { Text } from "@/components/ui/Text";

interface DocumentationCardProps {
  title: string;
  description: string;
  href: string;
  category?: string;
}

export function DocumentationCard({
  title,
  description,
  href,
  category,
}: DocumentationCardProps) {
  return (
    <CardShell>
      {category ? <Badge>{category}</Badge> : null}
      <Heading level={3} className={category ? "mt-4" : undefined}>
        {title}
      </Heading>
      <Text muted className="mt-3">
        {description}
      </Text>
      <div className="mt-6">
        <Link href={href}>Read documentation</Link>
      </div>
    </CardShell>
  );
}
