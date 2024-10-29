// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 8 September 2024 05:19:41 AM (UTC+3)

const units = {
  celsius: {
    fahrenheit: value => (value * 9 / 5) + 32,
    kelvin: value => value + 273.15,
    reaumur: value => value * 4 / 5
  },
  fahrenheit: {
    celsius: value => (value - 32) * 5 / 9,
    kelvin: value => (value + 459.67) * 5 / 9,
    reaumur: value => (value - 32) * 4 / 9
  },
  kelvin: {
    celsius: value => value - 273.15,
    fahrenheit: value => (value * 9 / 5) - 459.67,
    reaumur: value => (value - 273.15) * 4 / 5
  },
  reaumur: {
    celsius: value => value * 5 / 4,
    fahrenheit: value => value * 9 / 4 + 32,
    kelvin: value => value * 5 / 4 + 273.15
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll("#celsius, #fahrenheit, #kelvin, #reaumur");

  inputs.forEach(pageInput => pageInput.addEventListener('input', () => {
    pageInput.value = pageInput.value.replace(/[^0-9+-.]/g, '');
    const value = Number(pageInput.value);

    if (pageInput.value) {
      inputs.forEach(userInput => {
        if (userInput !== pageInput) {
          userInput.value = !isNaN(units[pageInput.id][userInput.id](value))
          ? units[pageInput.id][userInput.id](value).toFixed(2)
          : '';
        };
      });
    } else {
      inputs.forEach(userInput => userInput.value = '');
    };
  }));
});