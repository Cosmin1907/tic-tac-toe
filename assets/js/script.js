
let playerX = "X";
let playerO = "O";
let currPlayer = playerX;

let gameOver = false;

let rows = 9;
let columns = 9;

window.onload = function() {
    setGame();
}

function setGame() {
    grid = [];

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            //JS creates a placeholder
            row.push('');

            //HTML creates a visual representation of the elements on the webpage
            let cell = document.createElement("div");
            cell.id = r.toString() + "-" + c.toString();
            cell.classList.add("cell");
            cell.addEventListener("click", turnClick);
            document.getElementById("grid").append(cell);
        }

        grid.push(row);
    }

    console.log(grid);

}


function turnClick() {
    console.log('I am clicking')

    if (gameOver) {
        return;
    }

    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if(grid[r][c] !== '') {
        return;
    }


    grid[r][c] = currPlayer;
    let cell = this;

    if (currPlayer == playerX) {
        currPlayer = playerO;
    } else {
        currPlayer = playerX;
    }

    document.getElementsByClassName("cell")[r * columns + c].innerText = currPlayer;

    console.log(grid);
}