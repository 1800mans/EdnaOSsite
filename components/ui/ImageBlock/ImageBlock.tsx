import Image from "next/image";

import { cx } from "@/lib/helpers";
import type { ImageReference } from "@/types/images";

interface ImageBlockProps {
  image: ImageReference;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export function ImageBlock({
  image,
  priority = false,
  className,
  sizes = "(min-width: 1200px) 1200px, 100vw",
}: ImageBlockProps) {
  return (
    <div className={cx("relative overflow-hidden rounded-[16px] bg-white", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        priority={priority}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
