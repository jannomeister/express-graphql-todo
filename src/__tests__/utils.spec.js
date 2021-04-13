const { incrementDay } = require("../config/utils");
const { addBusinessDays, isMonday } = require("date-fns");

describe("Utils", () => {
  it("should increment a day", () => {
    const date = new Date("2021/04/13");

    const result = incrementDay(date.toISOString());

    const expected = addBusinessDays(date, 1);

    expect(result.toISOString()).toEqual(expected.toISOString());
  });

  it("should increment a day excluding weekends", () => {
    // friday
    const date = new Date(2021, 4, 15);

    const result = incrementDay(date.toISOString());

    const expected = addBusinessDays(date, 1);

    expect(isMonday(result)).toEqual(true);
    expect(result.toISOString()).toEqual(expected.toISOString());
  });
});
