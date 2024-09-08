// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 8 September 2024 05:19:41 AM (UTC+3)

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll(["#celsius", "#fahrenheit", "#kelvin", "#reaumur"]);

  inputs.forEach(input => input.addEventListener("input", () => {
    const value = Number(input.value);

    changeValue = (index, result) => inputs[index].value = result.toFixed(2);

    if (!isNaN(value) && input.value) {
      switch (input.id) {
        case "celsius":
          changeValue(1, (value * 9 / 5) + 32);
          changeValue(2, value + 273.15);
          changeValue(3, value * 4 / 5);
          break;
        case "fahrenheit":
          changeValue(0, (value - 32) * 5 / 9);
          changeValue(2, (value + 459.67) * 5 / 9);
          changeValue(3, (value - 32) * 4 / 9);
          break;
        case "kelvin":
          changeValue(0, value - 273.15);
          changeValue(1, (value * 9 / 5) - 459.67);
          changeValue(3, (value - 273.15) * 4 / 5);
          break;
        case "reaumur":
          changeValue(0, value * 5 / 4);
          changeValue(1, value * 9 / 4 + 32);
          changeValue(2, value * 5 / 4 + 273.15);
          break;
      };
    } else if (value === 0) {
      inputs.forEach(input => input.value = "");
    };
  }));
});