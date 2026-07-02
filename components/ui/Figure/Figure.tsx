import { Caption } from "@/components/ui/Caption";
import { ImageBlock } from "@/components/ui/ImageBlock";
import type { ImageReference } from "@/types/images";

interface FigureProps {
  image: ImageReference;
  caption?: string;
}

export function Figure({ image, caption }: FigureProps) {
  return (
    <figure>
      <ImageBlock image={image} />
      {caption ? (
        <figcaption className="mt-3">
          <Caption>{caption}</Caption>
        </figcaption>
      ) : null}
    </figure>
  );
}
