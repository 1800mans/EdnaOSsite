import { CardShell } from "@/components/cards/CardShell";
import { Caption } from "@/components/ui/Caption";

interface QuoteCardProps {
  quote: string;
  attribution?: string;
}

export function QuoteCard({ quote, attribution }: QuoteCardProps) {
  return (
    <CardShell>
      <blockquote className="text-xl font-bold leading-snug text-[var(--color-text-primary)]">
        {quote}
      </blockquote>
      {attribution ? (
        <figcaption className="mt-4">
          <Caption>{attribution}</Caption>
        </figcaption>
      ) : null}
    </CardShell>
  );
}
