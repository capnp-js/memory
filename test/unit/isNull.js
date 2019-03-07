/* @flow */

import * as assert from "assert";
import { describe, it } from "mocha";
import { create, set } from "@capnp-js/bytes";

import isNull from "../../src/isNull";

//TODO: I vaguely recall that some exports on capnp's index exist solely for testing.
//      This seems to be working fine without the global export so consider removing some of the surface area on index.
const segment = { id: 0, raw: create(72), end: 72 };

describe("isNull", function () {
  set(1, 0, segment.raw);
  set(1, 9, segment.raw);
  set(1, 18, segment.raw);
  set(1, 27, segment.raw);
  set(1, 36, segment.raw);
  set(1, 45, segment.raw);
  set(1, 54, segment.raw);
  set(1, 63, segment.raw);

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
