const btnToggleErase = document.querySelector("#toggleErase");
const btnToggleRainbow = document.querySelector("#toggleRainbow");
const colorPicker = document.querySelector("#colorPicker");
const slider = document.querySelector(".slider");
const paraGridSize = document.querySelector("#paraGridSize");
const btnClearAll = document.querySelector("#clearAll");
const container = document.querySelector("#container");

let gridSize=1;

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

function createBoard(container)
{
    container.innerHTML = "";

    for(let i=0; i<gridSize**2; i++)
    {
        let gridDiv = document.createElement("div");
        gridDiv.className = "gridClass";
        gridDiv.addEventListener("mouseover", () => {
            draw(colorPicked,gridDiv);
        });
        container.append(gridDiv);
    }

    container.style.cssText = `grid-template-columns: repeat(${gridSize},auto); grid-template-rows: repeat(${gridSize},auto);`;
}



let colorPicked = colorPicker.value;

colorPicker.addEventListener("change", () => {
    colorPicked = colorPicker.value;
});

function draw(colorPicked, gridElement)
{
    gridElement.style.backgroundColor = colorPicked;
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

/*

    TOGGLE ERASE 1 İKEN SİLSİN   (YADA 2 YE BÖLÜNEBİLİYORKEN DE OLUR FARKETMEZ)
    0 İKEN COLOR PİCKERADN GELEN DEĞERLE ÇİZSİN


let toggleEraseCounter = 0;

toggleErase.addEventListener("click", () => {

    

});


function togErase()
{

}*/
