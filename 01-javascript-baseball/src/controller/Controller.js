const ComputerNum = require('../model/ComputerNum');
const InputValidator = require('../utils/InputValidator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class Controller {
  #ComputerNum;
  #InputView;
  #OutputView;
  #RandomNum;
  #Validator;

  constructor() {
    this.#ComputerNum = new ComputerNum();
    this.#InputView = new InputView();
    this.#OutputView = new OutputView();
    this.#RandomNum;
    this.#Validator = new InputValidator();
  }

  start() {
    this.#OutputView.printGameStart();
    this.startGame();
  }

  startGame() {
    this.#RandomNum = this.#ComputerNum.getComputerNum();
    this.#InputView.readUserNum(this.getUserNum.bind(this));
  }

  getUserNum(userNum) {
    this.#Validator.checkUserNum(userNum);
  }
}

module.exports = Controller;
