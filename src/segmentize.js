/* @flow */

import type { BytesB } from "@capnp-js/bytes";
import type { SegmentB } from "./index";

export default function segmentize(raws: $ReadOnlyArray<BytesB>): $ReadOnlyArray<SegmentB> {
  return raws.map((raw, id) => {
    return {
      id,
      raw,
      end: raw.length,
    };
  });
}
