/* eslint-disable @next/next/no-img-element */

import { cn } from "@/lib/cn";
import { thumbSrc } from "@/lib/thumbnail-assets";

type FloatingThumb = {
  top: string;
  left: string;
  w: number;
  h: number;
  img: number;
  rot: number;
  op: number;
  dur: number;
  del: number;
  desktopOnly?: boolean;
};

const thumbs: FloatingThumb[] = [
  { top: "3%", left: "4%", w: 156, h: 88, img: 1, rot: -6, op: 0.2, dur: 28, del: 0 },
  { top: "10%", left: "80%", w: 140, h: 79, img: 2, rot: 4, op: 0.22, dur: 32, del: 4 },
  { top: "35%", left: "1%", w: 120, h: 68, img: 3, rot: -3, op: 0.18, dur: 26, del: 8 },
  { top: "55%", left: "86%", w: 148, h: 83, img: 4, rot: 5, op: 0.2, dur: 30, del: 2 },
  { top: "72%", left: "8%", w: 132, h: 74, img: 5, rot: -4, op: 0.19, dur: 34, del: 6 },
  { top: "18%", left: "44%", w: 100, h: 56, img: 6, rot: 2, op: 0.15, dur: 27, del: 10, desktopOnly: true },
  { top: "58%", left: "54%", w: 112, h: 63, img: 7, rot: -5, op: 0.18, dur: 29, del: 3 },
  { top: "82%", left: "68%", w: 136, h: 77, img: 1, rot: 3, op: 0.2, dur: 31, del: 7, desktopOnly: true },
  { top: "42%", left: "24%", w: 96, h: 54, img: 3, rot: -2, op: 0.15, dur: 33, del: 5, desktopOnly: true },
  { top: "6%", left: "34%", w: 144, h: 81, img: 5, rot: 6, op: 0.19, dur: 25, del: 9, desktopOnly: true },
  { top: "28%", left: "70%", w: 116, h: 65, img: 2, rot: -4, op: 0.18, dur: 28, del: 1 },
  { top: "68%", left: "38%", w: 124, h: 70, img: 6, rot: 3, op: 0.19, dur: 35, del: 11, desktopOnly: true },
  { top: "14%", left: "14%", w: 110, h: 62, img: 4, rot: -5, op: 0.17, dur: 30, del: 12, desktopOnly: true },
  { top: "24%", left: "56%", w: 128, h: 72, img: 7, rot: 4, op: 0.18, dur: 27, del: 13, desktopOnly: true },
  { top: "46%", left: "73%", w: 102, h: 58, img: 1, rot: -3, op: 0.16, dur: 29, del: 14, desktopOnly: true },
  { top: "63%", left: "18%", w: 118, h: 66, img: 2, rot: 5, op: 0.17, dur: 32, del: 15, desktopOnly: true },
  { top: "78%", left: "49%", w: 108, h: 61, img: 5, rot: -2, op: 0.16, dur: 31, del: 16, desktopOnly: true },
  { top: "40%", left: "90%", w: 98, h: 56, img: 3, rot: 6, op: 0.15, dur: 33, del: 17, desktopOnly: true },
];

export default function ThumbnailBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block"
      aria-hidden="true"
    >
      {thumbs.map((t, i) => (
        <div
          key={i}
          className={cn(
            "floating-thumb absolute overflow-hidden rounded-xl",
            t.desktopOnly && "hidden lg:block",
          )}
          style={{
            top: t.top,
            left: t.left,
            width: t.w,
            height: t.h,
            rotate: `${t.rot}deg`,
            opacity: t.op,
            filter: "blur(1.5px)",
            animation: `float-${(i % 3) + 1} ${t.dur}s ease-in-out infinite`,
            animationDelay: `${t.del}s`,
          }}
        >
          <img
            src={thumbSrc(t.img)}
            alt=""
            width={t.w}
            height={t.h}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
