import { Color } from "cc";
import { BlockBaseObject, BlockPositionObject, ROTATE, getBlocks } from "../Types";

export class BlockBase {
  block: BlockBaseObject = null;

  constructor(blocksTypeIndex: number, color: Color) {
    this.block = { ...getBlocks(blocksTypeIndex), color };
  }

  rotateBlock() {
    this.block.rotate = (this.block.rotate + 1) % 4;
  }

  getBlocksInfo() {
    return {
      ...this.block,
      blocksInfo: this.block.blocksInfo.map((block: BlockPositionObject) => {
        switch (this.block.rotate) {
          case ROTATE.ZERO:
            return {
              relativeRow: block.relativeRow,
              relativeColumn: block.relativeColumn,
            };
          case ROTATE.ONE:
            return {
              relativeRow: -block.relativeColumn,
              relativeColumn: block.relativeRow,
            };
          case ROTATE.TWO:
            return {
              relativeRow: -block.relativeRow,
              relativeColumn: -block.relativeColumn,
            };
          case ROTATE.THREE:
            return {
              relativeRow: block.relativeColumn,
              relativeColumn: -block.relativeRow,
            };
        }
      }),
    };
  }
}
