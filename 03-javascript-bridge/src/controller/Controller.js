const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const validator = require('../utils/validator');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../model/BridgeRandomNumberGenerator');
const BridgeGame = require('../model/BridgeGame');

class Controller {
  #bridgeWay;
  #userMove;
  #BridgeGame;

  constructor() {
    this.#bridgeWay;
    this.#userMove = [];
    this.#BridgeGame = new BridgeGame();
  }

  start() {
    OutputView.printGameStart();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize(this.getBridgeSize.bind(this));
  }

  getBridgeSize(size) {
    const sizeNum = Number(size);
    try {
      validator.checkBridgeSizeInput(sizeNum);
      this.#bridgeWay = BridgeMaker.makeBridge(
        sizeNum,
        BridgeRandomNumberGenerator.generate
      );
      console.log(this.#bridgeWay);
      this.inputUserMoving();
    } catch {
      this.inputBridgeSize();
    }
  }

  inputUserMoving() {
    InputView.readMoving(this.getUserMoving.bind(this));
  }

  getUserMoving(move) {
    try {
      validator.checkUserMovingInput(move);
      this.#userMove.push(move);
      this.getMovingResult(this.#bridgeWay, this.#userMove);
    } catch {
      this.inputUserMoving();
    }
  }

  getMovingResult(bridgeWay, userMove) {
    const [bridgeSize, userMoveSize] = [bridgeWay.length, userMove.length];
    const movingResult = this.#BridgeGame.move(
      bridgeWay,
      userMove,
      userMoveSize
    );
    OutputView.printMap(movingResult);
    this.checkGameOver(movingResult, bridgeSize, userMoveSize);
  }

  checkGameOver(result, bridgeSize, userMoveSize) {
    if (result.isGameOver) {
      return;
    }
    if (userMoveSize < bridgeSize) this.inputUserMoving();
    if (userMoveSize === bridgeSize) return;
  }
}

module.exports = Controller;
