document.body.onload = createGrid;
var mainDiv = document.getElementById("mainDiv");

let ar = new Array(9).fill(0);
console.log(ar);

clicks = 0
score = 0

// mark the board with X or O
function sign() {
    console.log(this);

    clicks++;                 // adds clicks. even numbers are X, odd numbers are O
    if (clicks % 2) {
        this.innerHTML = "x";
        TurnText.innerHTML = "O's turn!";
        ;

    } else {
        this.innerHTML = "o";
        TurnText.innerHTML = "X's turn!";
    }
}

//check scoring value

// check for win
var wins = [];

//reset button

//set board
function createGrid() {

    //title 
    var title = document.createElement('h2');
    title.innerHTML = "Tic-Tac-Toe";
    title.className = "h2 text-center";
    mainDiv.appendChild(title);

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
            col.id = "row" + i + "col" + j;
            col.addEventListener('click', sign);

            row.appendChild(col);
        }
        container.appendChild(row);
    }
    mainDiv.appendChild(container);
}

//display turn
var TurnText = document.createElement('h4');
TurnText.innerHTML = "It's X's turn!";
mainDiv.appendChild(TurnText);