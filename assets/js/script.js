
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

let interval;

window.onload = function() {
    setGame(rows, columns);
    console.log("window is loaded")
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Dom is loaded")
    let instrOpen = document.getElementById("instrBtn");
    instrOpen.addEventListener("click", toggleinstructions);

    let instrClose = document.getElementById("instrClose");
    instrClose.addEventListener("click", toggleinstructions);

    let modal = document.querySelector(".modal");
    modal.style.display = "none";

    /**
     * Toggle the visibility of the instructions pop up 
     * Improved based on the code's needs and inspired by:
     * Source: https://www.w3schools.com/howto/howto_css_modals.asp
     */
    function toggleinstructions() {
        if (modal.style.display === "none") {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
    }
});

/**
 * Setting up the grid after the page is loaded
 * by visualy creating the HTML elements 
 * and records each cell based on its position in the grid.
 * Source: https://youtu.be/4ARsthVnCTg?si=sZ1DGSHS9bwaNIsP
 */
function setGame(rows, columns) {
    grid = [];

    // Clear the existing grid
    document.getElementById("grid").innerHTML = '';

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

/**
 * Resets the game to the initial state, and initiates turnClick function
 * Improved based on the code's needs, uses functionality from the folowing source:
 * https://youtu.be/P2TcQ3h0ipQ?si=8Q0lhJK11acKPFnd
 */
function startGame() {
    // Hide the element with the class "endgame" by setting its display property to "none"
    document.querySelector(".endgame").style.display = "none";
    let cells = document.querySelectorAll(".cell");

    // Reset the game grid by filling each row with empty strings
    grid.forEach(row => row.fill(''));

    // Loop through each cell and reset its innerText to an empty string,
    // and add a click event listener that calls the function 'turnClick'
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].addEventListener("click", turnClick);
    }

    // Reset game state variables
    gameOver = false;
    currPlayer = playerX;
    playerXmoves = 0;
    playerOmoves = 0;
    
    let playerTurn = document.getElementById("player")
    playerTurn.innerText = "X takes the opening move!"
    resetCountDown();
    
}

/**
 * Handles the logic for a player`s move, 
 * updating the game state and the visual representation on the board.
 * Initiates the checkWinner function.
 * Improved based on the code's needs, uses functionality from the folowing source:
 * https://youtu.be/4ARsthVnCTg?si=sZ1DGSHS9bwaNIsP
 * Other sources: https://youtu.be/P2TcQ3h0ipQ?si=XYzpyCKo3Y0JJ_Qq
 */
function turnClick() {
    console.log('I am clicking')
    console.log('Current Player:', currPlayer);

    // Check if the game is already over, if so, return from the function
    if (gameOver) {
        return;
    }

    // Extract the row and column from the clicked cell's id
    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    // Check if the clicked cell is already occupied, if so, return from the function
    if(grid[r][c] !== '') {
        return;
    }

    // Update the game grid with the current player's symbol (X or O)
    grid[r][c] = currPlayer;
    let cell = this;
    
    console.log('Setting innerText:', currPlayer);

    // Update the visual representation of the game board by setting the innerText of the clicked cell
    document.getElementsByClassName("cell")[r * columns + c].innerText = currPlayer;
    // Get the element representing whose turn it is and update it based on the current player
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
    console.log(coords);
    
    checkWinner();
    resetCountDown();

    console.log(`Player O Moves: ${playerOmoves}, Player X Moves: ${playerXmoves}`);
}

/**
 * Start a timer that decrements count by one second 
 * and calls the skipTrun function once the count is down to 0
 * Source: https://www.shecodes.io/ - was adapted to suit the purpose of the game
 */
function countDown() {

    let count = 1;
    interval = setInterval(function() {
        count--;
        console.log(count);
        let time = document.getElementById("countdown");
        time.innerText = `Your next move awaits: ${count} seconds left`;
        if(count === 0) {
            clearInterval(interval); 
            skipTurn();
        } 
    }, 1000);
}

/**
 * Restarts the countdown timer and cleares the interval each time
 * then calls the CountDown function ensuring the count down is restarted
 */
function resetCountDown() {
    clearInterval(interval);
    countDown(); 
}

function skipTurn() {
    let { row, column } = randomSpot();
    if (!checkTie()) {
        simulateClick(row, column);
    }
}

/**
 * Generates random row and column indices within the grid dimensions 
 * and checks if the selected space is empty
 * @returns The object with parameters row and column 
 */
function randomSpot() {
    // Generate random row and column indices within the grid dimensions
    let r = Math.floor(Math.random() * grid.length);
    let c = Math.floor(Math.random() * grid[0].length);

    // Check if the selected space is empty
    if (grid[r][c] === '') {
        return { row: r, column: c };
    } else {
        // If the selected space is not empty, recursively call randomSpot until an empty space is found
        return randomSpot();
    }
}

/**
 * Simulate a cell being clicked by invoking the turnClick with the desired cell's ID 
 * @param {*represents the row index of a cell in a grid} row 
 * @param {*represents the column index of a cell in a grid} column 
 */
function simulateClick(row, column) {
    let cell = row + "-" + column;
    turnClick.call(document.getElementById(cell));
}

/**
 * After a move is made, it checks if the player has won, 
 * and if so, it initiates the end-of-game process.
 * Source: https://youtu.be/4ARsthVnCTg?si=sZ1DGSHS9bwaNIsP
 */
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

/**
 * Checks if the player who made the winning move is Player O or Player X.
 * calls the function declareWinner with a message indicating the wining player,
 * and updates the score
 * @param {*represents the row indice} r 
 * @param {*represents the column indice} c 
 * Improved based on the code's needs
 * Source: https://youtu.be/4ARsthVnCTg?si=EmCZv9OwZ3f5ggAs
 */
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

/**
 * It's called after the game logic has determined the winner, 
 * and it updates the UI to reflect the outcome.
 * @param {*holds the value passed to it when the function was called} who 
 * Source: https://youtu.be/P2TcQ3h0ipQ?si=zrfEHf7VO-Nu2fvP
 */
function declareWinner(who) {
    document.querySelector(".endgame").style.display = "block";
    document.querySelector(".endgame .text").innerText = who;
    gameOver = true;
}

/**
 * Checks if there are no empty cells left in the grid.
 * If all cells are filled, it declares the game as a tie by invoking declareWinner() 
 * Part of the logic inspired by: https://youtu.be/P2TcQ3h0ipQ?si=zrfEHf7VO-Nu2fvP
 */
function checkTie() {
    if (!grid.flat().some(cell => cell === '')) {
        declareWinner("Tie Game!")
    } 
}






