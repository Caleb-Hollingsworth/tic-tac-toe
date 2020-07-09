// add reusable code here
let player1 = 'X';
let player2 = 'O';
let currentPlayer = player1;
let playerTurn = document.querySelector('.playerTurn');
const squareChoice = document.querySelectorAll('.grid-item');
for (let i = 0; i < squareChoice.length; i++) {
	squareChoice[i].position = i + 1;
	squareChoice[i].addEventListener('click', checkBoxNotOccupied);
}

function checkWinCondition() {
	//here we will check for win conditions
}

function checkTieCondition() {
	//here we will check if there is a tie
}

function switchPlayers() {
	//here we will switch between `x` and `o`
	currentPlayer = currentPlayer === player1 ? player2 : player1;
	if (currentPlayer === player1) {
		playerTurn.innerText = "Player 2 it's your turn!";
	} else {
		playerTurn.innerText = "Player 1 it's your turn!";
	}
}

function checkBoxNotOccupied(event) {
	if (this.innerText == '') {
		placeToken(event);
	} else {
		alert('SPACE IS OCCUPIED');
	}
	let playerToken = document.createElement('p');
	playerToken.classList.add('hidden');

	//determine if the game box is clicked is empty
	//display currentPlayer token
	//else alert: space already occupied
}
function placeToken() {
	if (currentPlayer === player1) {
		event.target.innerText = 'X';
		switchPlayers();
	} else if (currentPlayer === player2) {
		event.target.innerText = 'O';
		switchPlayers();
	}
}

function startGame() {
	//self explanatory
	//possible restart operation
}

function turnSequence() {
	//all the things that happen when a user takes a turn

	//1.
	//2.

	switchPlayers();
}

function writeMessage(message) {
	//update the gameboard message with the message passed to it
}
