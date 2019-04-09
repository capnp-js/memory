/* @flow */

import type { BytesR, BytesB } from "@capnp-js/bytes";

type uint = number;
type i32 = number;
type u32 = number;

export type Byte<+S> = {
  +segment: S,
  +position: uint,
};

export type Word<+S> = {
  +segment: S,
  +position: uint,
};

export type Pointer<+S> = {
  +typeBits: 0x00 | 0x01 | 0x03,
  +hi: i32,
  +object: Word<S>,
};

export interface SegmentLookup<+S> {
  +segments: $ReadOnlyArray<S>;
  segment(id: u32): S;
}

export type SegmentR = {
  +id: u32,
  +raw: BytesR,
  +end: uint,
};

export type SegmentB = {
  +id: u32,
  +raw: BytesB,
  end: uint,
};

export { SegmentRangeError, assertInBounds } from "./assertInBounds";
export { default as isNull } from "./isNull";
export { default as root } from "./root";
export { default as segmentize } from "./segmentize";
export { trim, unsafeTrim } from "./trim";
