const { Console } = require('@woowacourse/mission-utils');

class InputView {
  readBuyAmount(callback) {
    Console.readLine('구입금액을 입력해 주세요.\n', callback);
  }
}

module.exports = InputView;
