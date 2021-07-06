const toggleErase = document.querySelector("#toggleErase");
const toggleRainbow = document.querySelector("#toggleRainbow");
const colorPicker = document.querySelector("#colorPicker");
const slider = document.querySelector(".slider");
const paraGridSize = document.querySelector("#paraGridSize");
const clearAll = document.querySelector("#clearAll");
const container = document.querySelector("#container");

let gridSize=1;

setGridSize(gridSize);

slider.addEventListener("input",(gridSize) => {
    gridSize = slider.value;
    setGridSize(gridSize);
});

function setGridSize(gridSize)
{
    paraGridSize.textContent = `Grid Size: ${gridSize}x${gridSize} `;
    createBoard(gridSize,container);
}

function createBoard(gridSize,container)
{
    container.innerHTML = "";

    for(let i=0; i<gridSize**2; i++)
    {
        let gridDiv = document.createElement("div");
        gridDiv.className = "gridClass";
        container.append(gridDiv);
    }

    container.style.cssText = `grid-template-columns: repeat(${gridSize},auto); grid-template-rows: repeat(${gridSize},auto);`;
}