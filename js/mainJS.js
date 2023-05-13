let firstSlot = "0";
let secondSlot = "";
let thirdSlot = "";

function numberPressed() {
  const display2 = document.querySelector('.display2');
  if (display2.textContent.length >= 16) return;
  if (/[.]/g.test(firstSlot) && this.textContent == ".") return;
  if (firstSlot === "0" && this.textContent != ".") {
    firstSlot = this.textContent;
    display2.textContent = firstSlot;
  } else if (secondSlot != 0) {
    thirdSlot = thirdSlot + this.textContent;
    display2.textContent = firstSlot + secondSlot + thirdSlot;
  } else {
    firstSlot = firstSlot + this.textContent;
    display2.textContent = firstSlot;
  }
}

function deletePressed() {
  const display2 = document.querySelector('.display2');
  if (this.textContent === "C" && thirdSlot != "") {
    thirdSlot = thirdSlot.slice(0,-1);
    display2.textContent = firstSlot + secondSlot + thirdSlot;
  } else if (this.textContent === "C" && secondSlot != "") {
    secondSlot = "";
    display2.textContent = firstSlot;
  } else if (this.textContent === "C" && secondSlot === "") {
    firstSlot = firstSlot.slice(0,-1);
    display2.textContent = firstSlot;
  } else if (this.textContent === "AC") {
    firstSlot = "0";
    secondSlot = thirdSlot = "";
    display2.textContent = firstSlot;
  }
  return;
}

function logicPressed() {
  const display2 = document.querySelector('.display2');
  if (secondSlot != "") {
    equalPressed(this.textContent);
    return;
  }
  secondSlot = this.textContent;
  display2.textContent = `${firstSlot + secondSlot}`
}

function add() {
  return [...arguments].reduce((a, b) => a + b, 0);
}

function subtract() {
	return arguments.length === 0 ? 0 : [...arguments].reduce((a, b) => a - b);
}

function multiply() {
  return [...arguments].reduce((a, b) => a * b, 1);
}

function equalPressed(a) {
  const display1 = document.querySelector('.display1');
  const display2 = document.querySelector('.display2');
  let symbol = "";
  let result = "";

  typeof(a) !== 'object' ? (symbol = a) : (symbol = secondSlot);
  console.log(symbol);
  switch (true) {
    case symbol === "+":
      result = add(Number(firstSlot), Number(thirdSlot));
      break;
    case symbol === "-":
      result = subtract(Number(firstSlot), Number(thirdSlot));
      break;
    case symbol === "÷":
      result = divide(Number(firstSlot), Number(thirdSlot));
      break;
    case symbol === "×":
      result = multiply(Number(firstSlot), Number(thirdSlot));
      break;
  }

  display1.textContent = `${firstSlot + secondSlot + thirdSlot + "="}`;
  display2.textContent = `${result}`;
  firstSlot = result;
  secondSlot = thirdSlot = "";
}

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => number.addEventListener('click', numberPressed));

const delButton = document.querySelectorAll('.delete');
delButton.forEach((del) => del.addEventListener('click', deletePressed));

const logic = document.querySelectorAll('.logic');
logic.forEach((logicBtn) => logicBtn.addEventListener('click', logicPressed));

const equal = document.querySelector('.equal');
equal.addEventListener('click', equalPressed);