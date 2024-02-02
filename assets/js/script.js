
let playerX = "X";
let playerO = "O";

let playerXmoves = 0;
let playerOmoves = 0;

let playerXscore = 0;
let playerOscore = 0;

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
            document.getElementById("grid").append(cell);
        }
        grid.push(row);
    }
    startGame();
}

function startGame() {
    document.querySelector(".endgame").style.display = "none";
    let cells = document.querySelectorAll(".cell");
    grid.forEach(row => row.fill(''));
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].addEventListener("click", turnClick);
    }
    gameOver = false;
    currPlayer = playerX;
    playerXmoves = 0;
    playerOmoves = 0;
    
    let playerTurn = document.getElementById("player")
    playerTurn.innerText = "X takes the opening move!"
}


function turnClick() {
    console.log('I am clicking')
    console.log('Current Player:', currPlayer);

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
    
    console.log('Setting innerText:', currPlayer);

    document.getElementsByClassName("cell")[r * columns + c].innerText = currPlayer;
    let playerTurn = document.getElementById("player")

    if (currPlayer == playerX) {
        currPlayer = playerO;
        playerXmoves++;
        playerTurn.innerText = "X moves! O's turn."
    } else {
        currPlayer = playerX;
        playerOmoves++;
        playerTurn.innerText = "O moves! X's turn."
    }

    console.log(grid);
    checkWinner();
    console.log(`Player O Moves: ${playerOmoves}, Player X Moves: ${playerXmoves}`);
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
    checkTie();
}

function endGame(r, c) {
    if (grid[r][c] === playerO) {
        declareWinner(`Player O Wins! \nin ${playerOmoves} moves`)
        playerOscore++;
    } else {
        declareWinner(`Player X Wins! \nin ${playerXmoves} moves`)
        playerXscore++;
    }
    document.querySelector(".score .playerX").innerText = `Player O: ${playerOscore}`;
    document.querySelector(".score .playerO").innerText = `Player X: ${playerXscore}`;
}

function declareWinner(who) {
    document.querySelector(".endgame").style.display = "block";
    document.querySelector(".endgame .text").innerText = who;
    gameOver = true;
}

function checkTie() {
    if (!grid.flat().some(cell => cell === '')) {
        declareWinner("Tie Game!")
    } 
}




