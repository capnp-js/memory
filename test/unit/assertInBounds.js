/* @flow */

import test from "ava";

import { SegmentRangeError, assertInBounds } from "../../src/assertInBounds";

const segment = {
  id: 0,
  raw: new Uint8Array(16),
  end: 16,
};

test("`assertInBounds`", t => {
  t.plan(2);

  t.notThrows(() => {
    const left = {
      segment,
      position: 0,
    };
    assertInBounds(left, 16);
  });

  t.throws(() => {
    const left = {
      segment,
      position: 8,
    };
    assertInBounds(left, 9);
  }, SegmentRangeError);
});
