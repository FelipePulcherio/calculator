let firstSlot = 0;
let secondSlot = 0;
let thirdSlot = 0;

const numbers = document.querySelectorAll('.number');
numbers.forEach( (number) => number.addEventListener('click', numberPressed) );

