/** Public thumbnail filenames used in hero background and marquee. */
export const THUMB_COUNT = 7;

export function thumbSrc(id: number): `/thumb_${number}.webp` {
  const n = ((id - 1) % THUMB_COUNT) + 1;
  return `/thumb_${n}.webp`;
}
