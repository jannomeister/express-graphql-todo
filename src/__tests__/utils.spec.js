const { incrementDay } = require("../config/utils");

describe("Utils", () => {
  it("should increment by day", () => {
    const date = new Date();

    const result = incrementDay(date.toISOString());

    const expected = new Date(date.setDate(date.getDate() + 1));

    expect(result.toISOString()).toEqual(expected.toISOString());
  });
});
