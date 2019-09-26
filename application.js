const AddOnlyIfPositive = (a, b) => (a < 0 || b < 0 ? null : a + b);

module.exports = { AddOnlyIfPositive };
