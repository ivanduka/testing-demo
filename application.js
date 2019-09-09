function AddOnlyIfPositive(a, b) {
  if (a < 0 || b < 0) {
    return null;
  }

  const sum = a + b;
  return sum;
}

module.exports = { AddOnlyIfPositive };
