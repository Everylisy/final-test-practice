const Lotto = require('../Lotto');
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
  #Amount;
  #RandomNums;
  #winSplitNum;

  constructor() {
    this.#InputView = new InputView();
    this.#OutputView = new OutputView();
    this.#Validator = new InputValidator();
    this.#LottoGame = new LottoGame();
    this.#LottoRandomNum = new LottoRandomNum();
    this.#Amount;
    this.#RandomNums;
    this.#winSplitNum;
  }

  start() {
    this.#InputView.readBuyAmount(this.getLotto.bind(this));
  }

  getLotto(buyAmount) {
    this.#Validator.validateBuyAmount(buyAmount);
    this.#Amount = this.#LottoGame.getAmount(buyAmount);
    this.#RandomNums = this.#LottoRandomNum.getRandomNum(this.#Amount);
    this.#OutputView.printLotto(this.#Amount, this.#RandomNums);
    this.inputWinningNum();
  }

  inputWinningNum() {
    this.#InputView.readWinningNum(this.getWinningNum.bind(this));
  }

  getWinningNum(winningNum) {
    this.#winSplitNum = winningNum.split(',');
    const lottoNumValid = new Lotto(this.#winSplitNum);
    lottoNumValid.validate(this.#winSplitNum);
    this.inputBonusNum();
  }

  inputBonusNum() {
    this.#InputView.readBonusNum(this.getBonusNum.bind(this));
  }

  getBonusNum(bonusNum) {
    this.#Validator.validateBonusNum(bonusNum, this.#winSplitNum);
    this.getLottoResult(bonusNum);
  }

  getLottoResult(bonusNum) {
    const winStatus = this.#LottoGame.getSameNum(
      this.#RandomNums,
      this.#winSplitNum.map(Number),
      bonusNum
    );
    this.#OutputView.printWinStatus(winStatus, this.#Amount);
  }
}

module.exports = Controller;
