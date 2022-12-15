const InputValidator = require('../utils/InputValidator');
const InputView = require('../view/InputView');

class Controller {
  #InputView;
  #Validator;

  constructor() {
    this.#InputView = new InputView();
    this.#Validator = new InputValidator();
  }

  start() {
    this.#InputView.readBuyAmount(this.getLotto.bind(this));
  }

  getLotto(buyAmount) {
    this.#Validator.validateBuyAmount(buyAmount);
  }
}

module.exports = Controller;
