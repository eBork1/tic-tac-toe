document.body.onload = createGrid;
var mainDiv = document.getElementById("mainDiv");

function sign() {

}

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
            col.setAttribute('class', 'col-3 border');
            col.addEventListener('click', sign);

            row.appendChild(col);
        }
        container.appendChild(row);
    }
    mainDiv.appendChild(container);
}