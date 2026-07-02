import { Badge } from "@/components/ui/Badge";

interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps) {
  return <Badge>{label}</Badge>;
}
