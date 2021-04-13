const { addBusinessDays } = require("date-fns");

const incrementDay = (input) => {
  const date = new Date(input);

  // to get the next day's date
  // output.setDate(output.getDate() + 1);

  const output = addBusinessDays(date, 1);

  return output;
};

module.exports = {
  incrementDay,
};
