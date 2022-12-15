const { Console } = require('@woowacourse/mission-utils');

class OutputView {
  printLotto(amount, randomNums) {
    Console.print(`\n${amount}개를 구매했습니다.`);

    randomNums.forEach((nums) => {
      Console.print(`[${nums.join(', ')}]`);
    });
  }

  printWinStatus(winStatus, amount) {
    const totalReturn = (winStatus.totalReturn / amount / 10).toFixed(1);
    console.log(totalReturn);
    Console.print(
      `\n당첨 통계
---
3개 일치 (5,000원) - ${winStatus.winningArr[0]}개
4개 일치 (50,000원) - ${winStatus.winningArr[1]}개
5개 일치 (1,500,000원) - ${winStatus.winningArr[2]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${winStatus.winningArr[3]}개
6개 일치 (2,000,000,000원) - ${winStatus.winningArr[4]}개
총 수익률은 ${Number(totalReturn).toLocaleString()}%입니다.`
    );
    Console.close();
  }
}

module.exports = OutputView;
