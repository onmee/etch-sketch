// Declare n but leave it undefined
let n = 32;

// Set the background of container items to whiteS

function resetColor() {
  const cells = document.querySelectorAll('.container-item');
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.background = 'white';
  }
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
      event.target.style.background = 'black';
    }
  }));

  cells.forEach((item) => item.addEventListener('mouseup', () => {
    isClicked = false;
  }));
}

// Remove previous child nodes from container

function removeChildNodes() {
  const node = document.getElementById('container');
  while (node.firstChild) {
    node.removeChild(node.lastChild);
  }
}

function gridSize() {
  resetColor();
  removeChildNodes();

  // Prompt user to input size of grid, between 16 and 100.
  // Ensure only a number is provided.
  do {
    n = parseInt(prompt('Enter number between 16 and 100:'), 10);
  } while (isNaN(n) || n > 100 || n < 16);

  // Creat and add the required number of divs to the container.
  for (let i = 0; i < n * n; i++) {
    const container = document.getElementById('container');
    container.style.gridTemplateColumns = `repeat(${n},1fr)`;
    const div = document.createElement('div');
    div.classList.add('container-item');
    container.appendChild(div);
  }
  draw();
}

// When START button is clicked, run the gridSize function.
document.getElementById('start').onclick = gridSize;
