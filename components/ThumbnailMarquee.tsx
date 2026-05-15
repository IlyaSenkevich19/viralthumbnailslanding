import Image from "next/image";
import { thumbSrc } from "@/lib/thumbnail-assets";

const row1 = [1, 2, 3, 4, 5, 6, 7];
const row2 = [4, 7, 2, 5, 1, 6, 3];

const MARQUEE_WIDTH = 280;
const MARQUEE_HEIGHT = 158;
const MARQUEE_SIZES =
  "(max-width: 639px) 214px, (max-width: 1023px) 250px, 280px";

type RowProps = {
  images: number[];
  direction: "left" | "right";
  priorityLead?: boolean;
};

function Row({ images, direction, priorityLead = false }: RowProps) {
  const doubled = [...images, ...images];
  return (
    <div className="flex overflow-hidden">
      <div
        className={`marquee-row flex shrink-0 gap-4 ${
          direction === "left" ? "marquee-left" : "marquee-right"
        }`}
      >
        {doubled.map((n, i) => (
          <Image
            key={`${n}-${i}`}
            src={thumbSrc(n)}
            alt=""
            width={MARQUEE_WIDTH}
            height={MARQUEE_HEIGHT}
            sizes={MARQUEE_SIZES}
            quality={72}
            priority={priorityLead && i === 0}
            loading={priorityLead && i === 0 ? undefined : "lazy"}
            className="h-[120px] w-[214px] shrink-0 rounded-xl object-cover sm:h-[140px] sm:w-[250px] lg:h-[158px] lg:w-[280px]"
          />
        ))}
      </div>
    </div>
  );
}

export default function ThumbnailMarquee() {
  return (
    <div className="relative mt-16 overflow-hidden" aria-hidden="true">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent sm:w-40" />

      <div className="flex flex-col gap-4">
        <Row images={row1} direction="left" priorityLead />
        <div className="hidden md:block">
          <Row images={row2} direction="right" />
        </div>
      </div>
    </div>
  );
}