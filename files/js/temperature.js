// code by qwkrtezzz (https://github.com/nubovik01)
// file created at 8 September 2024 05:19:41 AM (UTC+3)

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll(["#celsius", "#fahrenheit", "#kelvin", "#reaumur"]);

  inputs.forEach(input => input.addEventListener("input", () => {
    const value = Number(input.value);

    if (value && !isNaN(value)) {
      switch (input.id) {
        case "celsius":
          inputs[1].value = ((value * 9 / 5) + 32).toFixed(2);
          inputs[2].value = ((value + 273.15)).toFixed(2);
          inputs[3].value = (value * 4 / 5).toFixed(2);
          break;
        case "fahrenheit":
          inputs[0].value = (((value - 32) * 5 / 9)).toFixed(2);
          inputs[2].value = (((value + 459.67) * 5 / 9)).toFixed(2);
          inputs[3].value = ((value - 32) * 4 / 9).toFixed(2);
          break;
        case "kelvin":
          inputs[0].value = ((value - 273.15)).toFixed(2);
          inputs[1].value = ((value * 9 / 5) - 459.67).toFixed(2);
          inputs[3].value = ((value - 273.15) * 4 / 5).toFixed(2);
          break;
        case "reaumur":
          inputs[0].value = (value * 5 / 4).toFixed(2);
          inputs[1].value = (value * 9 / 4 + 32).toFixed(2);
          inputs[2].value = (value * 5 / 4 + 273.15).toFixed(2);
          break;
      };
    } else {
      inputs.forEach(input => input.value = "");
    };
  }));
});