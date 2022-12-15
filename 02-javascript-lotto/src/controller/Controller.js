const LottoGame = require('../model/LottoGame');
const LottoRandomNum = require('../model/LottoRandomNum');
const InputValidator = require('../utils/InputValidator');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class Controller {
  #InputView;
  #OutputView;
  #Validator;
  #LottoGame;
  #LottoRandomNum;
  #RandomNums;

  constructor() {
    this.#InputView = new InputView();
    this.#OutputView = new OutputView();
    this.#Validator = new InputValidator();
    this.#LottoGame = new LottoGame();
    this.#LottoRandomNum = new LottoRandomNum();
    this.#RandomNums;
  }

  start() {
    this.#InputView.readBuyAmount(this.getLotto.bind(this));
  }

  getLotto(buyAmount) {
    this.#Validator.validateBuyAmount(buyAmount);
    const amount = this.#LottoGame.getAmount(buyAmount);
    this.#RandomNums = this.#LottoRandomNum.getRandomNum(amount);
    this.#OutputView.printLotto(amount, this.#RandomNums);
  }
}

module.exports = Controller;
