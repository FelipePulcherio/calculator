let firstSlot = 0;
let secondSlot = 0;
let thirdSlot = 0;

function numberPressed() {
  const display2 = document.querySelector('.display2');
  if (display2.textContent.length >= 16) return;
  if (/[.]/g.test(firstSlot) && this.textContent == ".") return;
  if (firstSlot === 0 && this.textContent != ".") {
    firstSlot = this.textContent;
    display2.textContent = firstSlot;
  } else {
    firstSlot = `${firstSlot + this.textContent}`;
    display2.textContent = firstSlot;
  }
}

const numbers = document.querySelectorAll('.number');
numbers.forEach( (number) => number.addEventListener('click', numberPressed) );

