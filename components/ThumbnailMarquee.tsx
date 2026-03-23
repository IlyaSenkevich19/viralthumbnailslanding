/* eslint-disable @next/next/no-img-element */

const row1 = [1, 2, 3, 4, 5, 6, 7];
const row2 = [4, 7, 2, 5, 1, 6, 3];

function Row({
  images,
  direction,
}: {
  images: number[];
  direction: "left" | "right";
}) {
  const doubled = [...images, ...images];
  return (
    <div className="flex overflow-hidden">
      <div
        className={`marquee-row flex shrink-0 gap-4 ${
          direction === "left" ? "marquee-left" : "marquee-right"
        }`}
      >
        {doubled.map((n, i) => (
          <img
            key={i}
            src={`/thumb_${n}.jpg`}
            alt=""
            width={280}
            height={158}
            loading="lazy"
            decoding="async"
            className="h-[120px] w-[214px] flex-shrink-0 rounded-xl object-cover sm:h-[140px] sm:w-[250px] lg:h-[158px] lg:w-[280px]"
          />
        ))}
      </div>
    </div>
  );
}

export default function ThumbnailMarquee() {
  return (
    <div className="relative mt-16 overflow-hidden" aria-hidden="true">
      {/* Fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent sm:w-40" />

      <div className="flex flex-col gap-4">
        <Row images={row1} direction="left" />
        <Row images={row2} direction="right" />
      </div>
    </div>
  );
}
