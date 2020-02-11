let containerDiv = document.querySelector("#container");
let clearButton = document.querySelector("#clearBtn");
let redButton = document.querySelector("#redBtn");
let blackButton = document.querySelector("#blackBtn");

number = prompt("whats the size of the grid?");

function createGrid(number) {
  containerDiv.style.width = "600px";
  containerDiv.style.height = "600px";
  containerDiv.style.display = "grid";
  containerDiv.style.margin = "auto";
  containerDiv.style.gridTemplateRows = `repeat(${number}, 1fr)`;
  containerDiv.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  containerDiv.style.border = "red 1px solid";

  let area = number * number;

  // Create divs and grid
  for (i = 0; i < area; ++i) {
    let newDiv = document.createElement("div");
    newDiv.className = "newDiv";
    containerDiv.appendChild(newDiv);
    newDiv.style.backgroundColor = "white";

    // initial ink selection
    newDiv.addEventListener("mouseover", function() {
      newDiv.style.backgroundColor = "black";
    });

    // Clears all backgrounds to white
    clearButton.addEventListener("click", function() {
      newDiv.style.backgroundColor = "white";
    });

    // Changes cursor color to red
    redButton.addEventListener("click", function() {
      newDiv.addEventListener("mouseover", function() {
        newDiv.style.backgroundColor = "red";
      });
    });

    // Changes cursor color to black
    blackButton.addEventListener("click", function() {
      newDiv.addEventListener("mouseover", function() {
        newDiv.style.backgroundColor = "black";
      });
    });
  }
}

createGrid(number);
