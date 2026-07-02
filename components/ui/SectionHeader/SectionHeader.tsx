import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

interface SectionHeaderProps {
  title: string;
  eyebrow?: string;
  description?: string;
  headingId?: string;
}

export function SectionHeader({
  title,
  eyebrow,
  description,
  headingId,
}: SectionHeaderProps) {
  return (
    <header className="max-w-[760px]">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Heading id={headingId} level={2} className={eyebrow ? "mt-3" : undefined}>
        {title}
      </Heading>
      {description ? (
        <Text size="large" muted className="mt-4">
          {description}
        </Text>
      ) : null}
    </header>
  );
}
