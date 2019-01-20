/* @flow */

import type { SegmentLookup, SegmentR, Word } from "./index";

export default function root<S: SegmentR>(segments: SegmentLookup<S>): Word<S> {
  return {
    segment: segments.segment(0),
    position: 0,
  };
}
