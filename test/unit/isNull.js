/* @flow */

import test from "ava";

import isNull from "../../src/isNull";

//TODO: I vaguely recall that some exports on capnp's index exist solely for testing.
//      This seems to be working fine without the global export so consider removing some of the surface area on index.
const segment = {
  id: 0,
  raw: new Uint8Array(72),
  end: 72,
};

segment.raw[0] = 1;
segment.raw[9] = 1;
segment.raw[18] = 1;
segment.raw[27] = 1;
segment.raw[36] = 1;
segment.raw[45] = 1;
segment.raw[54] = 1;
segment.raw[63] = 1;

test("`isNull` false", t => {
  t.plan(8);

  t.false(isNull({segment, position: 0}));
  t.false(isNull({segment, position: 8}));
  t.false(isNull({segment, position: 16}));
  t.false(isNull({segment, position: 24}));
  t.false(isNull({segment, position: 32}));
  t.false(isNull({segment, position: 40}));
  t.false(isNull({segment, position: 48}));
  t.false(isNull({segment, position: 56}));
});

test("`isNull` true", t => {
  t.true(isNull({segment, position: 64}));
});
