/* eslint-disable @next/next/no-img-element */

import { thumbSrc } from "@/lib/thumbnail-assets";

const row1Desktop = [1, 2, 3, 4, 5, 6, 7];
const row2 = [4, 7, 2, 5, 1, 6, 3];
const transparentPixel =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='158' viewBox='0 0 280 158'%3E%3C/svg%3E";

type RowProps = {
  images: number[];
  direction: "left" | "right";
};

function MarqueeRow({ images, direction }: RowProps) {
  const doubled = [...images, ...images];
  return (
    <div className="flex overflow-hidden">
      <div
        className={`marquee-row flex shrink-0 gap-4 ${
          direction === "left" ? "marquee-left" : "marquee-right"
        }`}
      >
        {doubled.map((n, i) => (
          <picture key={`${n}-${i}`} className="shrink-0">
            <source media="(min-width: 768px)" srcSet={thumbSrc(n)} />
            <img
              src={transparentPixel}
              alt=""
              width={280}
              height={158}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="h-[120px] w-[214px] shrink-0 rounded-xl object-cover sm:h-[140px] sm:w-[250px] lg:h-[158px] lg:w-[280px]"
            />
          </picture>
        ))}
      </div>
    </div>
  );
}

export default function ThumbnailMarquee() {
  return (
    <div
      className="relative mt-16 overflow-hidden"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent sm:w-40" />

      <div className="hidden flex-col gap-4 md:flex">
        <MarqueeRow images={row1Desktop} direction="left" />
        <MarqueeRow images={row2} direction="right" />
      </div>
    </div>
  );
}
