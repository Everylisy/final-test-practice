class BridgeGame {
  #moveResultArr;
  #upResultArr;
  #downResultArr;
  #isGameOver;

  constructor() {
    this.#moveResultArr = [];
    this.#upResultArr = [];
    this.#downResultArr = [];
    this.#isGameOver = false;
  }

  move(bridgeWay, userMove, userMoveSize) {
    let countIndex = userMoveSize - 1;
    this.checkMoveCorrect(bridgeWay, userMove, countIndex);
    this.checkUpOrDown(userMove, countIndex, this.#moveResultArr[countIndex]);
    return {
      upResultArr: this.#upResultArr,
      downResultArr: this.#downResultArr,
      isGameOver: this.#isGameOver,
    };
  }

  checkMoveCorrect(bridgeWay, userMove, countIndex) {
    bridgeWay[countIndex] === userMove[countIndex]
      ? this.#moveResultArr.push('O')
      : (this.#moveResultArr.push('X'), (this.#isGameOver = true));
  }

  checkUpOrDown(userMove, countIndex, moveResult) {
    userMove[countIndex] === 'U'
      ? (this.#upResultArr.push(moveResult), this.#downResultArr.push(' '))
      : (this.#downResultArr.push(moveResult), this.#upResultArr.push(' '));
  }

  retry() {
    this.#moveResultArr = [];
    this.#upResultArr = [];
    this.#downResultArr = [];
    this.#isGameOver = false;
  }
}

module.exports = BridgeGame;
