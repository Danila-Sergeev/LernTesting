const validateValue = require("./validateValue");

describe("set validate value", () => {
  test("validate value correct", () => {
    expect(validateValue(50)).toBe(true);
  });
  test("validate value up", () => {
    expect(validateValue(120)).toBe(false);
  });
  test("validate value less", () => {
    expect(validateValue(-1)).toBe(false);
  });
  test("border validate value up", () => {
    expect(validateValue(100)).toBe(true);
  });
  test("border validate value less", () => {
    expect(validateValue(0)).toBe(true);
  });
});
