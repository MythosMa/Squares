import { BlockBase } from "./Block/BlockBase";
import {
  _decorator,
  Component,
  Node,
  CCObject,
  Prefab,
  UITransform,
  instantiate,
  Vec2,
  Vec3,
  Sprite,
  Color,
} from "cc";
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = SceneScript
 * DateTime = Tue Dec 07 2021 14:21:04 GMT+0800 (中国标准时间)
 * Author = mythosma
 * FileBasename = SceneScript.ts
 * FileBasenameNoExtension = SceneScript
 * URL = db://assets/Script/SceneScript.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

interface BoardInfoObject {
  row: number;
  column: number;
  boardNode: Node;
  owner: string;
  position: Vec3;
}

@ccclass("SceneScript")
export class SceneScript extends Component {
  chessboardPadding: number = 10;
  boardLineCount: number = 14;
  boardInfo: Array<Array<BoardInfoObject>> = [];

  @property(Node)
  chessboard: Node = null;

  @property(Prefab)
  singleboardPrefab: Prefab = null;

  // [1]
  // dummy = '';

  // [2]
  // @property
  // serializableDummy = 0;

  isMove: boolean = false;
  isPlayerAOver: boolean = false;
  isPlayerBOver: boolean = false;
  isPlayerATurn: boolean = false;

  @property(Node)
  playerAPanel = null;

  @property(Node)
  playerBPanel = null;

  onLoad() {
    this.init();
  }

  start() {
    // [3]

    this.node.on(Node.EventType.TOUCH_START, this.touchDown, this);
    this.node.on(Node.EventType.MOUSE_DOWN, this.touchDown, this);

    this.changePlayerTurn();
  }

  // update (deltaTime: number) {
  //     // [4]
  // }

  init() {
    this.initChessboard();
    this.makeTestBlocks();
  }

  initChessboard() {
    for (let i = 0; i < this.boardLineCount; i++) {
      const boardInfoRow: Array<BoardInfoObject> = [];
      for (let j = 0; j < this.boardLineCount; j++) {
        const boardNode: Node = instantiate(this.singleboardPrefab);
        const nodeSize = boardNode.getComponent(UITransform).width;
        const boardNodePosition: Vec3 = new Vec3(
          (j + 0.5) * nodeSize + this.chessboardPadding,
          (i + 0.5) * nodeSize + this.chessboardPadding,
          0
        );
        boardNode.setPosition(boardNodePosition);
        boardNode.parent = this.chessboard;
        const info: BoardInfoObject = {
          row: i,
          column: j,
          boardNode: boardNode,
          owner: "",
          position: boardNodePosition,
        };
        boardInfoRow.push(info);
      }
      this.boardInfo.push(boardInfoRow);
    }
  }

  makeTestBlocks() {
    let block1 = new BlockBase(0, new Color(255, 0, 0)).getBlocksInfo();
    let origin1 = 5;

    block1.blocksInfo.forEach((item) => {
      let node =
        this.boardInfo[origin1 + item.relativeColumn][
          origin1 + item.relativeRow
        ];
      node.boardNode.getChildByName("Block").getComponent(Sprite).color =
        block1.color;
    });

    let block2 = new BlockBase(12, new Color(0, 0, 255)).getBlocksInfo();
    let origin2 = 8;

    block2.blocksInfo.forEach((item) => {
      let node =
        this.boardInfo[origin2 + item.relativeColumn][
          origin2 + item.relativeRow
        ];
      node.boardNode.getChildByName("Block").getComponent(Sprite).color =
        block2.color;
    });
  }

  touchDown() {
    console.log("touchDown==================");
    this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
    this.node.on(Node.EventType.MOUSE_UP, this.touchEnd, this);
    this.node.on(Node.EventType.MOUSE_LEAVE, this.touchEnd, this);

    this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
    this.node.on(Node.EventType.MOUSE_MOVE, this.touchMove, this);
  }

  touchMove(e) {
    console.log("touchMove==================");
    const position = e.getLocationInView();
    if (!this.isMove) {
      this.isMove = true;
    }
  }

  touchEnd() {
    console.log("touchEnd==================");
    if (this.isMove) {
      this.isMove = false;
    } else {
    }

    this.node.off(Node.EventType.TOUCH_END, this.touchEnd, this);
    this.node.off(Node.EventType.MOUSE_UP, this.touchEnd, this);
    this.node.off(Node.EventType.MOUSE_LEAVE, this.touchEnd, this);

    this.node.off(Node.EventType.TOUCH_MOVE, this.touchMove, this);
    this.node.off(Node.EventType.MOUSE_MOVE, this.touchMove, this);
  }

  changePlayerTurn() {
    this.isPlayerATurn = !this.isPlayerATurn;
    this.playerAPanel.getComponent("Player").setControl(this.isPlayerATurn);
    this.playerBPanel.getComponent("Player").setControl(!this.isPlayerATurn);
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
