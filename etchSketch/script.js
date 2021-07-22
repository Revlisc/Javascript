let container = document.querySelector('.container');
let defaultGrid = 16;
let reset = document.querySelector('.resetBtn');
reset.addEventListener('click', clear);

/*
const square = document.querySelectorAll('.box');
square.addEventListener("hover", () => {
    square.style.backgroundColor = 'black';
})
*/
window.onload = function(){start()};

function start() {
    let grid = prompt("How large of a grid would you like, from 1 to 99?");
    if (grid === NaN) {
        alert("You must pick a number.");
    }
    if (grid > 99) {
        grid === 99;
    }
    makeGrid(grid);
}

function makeGrid(size = defaultGrid) {

    for (let i = 1; i <= size; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 1; j <= size; j++) {
            const box = document.createElement('div');
            box.classList.add("box");
            box.addEventListener("mouseover", () => {
                alterColor(box);
            });
            row.appendChild(box);
            
        }
    }
    
}

function alterColor(box) {
    box.classList.add("changed");
}

function clear() {
    let grid = container.querySelectorAll('div');
    grid.forEach(grid => grid.style.backgroundColor = 'white');
    container.empty();
    start();
}

/*
const square = document.querySelectorAll('.box');
square.forEach((box) => {
    square.addEventListener("mouseover", () => {
        alterColor(box);
    })
});  
*/  



//makeGrid(25);