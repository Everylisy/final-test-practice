const { Console } = require('@woowacourse/mission-utils');

class OutputView {
  printGameStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }
}

module.exports = OutputView;
