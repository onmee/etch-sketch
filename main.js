//Create a 64x64 = 4096 divs and append to container div
//Add class container-item to each div

for (i=0; i < 4096; i++) {
    let container = document.querySelector(".container")
    let div = document.createElement("div")
    div.classList.add('container-item')
    container.appendChild(div)
}
