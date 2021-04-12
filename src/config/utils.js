const incrementDay = (input) => {
  const output = new Date(input);

  // to get the next day's date
  output.setDate(output.getDate() + 1);

  return output;
};

module.exports = {
  incrementDay,
};
