/* @flow */

import type { SegmentR, Word } from "./index";

import { get } from "@capnp-js/bytes";

export default function isNull(ref: Word<SegmentR>): boolean {
  const bytes = ref.segment.raw;
  let i = ref.position;
  let acc = get(i, bytes); // 0
  acc |= get(++i, bytes);  // 1
  acc |= get(++i, bytes);  // 2
  acc |= get(++i, bytes);  // 3
  acc |= get(++i, bytes);  // 4
  acc |= get(++i, bytes);  // 5
  acc |= get(++i, bytes);  // 6
  acc |= get(++i, bytes);  // 7

  return !acc;
}
