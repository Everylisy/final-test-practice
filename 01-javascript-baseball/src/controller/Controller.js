const BaseballGame = require('../model/BaseballGame');
const ComputerNum = require('../model/ComputerNum');
const InputValidator = require('../utils/InputValidator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class Controller {
  #ComputerNum;
  #InputView;
  #OutputView;
  #Validator;
  #RandomNum;
  #UserNum;
  #BaseBallGame;

  constructor() {
    this.#ComputerNum = new ComputerNum();
    this.#InputView = new InputView();
    this.#OutputView = new OutputView();
    this.#Validator = new InputValidator();
    this.#BaseBallGame = new BaseballGame();
    this.#RandomNum;
    this.#UserNum;
  }

  start() {
    this.#OutputView.printGameStart();
    this.startGame();
  }

  startGame() {
    this.#RandomNum = this.#ComputerNum.getComputerNum();
    console.log(this.#RandomNum);
    this.inputUserNum();
  }

  inputUserNum() {
    this.#InputView.readUserNum(this.getUserNum.bind(this));
  }

  getUserNum(userNum) {
    this.#Validator.checkUserNum(userNum);
    this.#UserNum = userNum;

    this.getGameResult();
  }

  getGameResult() {
    const gameHint = this.#BaseBallGame.baseballCounter(
      this.#UserNum.split('').map(Number),
      this.#RandomNum
    );
    this.#OutputView.printGameHint(gameHint);
    if (this.#BaseBallGame.IsGameOver === true) {
      this.gameOver();
      return;
    }
    this.inputUserNum();
  }

  gameOver() {
    this.#OutputView.printGameOver();
  }
}

module.exports = Controller;
