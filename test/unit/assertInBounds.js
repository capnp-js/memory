/* @flow */

import * as assert from "assert";
import { describe, it } from "mocha";

import { SegmentRangeError, assertInBounds } from "../../src/assertInBounds";

const segment = { id: 0, raw: new Uint8Array(16), end: 16 };

describe("assertInBounds", function () {
  it("doesn't throw for in bounds ranges", function () {
    assert.doesNotThrow(() => {
      const left = {
        segment,
        position: 0,
      };
      assertInBounds(left, 16);
    });
  });

  it("throws for out of bounds ranges", function () {
    assert.throws(() => {
      const left = {
        segment,
        position: 8,
      };
      assertInBounds(left, 9);
    }, SegmentRangeError);
  });
});
