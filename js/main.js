// Get Application
document.body.onload = layout;
var mainDiv = document.getElementById("mainDiv");
var TurnText = document.createElement('h4');
var WinText = document.createElement('h4');

// Symbolic Constants
const NO_TOKEN = 0;
const X_TOKEN = 1;
const O_TOKEN = 2;

// Variables
let gameBoardArray = new Array(9).fill(NO_TOKEN);
var currentTurn = 0; // Even = X, Odd = O
var wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

// Draw the application
function layout() {
    // Draw Title Text 
    var title = document.createElement('h2');
    title.innerHTML = "Tic-Tac-Toe";
    title.className = "h2 text-center";
    mainDiv.appendChild(title);

    // Draw Grid
    createGrid();

    // Draw Current Player Turn Text
    TurnText.setAttribute('class', 'text-center');
    TurnText.innerHTML = "It's X's turn!";
    mainDiv.appendChild(TurnText);

    // Draw Winner Text
    WinText.className = "h4 text-center";
    mainDiv.appendChild(WinText);

    // Draw Reset Button
    var resetBtnContainer = document.createElement('div');
    resetBtnContainer.setAttribute('class', 'col-9 mx-auto text-center');
    var resetBtn = document.createElement('p');
    resetBtn.setAttribute('class', 'reset-btn btn btn-block')
    resetBtn.innerHTML = "Reset";
    resetBtn.addEventListener('click', reset);
    resetBtnContainer.appendChild(resetBtn);
    mainDiv.appendChild(resetBtnContainer);
}

// Draw the game board
function createGrid() {

    // main container for the game
    var container = document.createElement('div');
    container.setAttribute('class', 'container justify-content-center');

    for (var i = 0; i < 3; i++) {
        //create rows
        var row = document.createElement('div');
        row.setAttribute('class', 'row justify-content-center');

        //loop again to create 3 columns for each row
        for (var j = 0; j < 3; j++) {
            //create the 9 columns 
            var col = document.createElement('div');
            col.setAttribute('class', 'col-3 border text-center');
            col.id = i + "col" + j;
            col.addEventListener('click', sign);

            row.appendChild(col);
        }
        container.appendChild(row);
    }
    mainDiv.appendChild(container);
}

// mark the board with X or O
function sign() {
    var boxCoordinate = this.id.split("col");
    var xCoord = (Number(boxCoordinate[0]));
    var yCoord =(Number(boxCoordinate[1]));
    var i = xCoord * 3 + yCoord;
    var currentValue = gameBoardArray[i];
    if (currentValue == NO_TOKEN) {
        currentTurn++;                 // Increment whose turn it is. Even = X, Odd = O
        if (currentTurn % 2) {
            this.innerHTML = "x";
            TurnText.innerHTML = "O's turn!";
            gameBoardArray[i] = X_TOKEN;
        } else {
            this.innerHTML = "o";
            TurnText.innerHTML = "X's turn!";
            gameBoardArray[i] = O_TOKEN;
        }
        checkWin();
    }
}

// Check if there is a win anywhere on the board
function checkWin() {
    for (let i = 0; i < wins.length; i++) {
        var winner = checkValue(wins[i][0], wins[i][1], wins[i][2]);
        if (winner) {
            WinText.innerHTML = "Player " + winner + " WINS!";
            break;
        }
    }
}

// Check if the boxes referenced by the 3 provided indexes indicate that a player won 
function checkValue(indexA, indexB, indexC) {
    if (gameBoardArray[indexA] == NO_TOKEN
        || gameBoardArray[indexB] == NO_TOKEN
        || gameBoardArray[indexC] == NO_TOKEN) {
        return NO_TOKEN;
    }

    var sum = gameBoardArray[indexA] + gameBoardArray[indexB] + gameBoardArray[indexC];
    if (sum == (O_TOKEN * 3)) {
        return O_TOKEN;
    }

    if (sum == (X_TOKEN * 3)) {
        return X_TOKEN;
    }

    // No winner
    return NO_TOKEN;
}

// Handle resetting the game
function reset(){
    // Reset Layout
    mainDiv.innerHTML = '';
    WinText.innerHTML = '';
    currentTurn = 0;
    layout();

    // Rest Board
    gameBoardArray = new Array(9).fill(NO_TOKEN);  

}