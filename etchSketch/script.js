let container = document.querySelector('.container');
let defaultGrid = 4;

/*
const square = document.querySelectorAll('.box');
square.addEventListener("hover", () => {
    square.style.backgroundColor = 'black';
})
*/

function makeGrid(size = defaultGrid) {
    let area = size ** 2;

    for (let i = 1; i <= area; i++) {
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

/*
const square = document.querySelectorAll('.box');
square.forEach((box) => {
    square.addEventListener("mouseover", () => {
        alterColor(box);
    })
});  
*/  



makeGrid();