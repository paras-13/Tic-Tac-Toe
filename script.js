const play = document.getElementById("play");
const screen = document.getElementById("screen");
const form = document.getElementById("form");
const playingMode = document.getElementById("playerMode");
const grid = document.getElementById("grid");
let currentChance = document.getElementById("currentChance");
let mode = 0;
let currentPlayer = 'X';
let array = Array(9).fill(null);
function twoPlayerMode() {
    document.getElementById("double").style.display = "block";
    playingMode.style.display = "none";
    play.style.display = "inline";
    screen.style.transition = "1s";
    screen.style.height = "500px";
    mode = 2;
}
function singlePlayerMode() {
    document.getElementById("single").style.display = "block";
    playingMode.style.display = "none";
    play.style.display = "inline";
    screen.style.transition = "1s";
    mode = 1;
}
function Play() {
    if (mode === 1)
        playSinglePlayer();
    else if (mode === 2) {
        playTwoPlayer();
    }
}

function playSinglePlayer() {
}

function playTwoPlayer() {
    let player1 = document.getElementById("player1").value;
    let player2 = document.getElementById("player2").value;
    document.getElementById("p1Name").innerHTML = "P1: " + player1 + " (X)";
    document.getElementById("p2Name").innerHTML = "P2: " + player2 + " (0)";
    document.getElementById("animative-video").style.display = "none";
    document.getElementById("double").style.display = "none";
    grid.style.display = "block";
    play.style.display = "none";
    currentChance.innerHTML = currentPlayer + " it's your turn";
}
function handleTwoPlayerGame(eve) {
    const id = Number(eve.id);
    if (array[id] === null) {
        array[id] = currentPlayer;
        eve.innerText = currentPlayer;
        let winner = checkWinner();
        if (winner==='X' || winner ==='0') {
            document.getElementById("twoPlayerResult").innerHTML = `Result: ${winner} won this round`;
            document.getElementById("twoPlayerReplay").style.display = "inline";
            currentChance.style.display="none";
            currentPlayer = "";
            return;
        }
        else if(winner === "Draw") {
            document.getElementById("twoPlayerResult").innerHTML = `Result: Round ${winner}`;
            document.getElementById("twoPlayerReplay").style.display = "inline";
            currentChance.style.display="none";
            currentPlayer = "";
            return;
        }
        currentPlayer = currentPlayer === 'X' ? '0' : 'X';
        currentChance.innerHTML = currentPlayer + " it's your turn";
    }
    else return;
}
function checkWinner() {
    if (
        (array[0] != null && array[0] == array[1] && array[1] == array[2]) ||
        (array[3] != null && array[3] == array[4] && array[4] == array[5]) ||
        (array[6] != null && array[6] == array[7] && array[7] == array[8]) ||
        (array[0] != null && array[0] == array[3] && array[3] == array[6]) ||
        (array[1] != null && array[1] == array[4] && array[4] == array[7]) ||
        (array[2] != null && array[2] == array[5] && array[5] == array[8]) ||
        (array[0] != null && array[0] == array[4] && array[4] == array[8]) ||
        (array[2] != null && array[2] == array[4] && array[4] == array[6])
    ) return currentPlayer;
    if(!array.some((e)=> e === null))
        return "Draw";
}
function replay() {
    for(let i=0; i<9; i++) {
        document.getElementById(i).innerHTML = " ";
    }
    document.getElementById("twoPlayerResult").innerHTML = " "
    document.getElementById("twoPlayerReplay").style.display = "none";
    array = Array(9).fill(null);
    currentPlayer = 'X';
    playTwoPlayer();
}