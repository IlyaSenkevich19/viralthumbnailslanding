/** Public thumbnail filenames used in hero background and marquee. */
export const THUMB_COUNT = 21;

export function thumbSrc(id: number): `/thumb_${number}.webp` {
  const n = ((id - 1) % THUMB_COUNT) + 1;
  return `/thumb_${n}.webp`;
}

/** Marquee row 1 — diverse generated examples. */
export const MARQUEE_ROW_LEFT = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21] as const;

/** Marquee row 2 — offset mix. */
export const MARQUEE_ROW_RIGHT = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] as const;

