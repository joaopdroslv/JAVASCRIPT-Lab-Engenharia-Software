import * as myClasses from "/js/styles.js";
import { allButtons } from "/js/buttons.js";

window.onload = function createContent() {
  // body
  const body = document.getElementsByTagName("body")[0];
  Object.assign(body.style, myClasses.bodyStyle);

  // calculadora body
  const calculadora = document.getElementById("content");
  Object.assign(calculadora.style, myClasses.calculadoraBody);

  // result
  const result = document.createElement("div");
  Object.assign(result.style, myClasses.result);
  calculadora.appendChild(result);

  // buttons container
  const buttonsContainer = document.createElement("div");
  buttonsContainer.id = "buttonsContainer";
  Object.assign(buttonsContainer.style, myClasses.buttonsContainer);

  // adiciona botôes na calculadora
  allButtons.forEach((button) => {
    buttonsContainer.appendChild(button);
    Object.assign(button.style, myClasses.button);

    if (button.id == "bttn-zero") {
      Object.assign(button.style, myClasses.button_zero);
    }
  });

  calculadora.appendChild(buttonsContainer);
};
