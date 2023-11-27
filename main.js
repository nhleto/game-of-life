const GRID_SIZE = 100;

const canvas = document.getElementById("canvas");
canvas.style.gridTemplateRows = "repeat(" + GRID_SIZE + ", auto)";
canvas.style.gridTemplateColumns = "repeat(" + GRID_SIZE + ", auto)";

for (let i = 0; i < GRID_SIZE; i++) {
  const square = document.createElement("div");
  square.setAttribute("class", "sqr");
  canvas.appendChild(square);
}

/*
    Any live cell with fewer than two live neighbours dies, as if by underpopulation.
    Any live cell with two or three live neighbours lives on to the next generation.
    Any live cell with more than three live neighbours dies, as if by overpopulation.
    Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction
*/

function runGame() {
  let grids = document.getElementsByClassName("sqr");

  hasNeighbors(grids);
}

function hasNeighbors(grids) {}

runGame();
