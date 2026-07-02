import { CardShell } from "@/components/cards/CardShell";
import { Caption } from "@/components/ui/Caption";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

interface MetricCardProps {
  label: string;
  value: string;
  description?: string;
}

export function MetricCard({ label, value, description }: MetricCardProps) {
  return (
    <CardShell>
      <Caption>{label}</Caption>
      <Heading level={3} className="mt-3">
        {value}
      </Heading>
      {description ? (
        <Text muted className="mt-3">
          {description}
        </Text>
      ) : null}
    </CardShell>
  );
}
