
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

    document.getElementsByClassName("cell")[r * columns + c].innerText = currPlayer;

    if (currPlayer == playerX) {
        currPlayer = playerO;
    } else {
        currPlayer = playerX;
    }

    

    console.log(grid);
    checkWinner();
}

function checkWinner() {
    console.log("I am checking")

    //check horizontally 
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (grid[r][c] != '') {
                if (grid[r][c] == grid[r][c+1] && grid[r][c+1] == grid[r][c+2] && grid[r][c+2] == grid[r][c+3]) {
                    console.log("Winner Found horizontally", r, c)
                    endGame(r, c);
                    return;
                }
            }
        }
    }

    //check vertically 
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 3; r++) {
            if (grid[r][c] != '') {
                if (grid[r][c] == grid[r+1][c] && grid[r+1][c] == grid[r+2][c] && grid[r+2][c] == grid[r+3][c]) {
                    console.log("Winner Found vertically", r, c)
                    endGame(r, c);
                    return;
                }
            }
        }
    }

    //check anti diagonally 
    for (let r = 0; r < rows - 3; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (grid[r][c] != '') {
                if (grid[r][c] == grid[r+1][c+1] && grid[r+1][c+1] == grid[r+2][c+2] && grid[r+2][c+2] == grid[r+3][c+3]) {
                    console.log("Winner Found anti diagonally", r, c)
                    endGame(r, c);
                    return;
                }
            }
        }

    }

    // check diagonally 
    for (let r = 3; r < rows; r++) {
        for ( let c = 0; c < columns - 3; c++) {
            if (grid[r][c] != '') {
                if (grid[r][c] == grid[r-1][c+1] && grid[r-1][c+1] == grid[r-2][c+2] && grid[r-2][c+2] == grid[r-3][c+3]) {
                    console.log("Winner Found diagonally", r, c)
                    endGame(r, c);
                    return;
                }
            }
        }
    }
}

function endGame(r, c) {
    if (grid[r][c] == playerO) {
        declareWinner("Player O Wins!")
    } else {
        declareWinner("Player X Wins!")
    }
}

function declareWinner(who) {
    document.querySelector(".endgame").style.display = "block";
    document.querySelector(".endgame .text").innerText = who;
}



