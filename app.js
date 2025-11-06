const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let previousInput = "";
let operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      currentInput = "";
      previousInput = "";
      operator = "";
      display.value = "";
    } else if (value === "=") {
      if (previousInput && operator && currentInput) {
        try {
          const result = eval(`${previousInput} ${operator} ${currentInput}`);
          display.value = result;
          currentInput = result.toString();
          previousInput = "";
          operator = "";
        } catch (error) {
          display.value = "Error";
          currentInput = "";
          previousInput = "";
          operator = "";
        }
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      if (currentInput) {
        previousInput = currentInput;
        currentInput = "";
        operator = value;
      }
    } else {
      if (value === "." && currentInput.includes(".")) return;
      currentInput += value;
      display.value = currentInput;
    }
  });
});
