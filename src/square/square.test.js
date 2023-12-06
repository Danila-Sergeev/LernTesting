const square = require("./square");

describe("set square", () => {
  //перед каждым тестом
  beforeEach(() => {
    // Добавить в БД
  });
  //один раз
  beforeAll(() => {});

  test("square correct", () => {
    /* expect(square(2)).toBe(4);
    expect(square(2)).toBeLessThan(5);
    expect(square(2)).toBeGreaterThan(3);
    expect(square(2)).not.toBeUndefined(); */
    const speMathPow = jest.spyOn(Math, "pow");
    square(2);
    expect(speMathPow).toBeCalledTimes(1);
  });
  test("square correct 2", () => {
    const speMathPow = jest.spyOn(Math, "pow");
    square(1);
    expect(speMathPow).toBeCalledTimes(0);
  });

  //после каждого теста
  afterEach(() => {
    // Убрать из БД
    jest.clearAllMocks();
  });
  //один раз после тестов
  afterAll(() => {});
});
