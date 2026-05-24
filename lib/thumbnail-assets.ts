/** Public thumbnail filenames used in hero background and marquee. */
export const THUMB_LEGACY_COUNT = 7;
export const THUMB_COUNT = 28;

export function thumbSrc(id: number): `/thumb_${number}.webp` {
  const n = ((id - 1) % THUMB_COUNT) + 1;
  return `/thumb_${n}.webp`;
}

/** Marquee row 1 — legacy originals + new generated examples. */
export const MARQUEE_ROW_LEFT = [1, 8, 3, 10, 5, 12, 7, 14, 16, 18, 20, 22, 24, 26] as const;

/** Marquee row 2 — offset mix. */
export const MARQUEE_ROW_RIGHT = [2, 9, 4, 11, 6, 13, 15, 17, 19, 21, 23, 25, 27, 28] as const;
