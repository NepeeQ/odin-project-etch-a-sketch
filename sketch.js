const canvas = document.querySelector("#canvas");
const slider = document.querySelector("#gridsize");
const sliderLabel = document.querySelector("#squareNum");
const resetButton = document.querySelector("#reset");
const colorPick = document.querySelector("#colorPick");
const rainbowButton = document.querySelector("#rainbow");
const modeInfo = document.querySelector("#modeInf");

const DEFAULT_GRID_SIZE = 16;
const DEFAULT_BLOCK_SIZE = 40;

let currentColor = "black";

let rainbowSet = false;

rainbowButton.addEventListener("click", function()
{
    rainbowSet = true;
    console.log(rainbowSet);
    modeInfo.textContent = " ";
    
    modeInfo.appendChild 
    modeInfo.style.opacity = "100%";
} )

colorPick.addEventListener("change", function()
{
    currentColor = colorPick.value;
    modeInfo.style.opacity = "0%";
    rainbowSet = false;
})

resetButton.addEventListener("click", function(){
    const blocks = document.querySelectorAll(".block");
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].style.backgroundColor = "white";
    }
})



function showVal(val){
    sliderLabel.textContent = val + "x" + val;
    clearGrid();
    createGrid(val);
}

function clearGrid()
{
    canvas.innerHTML = "";
}

function createGrid(num)
{
    for (let i = 0; i < num; i++)
    {
        const column = document.createElement("div");
        column.classList.add("col");
        canvas.appendChild(column);
        for (let j = 0; j < num; j++)
        {
            const block = document.createElement("div");
            block.classList.add("block");
            block.style.width = DEFAULT_BLOCK_SIZE / num * 16 + "px";
            block.style.height = (DEFAULT_BLOCK_SIZE - 10) / num * 16 + "px";
            column.appendChild(block);
        }
    }
    const blocks = document.querySelectorAll(".block");
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].addEventListener('mouseover', draw);
    }
}



function draw()
{

    if (rainbowSet === true)
    {
        rainbowMode();
    }

    this.style.backgroundColor = currentColor;
}


function rainbowMode (){
    let color = "#"
    for (let i = 0; i < 6; i++)
    {
        color += Math.floor(Math.random() * 16).toString(16);
    }
    currentColor = color;
}

window.onload = () => {
    createGrid(DEFAULT_GRID_SIZE);
}
