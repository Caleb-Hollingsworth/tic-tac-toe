// add reusable code here
let player1 = 'X';
let player2 = 'O';
let currentPlayer = player1;
let playerTurn = document.querySelector('.playerTurn');
let gameBoard = document.querySelector('.gameboard');
const box = document.querySelectorAll('.grid-item');
for (let i = 0; i < box.length; i++) {
	box[i].position = i;
	box[i].addEventListener('click', checkBoxNotOccupied);
}
const restartButton = document.querySelector('.restartButton');
restartButton.addEventListener('click', startGame);
let winConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function checkWinCondition() {
	//here we will check for win conditions
}

function checkTieCondition() {
	//here we will check if there is a tie
}

function switchPlayers() {
	//here we will switch between `x` and `o`
	currentPlayer = currentPlayer === player1 ? player2 : player1;
	if (currentPlayer === player2) {
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
	document.getElementById('1').innerHTML = '';
	document.getElementById('2').innerHTML = '';
	document.getElementById('3').innerHTML = '';
	document.getElementById('4').innerHTML = '';
	document.getElementById('5').innerHTML = '';
	document.getElementById('6').innerHTML = '';
	document.getElementById('7').innerHTML = '';
	document.getElementById('8').innerHTML = '';
	document.getElementById('9').innerHTML = '';
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

// if (
// 	squareChoice[0].textContent === 'X' &&
// 	squareChoice[1].textContent === 'X' &&
// 	squareChoice[2].textContent === 'X'
// ) {
// 	alert('Player 1 Wins!');
// } else if (
// 	squareChoice[3].textContent === 'X' &&
// 	squareChoice[4].textContent === 'X' &&
// 	squareChoice[5].textContent === 'X'
// ) {
// 	alert('Player 1 Wins!');
// } else if (
// 	squareChoice[6].textContent === 'X' &&
// 	squareChoice[7].textContent === 'X' &&
// 	squareChoice[8].textContent === 'X'
// ) {
// 	alert('Player 1 Wins!');
// }
