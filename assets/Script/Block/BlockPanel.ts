import { BlockBase } from "./BlockBase";
import {
  _decorator,
  Component,
  Node,
  Prefab,
  instantiate,
  Vec3,
  UITransform,
  Sprite,
  Color,
} from "cc";
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = BlockPanel
 * DateTime = Thu Dec 09 2021 15:29:45 GMT+0800 (中国标准时间)
 * Author = mythosma
 * FileBasename = BlockPanel.ts
 * FileBasenameNoExtension = BlockPanel
 * URL = db://assets/Script/Block/BlockPanel.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

@ccclass("BlockPanel")
export class BlockPanel extends Component {
  // [1]
  // dummy = '';

  // [2]
  // @property
  // serializableDummy = 0;

  @property(Prefab)
  bloackPanelBoardPrefab: Prefab = null;

  blocks: BlockBase = null;
  blockPanelBoards: Array<Array<Node>> = [];
  padding: number = 1;
  count = 5;

  isMove: boolean = false;
  originLocation: Vec3 = null;

  start() {
    // [3]
    this.node.on(Node.EventType.TOUCH_START, this.touchDown, this);
    this.node.on(Node.EventType.MOUSE_DOWN, this.touchDown, this);
  }

  // update (deltaTime: number) {
  //     // [4]
  // }

  init(blocks: BlockBase) {
    this.blocks = blocks;
    for (let i = 0; i < this.count; i++) {
      const boardInfoRow: Array<Node> = [];
      for (let j = 0; j < this.count; j++) {
        const boardNode: Node = instantiate(this.bloackPanelBoardPrefab);
        const nodeSize = boardNode.getComponent(UITransform).width;
        const boardNodePosition: Vec3 = new Vec3(
          (j + 0.5) * nodeSize + this.padding,
          (i + 0.5) * nodeSize + this.padding,
          0
        );
        boardNode.setPosition(boardNodePosition);
        boardNode.parent = this.node;
        boardInfoRow.push(boardNode);
      }
      this.blockPanelBoards.push(boardInfoRow);
    }
    this.renderBlock();
  }

  renderBlock() {
    for (let i = 0; i < this.blockPanelBoards.length; i++) {
      for (let j = 0; j < this.blockPanelBoards[i].length; j++) {
        const node = this.blockPanelBoards[i][j].getChildByName("ColorBoard");
        node.getComponent(Sprite).color = new Color(0, 0, 0, 0);
      }
    }

    const centerIndex = Math.floor(this.count / 2);
    for (let i = 0; i < this.blocks.getBlocksInfo().blocksInfo.length; i++) {
      const info = this.blocks.getBlocksInfo().blocksInfo[i];
      const renderPanel =
        this.blockPanelBoards[info.relativeColumn + centerIndex][
          info.relativeRow + centerIndex
        ].getChildByName("ColorBoard");
      renderPanel.getComponent(Sprite).color =
        this.blocks.getBlocksInfo().color;
    }
  }

  touchDown() {
    this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
    this.node.on(Node.EventType.MOUSE_UP, this.touchEnd, this);
    this.node.on(Node.EventType.MOUSE_LEAVE, this.touchEnd, this);

    this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
    this.node.on(Node.EventType.MOUSE_MOVE, this.touchMove, this);

    this.originLocation = this.node.getPosition();
  }

  touchMove(e) {
    console.log("touchMove===================");
    console.log(e.getLocationInView());
    console.log("touchMove===================");
    if(!this.isMove){
        this.isMove = true;
        this.node.setScale(new Vec3(2, 2, 2));
    }
  }

  touchEnd() {
    console.log("touchEnd===================");
    if (this.isMove) {
        this.node.setScale(new Vec3(1, 1, 1));
    } else {
      this.blocks.rotateBlock();
      this.renderBlock();
    }

    this.isMove = false;

    this.node.off(Node.EventType.TOUCH_END, this.touchEnd, this);
    this.node.off(Node.EventType.MOUSE_UP, this.touchEnd, this);
    this.node.off(Node.EventType.MOUSE_LEAVE, this.touchEnd, this);

    this.node.off(Node.EventType.TOUCH_MOVE, this.touchMove, this);
    this.node.off(Node.EventType.MOUSE_MOVE, this.touchMove, this);
  }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/zh/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/zh/scripting/life-cycle-callbacks.html
 */
