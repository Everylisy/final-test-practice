const { Console } = require('@woowacourse/mission-utils');

class InputView {
  readUserNum(callback) {
    Console.readLine('숫자를 입력해주세요 : ', callback);
  }
}

module.exports = InputView;
