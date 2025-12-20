const display = document.getElementById("display");

function append(value) {
  const lastChar = display.value.slice(-1);

  if (display.value === "0" && value !== ".") {
    display.value = value;
    return;
  }

  if (isOperator(lastChar) && isOperator(value)) {
    return;
  }

  display.value += value;
}

function clearDisplay() {
  display.value = "0";
}

function deleteLast() {
  display.value =
    display.value.length > 1
      ? display.value.slice(0, -1)
      : "0";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function percentage() {
  display.value = String(Number(display.value) / 100);
}

function toggleSign() {
  display.value = String(Number(display.value) * -1);
}

function isOperator(char) {
  return ["+", "-", "*", "/"].includes(char);
}
