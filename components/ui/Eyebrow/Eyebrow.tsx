import { Label } from "@/components/ui/Label";

interface EyebrowProps {
  children: string;
}

export function Eyebrow({ children }: EyebrowProps) {
  return <Label>{children}</Label>;
}
