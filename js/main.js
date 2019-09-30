document.body.onload = createGrid;
var mainDiv = document.getElementById("mainDiv");
var status;
 

let ar = new Array(9).fill(0);
console.log(ar);
var wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
clicks = 0

// mark the board with X or O
function sign() {
    console.log(this);
    var q = this.id.split("col");
    var idx = (Number(q[0]) * 3 + Number(q[1]));
    if (ar[idx] === 0) {
        clicks++;                 // adds clicks. even numbers are X, odd numbers are O
        if (clicks % 2) {
            this.innerHTML = "x";
            TurnText.innerHTML = "O's turn!";
            ar[idx] = 2;

        } else {
            this.innerHTML = "o";
            TurnText.innerHTML = "X's turn!";
            ar[idx] = 1;
        }
        checkWin();
    }
}

//check value
function checkValue(a, b, c) {
    if (ar[a] == 0 || ar[b] == 0 || ar[c] == 0) {
        return 0;
    }
    var sum = ar[a] + ar[b] + ar[c];
    if (sum == 3) {
        return 2;
    }
    if (sum == 6) {
        return 1;
    }
    return 0;
}

// check for win
function checkWin() {
    for (let i = 0; i < wins.length; i++) {
        var a = checkValue(wins[i][0], wins[i][1], wins[i][2]);
        if (a) {
            var TurnText = document.createElement('h4');
            TurnText.innerHTML = "Player " + a + " WINS!";
            mainDiv.appendChild(TurnText);
            ar.fill(3);
            console.log(ar);
            break;
        }
    }
}

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
            col.id = i + "col" + j;
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