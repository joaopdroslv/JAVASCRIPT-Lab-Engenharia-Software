import * as myStyles from "./styles.js";
import { allButtons } from "./buttons.js";

window.onload = function start() {
  const body = document.getElementsByTagName("body")[0];
  Object.assign(body.style, myStyles.bodyStyle);

  const calculator = document.getElementById("content");
  Object.assign(calculator.style, myStyles.calculatorBody);

  const result = document.createElement("div");
  Object.assign(result.style, myStyles.result);
  result.id = "result";
  result.innerHTML = 0;
  calculator.appendChild(result);

  const buttonsContainer = document.createElement("div");
  buttonsContainer.id = "buttonsContainer";
  Object.assign(buttonsContainer.style, myStyles.buttonsContainer);

  allButtons.forEach((button) => {
    buttonsContainer.appendChild(button);

    if (button.value === "=") {
      button.addEventListener("click", calculate);
    } else {
      button.addEventListener("click", () => handleAction(button.value));
    }
  });

  calculator.appendChild(buttonsContainer);
};

function handleAction(value) {
  if (value == "invert") {
    invert(value);
  } else if (value == "percentage") {
    calculatePercentage(value);
  } else if (value == "clear") {
    clearAll();
  } else {
    addInput(value);
  }
}

function addInput(value) {
  const result = document.getElementById("result");
  const currentResult = result.innerHTML;

  if (currentResult === "0" || currentResult === "Error") {
    result.innerHTML = value;
  } else {
    result.innerHTML += value;
  }
}

function formatResult(result) {
  const formattedResult = parseFloat(result).toFixed(2);
  return formattedResult;
}

function updateResult(value) {
  const result = document.getElementById("result");

  if (value != "Error") {
    result.innerHTML = formatResult(value);
  } else {
    result.innerHTML = value;
  }
}

function calculate() {
  const result = document.getElementById("result");
  const expression = result.innerHTML;

  try {
    const calcResult = eval(expression);
    updateResult(calcResult);
  } catch (error) {
    updateResult("Error");
  }
}

function invert() {
  const result = document.getElementById("result");
  const currentResult = result.innerHTML;

  if (currentResult !== "Error" && currentResult !== "0") {
    if (currentResult[0] === "-") {
      updateResult(currentResult.slice(1));
    } else {
      updateResult("-" + currentResult);
    }
  }
}

function calculatePercentage() {
  const result = document.getElementById("result");
  const currentResult = result.innerHTML.toString() + "%";

  if (currentResult !== "Error" && currentResult !== "0") {
    try {
      const match = /(\d+)\s*([\+\-\*\/])\s*(\d+)\s*%/g.exec(currentResult);

      if (match && match.length === 4) {
        const value = parseFloat(match[1]);
        const operator = match[2];
        const percent = parseFloat(match[3]);

        let percentValue = 0;

        switch (operator) {
          case "+":
            percentValue = value + value * (percent / 100);
            break;
          case "-":
            percentValue = value - value * (percent / 100);
            break;
          case "*":
            percentValue = value * (percent / 100);
            break;
          case "/":
            if (percent !== 0) {
              percentValue = value / (percent / 100);
            } else {
              updateResult("Error");
              return;
            }
            break;
          default:
            updateResult("Error");
            return;
        }
        updateResult(percentValue);
      } else {
        updateResult("Error");
      }
    } catch (error) {
      updateResult("Error");
    }
  }
}

function clearAll() {
  const result = document.getElementById("result");
  result.innerHTML = "0";
}
