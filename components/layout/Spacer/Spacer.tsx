type SpacerSize = 8 | 16 | 24 | 32 | 48 | 64 | 96 | 128;

interface SpacerProps {
  size?: SpacerSize;
}

const sizeClasses: Record<SpacerSize, string> = {
  8: "h-2",
  16: "h-4",
  24: "h-6",
  32: "h-8",
  48: "h-12",
  64: "h-16",
  96: "h-24",
  128: "h-32",
};

export function Spacer({ size = 32 }: SpacerProps) {
  return <div aria-hidden="true" className={sizeClasses[size]} />;
}
