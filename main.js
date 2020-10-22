// Declare n but leave it undefined, so that its value is set in gridSize().
let n;

// Set the background of container items to white to remove previous colours.
function resetColor() {
  const cells = document.querySelectorAll('.container-item');
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.background = 'white';
  }
}

// Object key-value pairs of colours.
const colors = {
  black: 'black', red: 'red', green: 'green', blue: 'blue',
};

let currentColor = '';

// Change colour it ID of clieck button.
function replyClick(clickedId) {
  currentColor = clickedId;
}

// An elements background style is changed when the mouse is clicked and moved.
// Changes are effected by setting isClicked to True.
function draw() {
  let isClicked = false;
  const cells = document.querySelectorAll('.container-item');

  cells.forEach((item) => item.addEventListener('mousedown', () => {
    isClicked = true;
  }));

  cells.forEach((item) => item.addEventListener('mousemove', (event) => {
    if (isClicked === true) {
      event.target.style.background = colors[currentColor];
    }
  }));

  cells.forEach((item) => item.addEventListener('mouseup', () => {
    isClicked = false;
  }));
}

// Remove previous child nodes from container, so creation of new
// grid starts again from zero.
function removeChildNodes() {
  const node = document.getElementById('container');
  while (node.firstChild) {
    node.removeChild(node.lastChild);
  }
}

// Main function
function gridSize() {
  resetColor();
  removeChildNodes();

  // Prompt user to input size of grid, between 16 and 100.
  // Ensure only a number is provided.
  do {
    n = parseInt(prompt('Enter a number between 16 and 100 to set grid size:'), 10);
  } while (isNaN(n) || n > 100 || n < 16);

  // Create and add the required number of divs to the container.
  for (let i = 0; i < n * n; i++) {
    const container = document.getElementById('container');
    container.style.gridTemplateColumns = `repeat(${n},1fr)`;
    const div = document.createElement('div');
    div.classList.add('container-item');
    container.appendChild(div);
  }
  draw();
}

// When 'START or RESET' button is clicked, run the gridSize function.
document.getElementById('start').onclick = gridSize;

// Display instructions
function showMessage() {
  alert(message);
}

document.getElementById('instruct').onclick = showMessage;

// Used backticks and \ for multiline string
const message = `Press START to select the grid size, or to clear the \
 drawing and to reset the gridsize. To draw, choose the colour, then left click \
 and move the mouse inside the canvas. Drawing stops when mouse is no longer being clicked.`;
