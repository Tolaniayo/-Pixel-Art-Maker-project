// define all the dom element need for this project
const sizePicker    = document.querySelector("#sizePicker"),
      createGridBn  = document.querySelector("input[type=submit]"), // the submit button to make a grid
      pixelCanvas   = document.querySelector("#pixelCanvas");

let colorPicker   = document.querySelector("#colorPicker").value,
    inputHeight   = document.querySelector("#inputHeight").value,
    inputWidth    = document.querySelector("#inputWidth").value;


function cleanGrid(){
    "use strict";
    while (pixelCanvas.childElementCount != 0){
        pixelCanvas.removeChild(pixelCanvas.lastElementChild)
    }
}


function makeGrid(inputHeight, inputWidth, colorPicker, pixelCanvas) {
    // Your code goes here!
    // clear the out put 
    cleanGrid();
    // reassign the varriable everytime
    inputHeight   = document.querySelector("#inputHeight").value;
    inputWidth    = document.querySelector("#inputWidth").value;
    // make the grade
    for (let i = 1; i <= inputHeight; i++) {
        let gRow = document.createElement('tr');
        pixelCanvas.appendChild(gRow);
        for (let j = 1; j <= inputWidth; j++) {
            let gCell = document.createElement('td');
            gRow.appendChild(gCell);
            //assign event for each cell
            gCell.addEventListener('mousedown', function() {
                colorPicker   = document.querySelector("#colorPicker").value;
                this.style.backgroundColor = colorPicker;
                
            });
        }
    }
}


// show the gird after activation

sizePicker.addEventListener('submit', function(e) {
  e.preventDefault();
  makeGrid(inputHeight, inputWidth, colorPicker, pixelCanvas);
});

// 
