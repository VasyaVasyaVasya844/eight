const smallestDivisor = (num) => {
  if (num === 1) {
    return 1;
  }

  const findDivisor = (num, divisor) => {
    if (num % divisor === 0) {
      return divisor;
    }
    return findDivisor(num, divisor + 1);
  };

  return findDivisor(num, 2);
};

export default smallestDivisor;
