/* @flow */

import type { SegmentR, Word } from "./index";

type uint = number;

export class SegmentRangeError extends Error {
  +valid: {
    +begin: 0,
    +end: uint,
  };
  +invalid: {
    +begin: uint,
    +end: uint,
  };

  constructor(valid: { +begin: 0, +end: uint }, invalid: { +begin: uint, end: uint }) {
    super();
    this.valid = valid;
    this.invalid = invalid;
  }
}

export function assertInBounds(left: Word<SegmentR>, bytes: uint): void {
  const end = left.position + bytes;
  if (end > left.segment.end) {
    const valid = {
      begin: 0,
      end: left.segment.end,
    };

    const invalid = {
      begin: left.position,
      end,
    };

    throw new SegmentRangeError(valid, invalid);
  }
}
