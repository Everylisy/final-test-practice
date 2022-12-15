class InputValidator {
  validateBuyAmount(input) {
    const inputNum = Number(input);
    if (
      this.checkIsNum(inputNum) &&
      this.checkThousand(inputNum) &&
      this.checkUnit(inputNum)
    )
      return;
    throw new Error('[ERROR] 입력한 구입 금액이 올바르지 않습니다.');
  }

  checkIsNum(input) {
    return /^[0-9]*$/g.test(input);
  }

  checkThousand(input) {
    return input >= 1000;
  }

  checkUnit(input) {
    return input % 1000 === 0;
  }
}

module.exports = InputValidator;
