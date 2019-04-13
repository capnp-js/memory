/* @flow */

import type { SegmentR, SegmentB } from "./index";

import { getSubarray } from "@capnp-js/bytes";

export default function trim<T: SegmentR | SegmentB>(segment: T): $PropertyType<T, "raw"> {
  return getSubarray(0, segment.end, segment.raw);
}
