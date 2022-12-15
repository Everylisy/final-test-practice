const { Console } = require('@woowacourse/mission-utils');

class OutputView {
  printLotto(amount, randomNums) {
    Console.print(`\n${amount}개를 구매했습니다.`);

    randomNums.forEach((nums) => {
      Console.print(`[${nums.join(', ')}]`);
    });
  }
}

module.exports = OutputView;
