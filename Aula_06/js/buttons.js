import * as myStyles from "./styles.js";

const createButton = (id, label, value) => {
  const button = document.createElement("button");
  button.id = `bttn-${id}`;
  button.innerHTML = label;
  button.value = value;
  allButtons.push(button);

  Object.assign(button.style, myStyles.button);

  if (button.id == "bttn-zero") {
    Object.assign(button.style, myStyles.button_zero);
  }

  return button;
};

const allButtons = [];

createButton("clear", "AC", "clear");
createButton("invert", "+/-", "invert");
createButton("percentage", "%", "percentage");
createButton("division", "/", "/");
createButton("seven", "7", 7);
createButton("eight", "8", 8);
createButton("nine", "9", 9);
createButton("multiply", "*", "*");
createButton("four", "4", 4);
createButton("five", "5", 5);
createButton("six", "6", 6);
createButton("subtract", "-", "-");
createButton("one", "1", 1);
createButton("two", "2", 2);
createButton("three", "3", 3);
createButton("add", "+", "+");
createButton("zero", "0", 0);
createButton("decimal", ".", ".");
createButton("equals", "=", "=");

export { allButtons };
