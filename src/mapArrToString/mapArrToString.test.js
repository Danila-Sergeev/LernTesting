const mapArrToString = require("./mapArrToString");

describe("mapArrToString", () => {
  test("mapArrToString correct", () => {
    expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
  test("mapArrToString mix correct", () => {
    expect(mapArrToString([1, 2, 3, null, undefined, "dfd"])).toEqual([
      "1",
      "2",
      "3",
    ]);
  });
  test("mapArrToString empty", () => {
    expect(mapArrToString([])).toEqual([]);
  });
  test("mapArrToString uncorrect", () => {
    expect(mapArrToString([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });
});
