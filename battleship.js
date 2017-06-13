

var moveArr = [];

function moveState(rows, columns){
	for(var i = 0; i < rows; i++){
		var emptyArr = [];
		moveArr.push(emptyArr);
		for (var j = 0; j < columns; j++){
			console.log(moveArr);
			moveArr[i].push(null);
		}
	};
};



function play(box) {
	var row = box.parentElement.getAttribute('row');
	var column = box.getAttribute('column');
		if(isEmpty(moveArr, row, column)){
			if (isEmpty(shipArr, row, column)){
				moveArr[row][column] = 'Miss';
				document.getElementById('hitMiss').innerHTML = 'Miss';
				nrMiss++
				ratioHitMiss();
			} else {
				moveArr[row][column] = 'Hit';
				document.getElementById('hitMiss').innerHTML = 'Hit';
				nrHit++
				ratioHitMiss();
			}
		}else{
			alert('It is not worth bombing same place twice')
		}
		populateBoard(moveArr);
		numBoard(10, 10);
};

function isEmpty(arr, row, column) {
	if (arr[row][column] == null){
		return true;
	} else {
		return false;
	}
};



function populateBoard(boardNow) {
	var board = document.getElementById('board').children[0].children;
	var row;
	var column;
	for(var i = 0; i < 10; i++) {
		row = board[i].children;
		for(var j = 0; j < 10; j++) {
			column = row[j];
			column.innerHTML = boardNow[i][j];
		};
	};
};


function createBoard(rows,columns){
	var board = document.getElementById('board');
	var row;
	var cell;
	for(var i = 0; i < rows; i++){
		row = board.insertRow(i);
		row.setAttribute('row', i)
		var rowId = 'row' + i;
		row.setAttribute('id', rowId)
		for(var j = 0; j < columns; j++){
			cell = row.insertCell(j)
			cell.setAttribute('column', j)
			var columnId = 'column' + j;
			cell.setAttribute('id', columnId)
			cell.setAttribute('onclick', 'play(this)')
		};
	};
};

function numBoard(rows, columns) {
	numArr = [
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
	['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'N']
];

	// populate zeroth row 
	var firstRow = document.getElementById('row0');
	for(var i = 1; i < rows; i++) {
		firstRow.children[i].innerHTML = numArr[0][i-1];
		};
	var firstCell = document.getElementsByTagName('table')[0];
	for(var j = 1; j < columns; j++){
		var rowId = 'row' + j;
		firstCell.rows[j].cells[0].innerHTML = numArr[1][j-1];
	};
};

var shipArr = [];

function shipBoardState(rows, columns){
	for(var i = 0; i < rows; i++){
		var emptyArr = [];
		shipArr.push(emptyArr);
		for (var j = 0; j < columns; j++){
			console.log(shipArr);
			if (Math.random() < 0.2){
			shipArr[i].push('ship');
			} else {
				shipArr[i].push(null);
			}
		}
	};
};

var nrHit = 0;
var nrMiss = 0;
function ratioHitMiss(){
	var answer = document.getElementById("hitMissRatio").innerHTML = nrHit/nrMiss;
	return answer;
}


function start(){
var valueX = 11;
var valueY = 11;
	createBoard(valueX,valueY);
	moveState(valueX,valueY);
	shipBoardState(valueX,valueY);
	numBoard(valueX, valueY);
};