const ComputerNum = require('../model/ComputerNum');

class Controller {
  #ComputerNum;

  constructor() {
    this.#ComputerNum = new ComputerNum();
  }

  start() {}
}

module.exports = Controller;
