import { CardShell } from "@/components/cards/CardShell";
import { Caption } from "@/components/ui/Caption";
import { Heading } from "@/components/ui/Heading";
import { Link } from "@/components/ui/Link";
import { Text } from "@/components/ui/Text";

interface JournalCardProps {
  title: string;
  summary: string;
  href: string;
  publishedAt?: string;
}

export function JournalCard({ title, summary, href, publishedAt }: JournalCardProps) {
  return (
    <CardShell>
      {publishedAt ? <Caption>{publishedAt}</Caption> : null}
      <Heading level={3} className={publishedAt ? "mt-3" : undefined}>
        {title}
      </Heading>
      <Text muted className="mt-3">
        {summary}
      </Text>
      <div className="mt-6">
        <Link href={href}>Continue reading</Link>
      </div>
    </CardShell>
  );
}
