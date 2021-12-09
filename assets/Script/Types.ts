import { Color } from "cc";

export enum ROTATE {
  ZERO,
  ONE,
  TWO,
  THREE,
}

export interface BlockPositionObject {
  relativeRow: number;
  relativeColumn: number;
}

export interface BlockBaseObject {
  color: Color;
  rotate: ROTATE;
  blocksInfo: Array<BlockPositionObject>;
}

export const getBlocksCount = () => {
  return BLOCK_TYPES_TEMPLATE.length;
};

export const getBlocks = (index: number) => {
  return JSON.parse(JSON.stringify(BLOCK_TYPES_TEMPLATE[index]));
};

const BLOCK_TYPES_TEMPLATE: Array<BlockBaseObject> = [
  /**
   *    *
   *  * *
   */
  {
    color: null,
    rotate: ROTATE.ZERO,
    blocksInfo: [
      { relativeRow: 0, relativeColumn: 1 },
      { relativeRow: 0, relativeColumn: 0 },
      { relativeRow: -1, relativeColumn: 0 },
    ],
  },
  /**
   *    *
   *    *
   *  * * *
   */
  {
    color: null,
    rotate: ROTATE.ZERO,
    blocksInfo: [
      { relativeRow: -1, relativeColumn: -1 },
      { relativeRow: 0, relativeColumn: -1 },
      { relativeRow: 1, relativeColumn: -1 },
      { relativeRow: 0, relativeColumn: 0 },
      { relativeRow: 0, relativeColumn: 1 },
    ],
  },
  /**
   *    *
   */
  {
    color: null,
    rotate: ROTATE.ZERO,
    blocksInfo: [{ relativeRow: 0, relativeColumn: 0 }],
  },
  /**
   *    *
   *    *
   *    * *
   *      *
   */
  {
    color: null,
    rotate: ROTATE.ZERO,
    blocksInfo: [
      { relativeRow: 0, relativeColumn: 2 },
      { relativeRow: 0, relativeColumn: 1 },
      { relativeRow: 0, relativeColumn: 0 },
      { relativeRow: 1, relativeColumn: 0 },
      { relativeRow: 1, relativeColumn: -1 },
    ],
  },
  /**
   *    *
   *    *
   *    * *
   */
  {
    color: null,
    rotate: ROTATE.ZERO,
    blocksInfo: [
      { relativeRow: 0, relativeColumn: 1 },
      { relativeRow: 0, relativeColumn: 0 },
      { relativeRow: 0, relativeColumn: -1 },
      { relativeRow: 1, relativeColumn: -1 },
    ],
  },
  /**
   *    *
   *    *
   *    *
   *    *
   */
  {
    color: null,
    rotate: ROTATE.ZERO,
    blocksInfo: [
      { relativeRow: 0, relativeColumn: 1 },
      { relativeRow: 0, relativeColumn: 0 },
      { relativeRow: 0, relativeColumn: -1 },
      { relativeRow: 0, relativeColumn: -2 },
    ],
  },
  /**
   *  * *
   *    *
   *    * *
   */
  {
    color: null,
    rotate: ROTATE.ZERO,
    blocksInfo: [
      { relativeRow: -1, relativeColumn: 1 },
      { relativeRow: 0, relativeColumn: 1 },
      { relativeRow: 0, relativeColumn: 0 },
      { relativeRow: 0, relativeColumn: -1 },
      { relativeRow: 1, relativeColumn: -1 },
    ],
  },
  /**
   *    *
   *  * *
   *    *
   *    *
   */
  {
    color: null,
    rotate: ROTATE.ZERO,
    blocksInfo: [
      { relativeRow: 0, relativeColumn: 1 },
      { relativeRow: -1, relativeColumn: 0 },
      { relativeRow: 0, relativeColumn: 0 },
      { relativeRow: 0, relativeColumn: -1 },
      { relativeRow: 0, relativeColumn: -2 },
    ],
  },
  /**
   *    *
   *  * *
   *    *
   */
  {
    color: null,
    rotate: ROTATE.ZERO,
    blocksInfo: [
      { relativeRow: 0, relativeColumn: 1 },
      { relativeRow: -1, relativeColumn: 0 },
      { relativeRow: 0, relativeColumn: 0 },
      { relativeRow: 0, relativeColumn: -1 },
    ],
  },
  /**
   *    *
   *  * * *
   *    *
   */
  {
    color: null,
    rotate: ROTATE.ZERO,
    blocksInfo: [
      { relativeRow: 0, relativeColumn: 1 },
      { relativeRow: -1, relativeColumn: 0 },
      { relativeRow: 0, relativeColumn: 0 },
      { relativeRow: 1, relativeColumn: 0 },
      { relativeRow: 0, relativeColumn: -1 },
    ],
  },
  /**
   *  *
   *  *
   *  *
   */
  {
    color: null,
    rotate: ROTATE.ZERO,
    blocksInfo: [
      { relativeRow: 0, relativeColumn: 1 },
      { relativeRow: 0, relativeColumn: 0 },
      { relativeRow: 0, relativeColumn: -1 },
    ],
  },
  /**
   *  *
   *  *
   *  *
   *  *
   *  *
   */
  {
    color: null,
    rotate: ROTATE.ZERO,
    blocksInfo: [
      { relativeRow: 0, relativeColumn: 2 },
      { relativeRow: 0, relativeColumn: 1 },
      { relativeRow: 0, relativeColumn: 0 },
      { relativeRow: 0, relativeColumn: -1 },
      { relativeRow: 0, relativeColumn: -2 },
    ],
  },
  /**
   *  * * *
   *  *
   *  *
   */
  {
    color: null,
    rotate: ROTATE.ZERO,
    blocksInfo: [
      { relativeRow: -1, relativeColumn: 1 },
      { relativeRow: 0, relativeColumn: 1 },
      { relativeRow: 1, relativeColumn: 1 },
      { relativeRow: -1, relativeColumn: 0 },
      { relativeRow: -1, relativeColumn: -1 },
    ],
  },
  /**
   *  * *
   *  *
   *  * *
   */
  {
    color: null,
    rotate: ROTATE.ZERO,
    blocksInfo: [
      { relativeRow: 0, relativeColumn: 1 },
      { relativeRow: 1, relativeColumn: 1 },
      { relativeRow: 0, relativeColumn: 0 },
      { relativeRow: 0, relativeColumn: -1 },
      { relativeRow: 1, relativeColumn: -1 },
    ],
  },
  /**
   *  * *
   *  * * *
   *
   */
  {
    color: null,
    rotate: ROTATE.ZERO,
    blocksInfo: [
      { relativeRow: -1, relativeColumn: 1 },
      { relativeRow: 0, relativeColumn: 1 },
      { relativeRow: -1, relativeColumn: 0 },
      { relativeRow: 0, relativeColumn: 0 },
      { relativeRow: 1, relativeColumn: 0 },
    ],
  },
  /**
   *    **
   *    **
   */
  {
    color: null,
    rotate: ROTATE.ZERO,
    blocksInfo: [
      { relativeRow: 0, relativeColumn: 0 },
      { relativeRow: 0, relativeColumn: 1 },
      { relativeRow: 1, relativeColumn: 1 },
      { relativeRow: 1, relativeColumn: 0 },
    ],
  },
  /**
   *    ****
   *       *
   */
  {
    color: null,
    rotate: ROTATE.ZERO,
    blocksInfo: [
      { relativeRow: -2, relativeColumn: 0 },
      { relativeRow: -1, relativeColumn: 0 },
      { relativeRow: 0, relativeColumn: 0 },
      { relativeRow: 1, relativeColumn: 0 },
      { relativeRow: 1, relativeColumn: -1 },
    ],
  },
  /**
   *    *
   *    *
   */
  {
    color: null,
    rotate: ROTATE.ZERO,
    blocksInfo: [
      { relativeRow: 0, relativeColumn: 0 },
      { relativeRow: 0, relativeColumn: 1 },
    ],
  },
  /**
   *    * *
   *  * *
   *    *
   */
  {
    color: null,
    rotate: ROTATE.ZERO,
    blocksInfo: [
      { relativeRow: 0, relativeColumn: 1 },
      { relativeRow: 1, relativeColumn: 1 },
      { relativeRow: -1, relativeColumn: 0 },
      { relativeRow: 0, relativeColumn: 0 },
      { relativeRow: 0, relativeColumn: -1 },
    ],
  },
  /**
   *    *
   *  * *
   *  *
   */
  {
    color: null,
    rotate: ROTATE.ZERO,
    blocksInfo: [
      { relativeRow: 1, relativeColumn: 1 },
      { relativeRow: 1, relativeColumn: 0 },
      { relativeRow: 0, relativeColumn: 0 },
      { relativeRow: 0, relativeColumn: -1 },
    ],
  },
  /**
   *    * *
   *  * *
   *  *
   */
  {
    color: null,
    rotate: ROTATE.ZERO,
    blocksInfo: [
      { relativeRow: 1, relativeColumn: 0 },
      { relativeRow: 1, relativeColumn: 1 },
      { relativeRow: 0, relativeColumn: 0 },
      { relativeRow: -1, relativeColumn: 0 },
      { relativeRow: -1, relativeColumn: -1 },
    ],
  },
];
