const { Random } = require('@woowacourse/mission-utils');

class LottoRandomNum {
  getRandomNum(amount) {
    const randomNums = [];
    let count = 0;
    while (count < amount) {
      randomNums.push(
        Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)
      );
      count++;
    }

    return randomNums;
  }
}

module.exports = LottoRandomNum;
