import { getBlocks, getBlocksCount } from "../Types";
import { BlockBase } from "../Block/BlockBase";
import {
  _decorator,
  Component,
  Node,
  Vec3,
  Color,
  Prefab,
  instantiate,
  UITransform,
} from "cc";
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Player
 * DateTime = Thu Dec 09 2021 16:01:01 GMT+0800 (中国标准时间)
 * Author = mythosma
 * FileBasename = Player.ts
 * FileBasenameNoExtension = Player
 * URL = db://assets/Script/PlayerPanel/Player.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

@ccclass("Player")
export class Player extends Component {
  // [1]
  // dummy = '';

  // [2]
  // @property
  // serializableDummy = 0;

  @property(Prefab)
  blockPanelPrefab = null;

  @property
  playerName: string = "";

  startBlocksCount = getBlocksCount();

  @property(Color)
  playerColor: Color = null;

  blockPanelMargin: number = 30;

  blocks: Array<Node> = [];


  start() {
    // [3]
    this.init();
  }

  // update (deltaTime: number) {
  //     // [4]
  // }
  init() {
    for (let i = 0; i < this.startBlocksCount; i++) {
      const boardNode = instantiate(this.blockPanelPrefab);
      const nodeSize = boardNode.getComponent(UITransform).width;
      boardNode
        .getComponent("BlockPanel")
        .init(new BlockBase(i, this.playerColor));
      boardNode.parent = this.node;

      const boardNodePosition: Vec3 = new Vec3(
        ((i % 7) + 0.2) * (this.blockPanelMargin + nodeSize),
        (Math.floor(i / 7) + 0.2) * (this.blockPanelMargin + nodeSize),
        0
      );
      boardNode.setPosition(boardNodePosition);
      this.blocks.push(boardNode);
    }
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
