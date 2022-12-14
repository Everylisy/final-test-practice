class InputValidator {
  checkUserNum(input) {
    if (
      this.checkNumLength(input) &&
      this.checkIsNum(input) &&
      this.checkNumOverlap(input)
    )
      return;
    throw new Error('입력한 숫자가 올바르지 않습니다.');
  }

  checkUserSelect(input) {
    let userSelect = input.trim();
    const checkNumLength = userSelect.length === 1;
    const checkIsOneorTwo = /^[1-2]*$/g.test(userSelect);

    if (checkNumLength && checkIsOneorTwo) return;
    throw new Error('입력한 숫자가 올바르지 않습니다.');
  }

  checkNumLength(input) {
    return input.length === 3;
  }

  checkIsNum(input) {
    return /^[0-9]*$/g.test(input);
  }

  checkNumOverlap(input) {
    const SET = new Set(input);
    const UNIQUE_ELEMENTS = [...SET];

    return UNIQUE_ELEMENTS.length === 3;
  }
}

module.exports = InputValidator;
