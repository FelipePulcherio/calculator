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
    firstSlot = secondSlot = thirdSlot = "0";
    display2.textContent = firstSlot;
  }
  return;
}

function logicPressed() {
  const display1 = document.querySelector('.display1');
  const display2 = document.querySelector('.display2');
  secondSlot = this.textContent;
  display2.textContent = `${firstSlot + secondSlot}`
}

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => number.addEventListener('click', numberPressed));

const delButton = document.querySelectorAll('.delete');
delButton.forEach((del) => del.addEventListener('click', deletePressed));

const logic = document.querySelectorAll('.logic');
logic.forEach((logicBtn) => logicBtn.addEventListener('click', logicPressed));