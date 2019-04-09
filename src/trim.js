/* @flow */

import type { SegmentR, SegmentB } from "./index";

export function trim(segment: SegmentB): Uint8Array {
  return ((segment.raw: any): Uint8Array).subarray(0, segment.end); // eslint-disable-line flowtype/no-weak-types
}

export function unsafeTrim(segment: SegmentR): Uint8Array {
  return ((segment.raw: any): Uint8Array).subarray(0, segment.end); // eslint-disable-line flowtype/no-weak-types
}
