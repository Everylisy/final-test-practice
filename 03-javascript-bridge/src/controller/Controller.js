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
  #movingResult;
  #tryAttempts;
  #isSuccess;

  constructor() {
    this.#bridgeWay;
    this.#userMove = [];
    this.#BridgeGame = new BridgeGame();
    this.#movingResult;
    this.#tryAttempts = 1;
    this.#isSuccess = false;
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
    this.#movingResult = this.#BridgeGame.move(
      bridgeWay,
      userMove,
      userMoveSize
    );
    OutputView.printMap(this.#movingResult);
    this.checkGameOver(this.#movingResult, bridgeSize, userMoveSize);
  }

  checkGameOver(result, bridgeSize, userMoveSize) {
    if (result.isGameOver) {
      this.inputGameCommand();
      return;
    }
    if (userMoveSize < bridgeSize) this.inputUserMoving();
    if (userMoveSize === bridgeSize) {
      this.#isSuccess = true;
      this.printGameResult();
    }
  }

  inputGameCommand() {
    InputView.readGameCommand(this.getGameCommand.bind(this));
  }

  getGameCommand(command) {
    try {
      validator.checkGameOverSelect(command);
      this.checkGameCommand(command);
    } catch {
      this.inputGameCommand();
    }
  }

  checkGameCommand(command) {
    command === 'R'
      ? (this.#BridgeGame.retry(),
        (this.#userMove = []),
        (this.#tryAttempts += 1),
        this.inputUserMoving())
      : this.printGameResult();
  }

  printGameResult() {
    OutputView.printResult(
      this.#movingResult,
      this.#isSuccess,
      this.#tryAttempts
    );
  }
}

module.exports = Controller;
