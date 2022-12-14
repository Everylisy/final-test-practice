class BaseballGame {
  baseballCounter(userNum, ComputerNum) {
    let strike = 0;
    let ball = 0;
    userNum.forEach((curValue, index) => {
      if (curValue === ComputerNum[index]) strike += 1;
      else if (ComputerNum.includes(curValue)) ball += 1;
    });

    return {
      strike: strike,
      ball: ball,
    };
  }
}

module.exports = BaseballGame;
