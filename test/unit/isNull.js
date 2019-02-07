/* @flow */

import * as assert from "assert";
import { describe, it } from "mocha";

import isNull from "../../src/isNull";

//TODO: I vaguely recall that some exports on capnp's index exist solely for testing.
//      This seems to be working fine without the global export so consider removing some of the surface area on index.
const segment = { id: 0, raw: new Uint8Array(72), end: 72 };

describe("isNull", function () {
  segment.raw[0] = 1;
  segment.raw[9] = 1;
  segment.raw[18] = 1;
  segment.raw[27] = 1;
  segment.raw[36] = 1;
  segment.raw[45] = 1;
  segment.raw[54] = 1;
  segment.raw[63] = 1;

  it("reports zero pointers as null", function () {
    assert.ok(!isNull({segment, position: 0}));
    assert.ok(!isNull({segment, position: 8}));
    assert.ok(!isNull({segment, position: 16}));
    assert.ok(!isNull({segment, position: 24}));
    assert.ok(!isNull({segment, position: 32}));
    assert.ok(!isNull({segment, position: 40}));
    assert.ok(!isNull({segment, position: 48}));
    assert.ok(!isNull({segment, position: 56}));
  });

  it("reports non-zero pointers as non-null", function () {
    assert.ok(isNull({segment, position: 64}));
  });
});
