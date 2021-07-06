const btnToggleErase = document.querySelector("#toggleErase");
const btnToggleRainbow = document.querySelector("#toggleRainbow");
const colorPicker = document.querySelector("#colorPicker");
const slider = document.querySelector(".slider");
const paraGridSize = document.querySelector("#paraGridSize");
const btnClearAll = document.querySelector("#clearAll");
const container = document.querySelector("#container");

let gridSize=16;

setGridSize(gridSize);

slider.addEventListener("input",() => {
    gridSize = slider.value;
    setGridSize();
});

function setGridSize()
{
    paraGridSize.textContent = `Grid Size: ${gridSize}x${gridSize} `;
    createBoard(container);
}


toggleEraseCtr = 1;

btnToggleErase.addEventListener("click", () => {

    toggleEraseCtr++;
    console.log("toggleerase:"+toggleEraseCtr);
});

function erase()
{
    return (toggleEraseCtr % 2 === 0) ? true : false; 
}


let toggleRainbowCtr = 1;

btnToggleRainbow.addEventListener("click", () => {
    toggleRainbowCtr++;
});

function rainbow()
{
    return (toggleRainbowCtr % 2 === 0) ? true : false;
}




function createBoard(container)
{
    container.innerHTML = "";

    for(let i=0; i<gridSize**2; i++)
    {
        let gridDiv = document.createElement("div");
        gridDiv.className = "gridClass";
        gridDiv.addEventListener("mouseover", () => {
            draw(colorPicked,gridDiv,erase(),rainbow());
        });
        container.append(gridDiv);
    }

    container.style.cssText = `grid-template-columns: repeat(${gridSize},auto); grid-template-rows: repeat(${gridSize},auto);`;
}



let colorPicked = colorPicker.value;

colorPicker.addEventListener("change", () => {
    colorPicked = colorPicker.value;
});

function draw(colorPicked, gridElement, isErase, isRainbow)
{
    if(!isErase && !isRainbow)
    {
        gridElement.style.backgroundColor = colorPicked;
        toggleRainbowCtr = 1;
        toggleEraseCtr = 1;
    }
    else if(isErase)
    {
        gridElement.style.backgroundColor = "white";
        toggleRainbowCtr = 1;
    }
    else if(isRainbow)
    {
        console.log("girdi");
        gridElement.style.backgroundColor = randomColorGenerate();
        toggleEraseCtr = 1;
    }
    
}


function randomColorGenerate()
{
    
    return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
}


btnClearAll.addEventListener("click", () => {
    clearAll(container);
});

function clearAll(container)
{
    let list = container.childNodes;
    console.log(gridSize);

    for(let i=0; i<gridSize**2; i++)
    {
        list[i].style.backgroundColor = "white";
    }
}