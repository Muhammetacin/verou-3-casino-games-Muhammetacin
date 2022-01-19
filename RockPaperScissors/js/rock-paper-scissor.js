// VARIABLES: PLAYER AND COMPUTER
let player, computer, score = 0, gameNumber = 0, iconChoice = 0;
const CHOICES = ["Rock", "Paper", "Scissors"];
const CHOICES2 = ["Plane", "Car", "Bike"];


// PLAYER BUTTONS
const playerButtons = document.querySelector(".buttons");
const playerButton1 = playerButtons.children[0];
const playerButton2 = playerButtons.children[1];
const playerButton3 = playerButtons.children[2];
const playButton = playerButtons.children[3];

for(let playerButton of playerButtons.children) {
    playerButton.addEventListener("click", (e) => {
        winnerText.innerHTML = "";
        computerChoice.innerHTML = "";
        resetStyle();

        if(iconChoice == 0) {
            if(playerButton == playerButtons.children[0]) {
                player = CHOICES[0];
                console.log(player);
                selectButtonHighlight(e);
            }
            if(playerButton == playerButtons.children[1]) {
                player = CHOICES[1];
                selectButtonHighlight(e);
            }
            if(playerButton == playerButtons.children[2]) {
                player = CHOICES[2];
                selectButtonHighlight(e);
            }
        } 
        else if(iconChoice == 1) {
            if(playerButton == playerButtons.children[0]) {
                player = CHOICES2[0];
                console.log(playerButton.innerHTML);
                selectButtonHighlight(e);
            }
            if(playerButton == playerButtons.children[1]) {
                player = CHOICES2[1];
                selectButtonHighlight(e);
            }
            if(playerButton == playerButtons.children[2]) {
                player = CHOICES2[2];
                selectButtonHighlight(e);
            }
        } 
        else if(playerChoice === "") {
            playButton.disabled = true;
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
    if(iconChoice == 0) {
        computer = CHOICES[Math.floor(Math.random() * 3)];
    }
    else {
        computer = CHOICES2[Math.floor(Math.random() * 3)];
    }
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

        case "Plane":
            if(computer === "Plane") {
                winnerText.innerHTML = "Both player chose " + player + ". It's a draw :/";
                gameStatusStyle("draw");
            }
            if(computer === "Car") {
                winnerText.innerHTML = "Player wins! " + player + " is faster than " + computer + ".";
                score++;
                gameStatusStyle("win");
            }
            if(computer === "Bike") {
                winnerText.innerHTML = "Player loses. Bike is healthy!";
                // score--;
                gameStatusStyle("lose");
            }
            break;

        case "Car":
            if(computer === "Bike") {
                winnerText.innerHTML = "Player wins! " + player + " is faster than " + computer + ".";
                score++;
                gameStatusStyle("win");
            }
            if(computer === "Plane") {
                winnerText.innerHTML = "Player loses. " + computer + " has bigger motors than " + player + ".";
                // score--;
                gameStatusStyle("lose");
            }
            if(computer === "Car") {
                winnerText.innerHTML = "Both player chose " + player + ". It's a draw :/";
                gameStatusStyle("draw");
            }
            break;

        case "Bike":
            if(computer === "Car") {
                winnerText.innerHTML = "Player loses. " + computer + " is faster than " + player + ".";
                // score--;
                gameStatusStyle("lose");
            }
            else if(computer === "Bike") {
                winnerText.innerHTML = "Both player chose " + player + ". It's a draw :/";
                gameStatusStyle("draw");
            }
            else if(computer === "Plane") {
                winnerText.innerHTML = "Player wins! " + player + " is healthier.";
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
const reset = () => {
    scoreboardValue.innerHTML = "";
    winnerText.innerHTML = "";
    computerChoice.innerHTML = "";
    playerChoice.innerHTML = "";
    playButton.innerHTML = "PLAY";
    player = "";
    removeHighlightFromButtons();
    resetStyle();
};

resetButton.addEventListener("click", reset);

function removeHighlightFromButtons() {
    playerButton1.classList.remove("btnSelected");
    playerButton2.classList.remove("btnSelected");
    playerButton3.classList.remove("btnSelected");
}



// ChANGE WEAPON
const changeWeapon = scoreboard.children[1].children[0];

changeWeapon.addEventListener('click', () => {
    if(iconChoice == 1) {
        iconChoice = 0;
        reset();
        generateIconPack1();

    } else {
        iconChoice = 1;
        reset();
        generateIconPack2();
    }
});

const rockPaperScissorsIconPack = ["&#129704;", "&#128195;", "&#9986;"];
const planeCarBikeIconPack = ["&#9992;", "&#128663;", "&#128690;"];

const generateIconPack1 = () => {
    playerButton1.innerHTML = rockPaperScissorsIconPack[0];
    playerButton2.innerHTML = rockPaperScissorsIconPack[1];
    playerButton3.innerHTML = rockPaperScissorsIconPack[2];
};
const generateIconPack2 = () => {
    playerButton1.innerHTML = planeCarBikeIconPack[0];
    playerButton2.innerHTML = planeCarBikeIconPack[1];
    playerButton3.innerHTML = planeCarBikeIconPack[2];
};

generateIconPack1();