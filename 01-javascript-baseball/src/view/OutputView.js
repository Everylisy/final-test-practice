const { Console } = require('@woowacourse/mission-utils');

class OutputView {
  printGameStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  printGameOver() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }

  printGameHint(gameHint) {
    let { ball: ball, strike: strike } = gameHint;
    this.checkGameHint(ball, strike);
  }

  checkGameHint(ball, strike) {
    let hintArr = [];
    if (ball === 0 && strike === 0) Console.print('낫싱');
    if (ball > 0) hintArr.push(`${ball}볼`);
    if (strike > 0) hintArr.push(`${strike}스트라이크`);

    Console.print(hintArr.join(' '));
  }
}

module.exports = OutputView;
