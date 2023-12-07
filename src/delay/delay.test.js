const delay = require("./delay");

describe("set delay", () => {
  //перед каждым тестом
  beforeEach(() => {
    // Добавить в БД
  });
  //один раз
  beforeAll(() => {});

  test("delay correct", async () => {
    const sum = await delay(() => 5 + 6, 1000);
    expect(sum).toBe(11);
  });

  //после каждого теста
  afterEach(() => {
    // Убрать из БД
    jest.clearAllMocks();
  });
  //один раз после тестов
  afterAll(() => {});
});
