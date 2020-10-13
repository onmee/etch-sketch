//Create a 64x64 = 4096 divs and append to container div
//Add class container-item to each div

for (i=0; i < 4096; i++) {
    let container = document.querySelector(".container")
    let div = document.createElement("div")
    div.classList.add('container-item')
    container.appendChild(div)
}


// The elements background is changed only 
// when the mouse is clicked. held and moved.
// Changes effected by setting isClicked to True of False. 

let isClicked = false;
const cells = document.querySelectorAll('.container-item');

cells.forEach(item => item.addEventListener('mousedown', event => {
    isClicked = true;
    
}))

cells.forEach(item => item.addEventListener('mousemove', event => {
    if (isClicked === true) {
        event.target.style.background = 'black'
    }
}))

cells.forEach(item => item.addEventListener('mouseup', event => {
    isClicked = false;
    
}))
