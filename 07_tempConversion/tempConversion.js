const convertToCelsius = function (tempFahrenheit) {
  const celcius = (tempFahrenheit - 32) * (9 / 5);
  return Math.round(celcius * 10) / 10;
};

const convertToFahrenheit = function (tempCelcius) {
  const fahrenheit = (tempCelcius + 32) * (9 / 5);
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
