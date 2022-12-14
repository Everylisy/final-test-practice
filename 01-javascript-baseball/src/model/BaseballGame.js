class BaseballGame {
  constructor() {
    this.IsGameOver = false;
  }

  baseballCounter(userNum, ComputerNum) {
    let strike = 0;
    let ball = 0;
    userNum.forEach((curValue, index) => {
      if (curValue === ComputerNum[index]) strike += 1;
      else if (ComputerNum.includes(curValue)) ball += 1;
    });

    if (strike === 3) this.IsGameOver = true;

    return {
      strike: strike,
      ball: ball,
    };
  }
}

module.exports = BaseballGame;
