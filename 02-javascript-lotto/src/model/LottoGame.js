class LottoGame {
  #filteredArr;
  #bonusWin;
  #winStatus;

  constructor() {
    this.#filteredArr = [];
    this.#bonusWin = false;
    this.#winStatus = {
      winningArr: [0, 0, 0, 0, 0],
      totalReturn: 0,
    };
  }
  getAmount(buyAmount) {
    return Number(buyAmount) / 1000;
  }

  getSameNum(RandomNums, winSplitNum, bonusNum) {
    RandomNums.forEach((nums) => {
      this.#filteredArr.push(nums.filter((x) => winSplitNum.includes(x)));
      if (nums.includes(bonusNum)) this.#bonusWin = true;
    });

    this.getWinStatus();
    return this.#winStatus;
  }

  getWinStatus() {
    this.#filteredArr.forEach((nums) => {
      let arrLength = nums.length;
      if (arrLength === 3) this.statusUpdate(0, 5000);
      if (arrLength === 4) this.statusUpdate(1, 50000);
      if (arrLength === 5) this.statusUpdate(2, 1500000);
      if (arrLength === 5 && this.#bonusWin) this.statusUpdate(3, 30000000);
      if (arrLength === 6) this.statusUpdate(4, 2000000000);
    });
  }

  statusUpdate(index, money) {
    this.#winStatus.winningArr[index] += 1;
    this.#winStatus.totalReturn += money;
  }
}

module.exports = LottoGame;
