// VARIABLES: PLAYER AND COMPUTER
let player, computer, score = 0, gameNumber = 0;
const CHOICES = ["Rock", "Paper", "Scissors"];
const CHOICES2 = ["Plane", "Car", "Horse"];


// PLAYER BUTTONS
const playerButtons = document.querySelector(".buttons");
const playerRock = playerButtons.children[0];
const playerPaper = playerButtons.children[1];
const playerScissors = playerButtons.children[2];
const playButton = playerButtons.children[3];

for(let playerButton of playerButtons.children) {
    playerButton.addEventListener("click", (e) => {
        winnerText.innerHTML = "";
        computerChoice.innerHTML = "";
        resetStyle();

        if(playerButton.innerHTML === "🪨" || playerButton == playerButtons.children[0]) {
            player = CHOICES[0];
            selectButtonHighlight(e);
        }
        if(playerButton.innerHTML === "📃" || playerButton == playerButtons.children[1]) {
            player = CHOICES[1];
            selectButtonHighlight(e);
        }
        if(playerButton.innerHTML === "✂" || playerButton == playerButtons.children[2]) {
            player = CHOICES[2];
            selectButtonHighlight(e);
        }

        playerChoice.innerHTML = "Player chooses '" + player + "'";
    });
}

function selectButtonHighlight(button) {
    removeHighlightFromButtons();
    button.target.classList.add("btnSelected");
}

playButton.addEventListener("click", () => {
    resetStyle();
    computer = CHOICES[Math.floor(Math.random() * 3)];
    computerChoice.innerHTML = "Computer chooses '" + computer + "'";
    gameNumber++;
    calculateResult();
    showScore();
    changePlayButtonText();
});

function changePlayButtonText() {
    if(gameNumber != 0) {
        playButton.innerHTML = "PLAY AGAIN";
    }
}



// GAME TEXTS
const playerChoice = document.querySelector(".texts").children[0];
const computerChoice = document.querySelector(".texts").children[1];
const winnerText = document.querySelector(".texts").children[2];



// DECLARING THE WINNER
function calculateResult() {
    switch(player) {
        case "Rock":
            if(computer === "Rock") {
                winnerText.innerHTML = "Both player chose Rock. It's a draw :/";
                gameStatusStyle("draw");
            }
            if(computer === "Scissors") {
                winnerText.innerHTML = "Player wins! Rock beats Scissors.";
                score++;
                gameStatusStyle("win");
            }
            if(computer === "Paper") {
                winnerText.innerHTML = "Player loses. Better luck next time.";
                // score--;
                gameStatusStyle("lose");
            }
            break;

        case "Paper":
            if(computer === "Rock") {
                winnerText.innerHTML = "Player wins! Paper beats Rock.";
                score++;
                gameStatusStyle("win");
            }
            if(computer === "Scissors") {
                winnerText.innerHTML = "Player loses. Scissors beats Paper.";
                // score--;
                gameStatusStyle("lose");
            }
            if(computer === "Paper") {
                winnerText.innerHTML = "Both player chose Paper. It's a draw :/";
                gameStatusStyle("draw");
            }
            break;

        case "Scissors":
            if(computer === "Rock") {
                winnerText.innerHTML = "Player loses. Rock beats Scissors.";
                // score--;
                gameStatusStyle("lose");
            }
            else if(computer === "Scissors") {
                winnerText.innerHTML = "Both player chose Scissors. It's a draw :/";
                gameStatusStyle("draw");
            }
            else if(computer === "Paper") {
                winnerText.innerHTML = "Player wins! Scissors beats Paper.";
                score++;
                gameStatusStyle("win");
            }
            break;

        default:
            computerChoice.innerHTML = "";
            winnerText.innerHTML = "Player hasn't chosen.";
            break;
    }
}

function gameStatusStyle(gameStatus) {
    if(gameStatus === "win")
        document.body.classList.add("gameWon");
    if(gameStatus === "lose")
        document.body.classList.add("gameLost");
    if(gameStatus === "draw")
        document.body.classList.add("gameDraw");
}

function resetStyle() {
    document.body.classList.remove("gameWon", "gameLost", "gameDraw");
    document.body.style.transition = "0.5s";
}



// SCOREBOARD
const scoreboard = document.querySelector(".scoreboard");
const scoreboardValue = scoreboard.children[0].children[0];

function showScore() {
    scoreboardValue.innerHTML = score;
}



// RESET GAME
const resetButton = scoreboard.children[1].children[1];

resetButton.addEventListener("click", () => {
    scoreboardValue.innerHTML = "";
    winnerText.innerHTML = "";
    computerChoice.innerHTML = "";
    playerChoice.innerHTML = "";
    playButton.innerHTML = "PLAY";
    player = "";
    removeHighlightFromButtons();
    resetStyle();
});

function removeHighlightFromButtons() {
    playerRock.classList.remove("btnSelected");
    playerPaper.classList.remove("btnSelected");
    playerScissors.classList.remove("btnSelected");
}