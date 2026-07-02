import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

interface PageHeaderProps {
  path: string;
  title: string;
  description: string;
  eyebrow?: string;
}

export function PageHeader({ path, title, description, eyebrow }: PageHeaderProps) {
  return (
    <header className="max-w-[760px] py-12">
      <Breadcrumb path={path} className="mb-8" />
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Heading level={1} className={eyebrow ? "mt-3" : undefined}>
        {title}
      </Heading>
      <Text size="large" muted className="mt-4">
        {description}
      </Text>
    </header>
  );
}
