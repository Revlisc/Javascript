let container = document.querySelector('.container');
let defaultGrid = 16;
let reset = document.querySelector('.resetBtn');
let resize = document.querySelector('.resize');
let boxes;
let grid = prompt("How large of a drawing area do you want?");
makeGrid(grid);

function makeGrid(size = defaultGrid) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 1; i <= size * size; i++) {
        let row = document.createElement('div');
        row.classList.add('boxes');
        container.appendChild(row);
    };   
    box = document.querySelectorAll(".boxes");
    box.forEach((boxes) => {
        boxes.addEventListener("mouseover", () => {
            boxes.classList.add("changed");
        });
    });
    
    
}

reset.addEventListener('click', () => {
    box.forEach((boxes) => {
        boxes.classList.remove("changed");
    });
});

resize.addEventListener("click", () => {
    box.forEach((boxes) => {
        boxes.classList.remove("changed");
    });
    grid = prompt("How large of a grid would you like, from 1 to 99?");
    if (grid === NaN) {
        alert("You must pick a number.");
    }
    if (grid > 99) {
        grid === 99;
    }
    makeGrid(grid);
});