/* @flow */

import type { SegmentR, Word } from "./index";

export default function isNull(ref: Word<SegmentR>): boolean {
  const bytes = ref.segment.raw;
  let i = ref.position;
  let acc = bytes[i]; // 0
  acc |= bytes[++i];  // 1
  acc |= bytes[++i];  // 2
  acc |= bytes[++i];  // 3
  acc |= bytes[++i];  // 4
  acc |= bytes[++i];  // 5
  acc |= bytes[++i];  // 6
  acc |= bytes[++i];  // 7

  return !acc;
}
