let display = '';

function addToDisplay(value) {
  display += value;
  document.getElementById('display').value = display;
}

function calculate() {
  try {
    display = eval(display);
    document.getElementById('display').value = display;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function clearDisplay() {
  display = '';
  document.getElementById('display').value = display;
}


const box = document.getElementById("calc");
let currentPosition = 0;
const targetPosition = window.innerWidth / 2 -25;

function moveBox() {
  currentPosition += 1;
  box.style.left = currentPosition + 'px';

  if (currentPosition < targetPosition) {
    requestAnimationFrame(moveBox);
  }
}

moveBox();
