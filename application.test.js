const { AddOnlyIfPositive } = require("./application");

describe("Testing AddOnlyIfPositive", () => {
  test("Sums properly", () => {
    const actual = AddOnlyIfPositive(3, 2);
    const expected = 5;
    expect(actual).toEqual(expected);
  });

  test("Returns null if any of arguments is negative", () => {
    expect(AddOnlyIfPositive(-3, 2)).toEqual(null);
    expect(AddOnlyIfPositive(3, -2)).toEqual(null);
    expect(AddOnlyIfPositive(-3, -2)).toEqual(null);
  });
});
