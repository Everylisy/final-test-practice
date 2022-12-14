const ComputerNum = require('../model/ComputerNum');
const OutputView = require('../view/OutputView');

class Controller {
  #ComputerNum;
  #OutputView;
  #RandomNum;

  constructor() {
    this.#ComputerNum = new ComputerNum();
    this.#OutputView = new OutputView();
    this.#RandomNum;
  }

  start() {
    this.#OutputView.printGameStart();
    this.startGame();
  }

  startGame() {
    this.#RandomNum = this.#ComputerNum.getComputerNum();
    console.log(this.#RandomNum);
  }
}

module.exports = Controller;
