let firstSlot = 0;
let secondSlot = 0;
let thirdSlot = 0;

function numberPressed() {
  const display2 = document.querySelector('.display2');
  if (display2.textContent.length >= 16) return;
  if (display2.textContent == 0) {
    firstSlot = this.textContent;
    display2.textContent = firstSlot;
  } else {
    firstSlot = `${firstSlot + this.textContent}`;
    display2.textContent = firstSlot;
  }
}

const numbers = document.querySelectorAll('.number');
numbers.forEach( (number) => number.addEventListener('click', numberPressed) );

