// VARIABLES: PLAYER AND COMPUTER
let player, computer, score = 0, gameNumber = 0, iconChoice = 0;
let extraOptions = true;
const CHOICES = ["Rock", "Paper", "Scissors"];
const CHOICES2 = ["Plane", "Car", "Bike"];
const CHOICES3 = ["Rock", "Paper", "Scissors", "Time", "Lizard", "Spock"];


// PLAYER BUTTONS
const playerButtons = document.querySelector(".buttons");
let playerButton1 = playerButtons.children[0];
let playerButton2 = playerButtons.children[1];
let playerButton3 = playerButtons.children[2];
let playButton = document.getElementById('playButton');

const addEventsOnButtons = () => {
    for(let playerButton of playerButtons.children) {
        playerButton.addEventListener("click", (event) => {
            winnerText.innerHTML = "";
            computerChoice.innerHTML = "";
            resetStyle();
    
            if(iconChoice == 0 && !extraOptions) {
                if(playerButton == playerButtons.children[0]) {
                    player = CHOICES[0];
                    selectButtonHighlight(event);
                }
                if(playerButton == playerButtons.children[1]) {
                    player = CHOICES[1];
                    selectButtonHighlight(event);
                }
                if(playerButton == playerButtons.children[2]) {
                    player = CHOICES[2];
                    selectButtonHighlight(event);
                }
            } 
            else if(iconChoice == 1 && !extraOptions) {
                if(playerButton == playerButtons.children[0]) {
                    player = CHOICES2[0];
                    selectButtonHighlight(event);
                }
                if(playerButton == playerButtons.children[1]) {
                    player = CHOICES2[1];
                    selectButtonHighlight(event);
                }
                if(playerButton == playerButtons.children[2]) {
                    player = CHOICES2[2];
                    selectButtonHighlight(event);
                }
            }
            else if(extraOptions && iconChoice == 0) {
                console.log("inside highlight block");
                if(playerButton == playerButtons.children[0]) {
                    player = CHOICES3[0];
                    console.log(playerButton.innerHTML);
                    selectButtonHighlight(event);
                }
                if(playerButton == playerButtons.children[1]) {
                    player = CHOICES3[1];
                    selectButtonHighlight(event);
                }
                if(playerButton == playerButtons.children[2]) {
                    player = CHOICES3[2];
                    selectButtonHighlight(event);
                }
                if(playerButton == playerButtons.children[3]) {
                    player = CHOICES3[3];
                    console.log("spock");
                    selectButtonHighlight(event);
                }
                if(playerButton == playerButtons.children[4]) {
                    player = CHOICES3[4];
                    selectButtonHighlight(event);
                }
                if(playerButton == playerButtons.children[5]) {
                    player = CHOICES3[5];
                    selectButtonHighlight(event);
                }
            }
            
            if(player == null || player == '') {
                playButton.disabled = true;
            } 
            else {
                playButton.disabled = false;
                playButton.innerHTML = "PLAY";
                playerChoice.innerHTML = "Player chooses '" + player + "'";
            }
        });
    }
};

addEventsOnButtons();

function selectButtonHighlight(button) {
    removeHighlightFromButtons();
    button.target.classList.add("btnSelected");
}

playButton.addEventListener("click", () => {
    resetStyle();
    if(iconChoice == 0) {
        computer = CHOICES[Math.floor(Math.random() * 3)];
    }
    else if(iconChoice == 1) {
        computer = CHOICES2[Math.floor(Math.random() * 3)];
    }
    else if(iconChoice == 0 && extraOptions) {
        computer = CHOICES3[Math.floor(Math.random() * 6)];
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

// Show score on pageload
scoreboardValue.innerHTML = score;

// Update score
function showScore() {
    scoreboardValue.innerHTML = score;
}



// RESET GAME
const resetButton = scoreboard.children[1].children[1];
const reset = () => {
    score = 0;
    scoreboardValue.innerHTML = score;
    winnerText.innerHTML = "";
    computerChoice.innerHTML = "";
    playerChoice.innerHTML = "";
    playButton.innerHTML = "PLAY";
    player = "";
    playButton.disabled = false;
    removeHighlightFromButtons();
    resetStyle();
};

resetButton.addEventListener("click", reset);

function removeHighlightFromButtons() {
    playerButton1.classList.remove("btnSelected");
    playerButton2.classList.remove("btnSelected");
    playerButton3.classList.remove("btnSelected");
    
    if(playerButtonTime && playerButtonLizard && playerButtonSpock) {
        playerButtonTime.classList.remove("btnSelected");
        playerButtonLizard.classList.remove("btnSelected");
        playerButtonSpock.classList.remove("btnSelected");
    }
}



// ChANGE WEAPON
const changeWeapon = scoreboard.children[1].children[0];

changeWeapon.addEventListener('click', () => {
    if(iconChoice == 1 && extraOptions == false) {
        iconChoice--;
        extraOptions = true;
        reset();
        generateIconPack1();
    }
    else {
        iconChoice++;
        extraOptions = false;
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



// TODO: ADD LIZARD & SPOCK & EXTRA OPTION
const advancedIconPack = ["&#9203;", "&#129422;", "&#128406;"];
let playerButtonTime;
let playerButtonLizard;
let playerButtonSpock;

// Create new buttons for the icons
const createExtraButtons = () => {
    for(let button = 0; button < 3; button++) {
        const newButton = document.createElement('button');
        newButton.innerHTML = advancedIconPack[button];
        newButton.classList.add("btn");
        playerButtons.appendChild(newButton);
    }

    console.log(playerButtons.children);
};

const reassignButtons = () => {
    if(extraOptions) {
        playerButtonTime = playerButtons.children[3];
        playerButtonLizard = playerButtons.children[4];
        playerButtonSpock = playerButtons.children[5];
    }
};

const deleteExtraOptions = () => {
    if(playerButtonSpock && playerButtonLizard && playerButtonTime) {
            playerButtons.removeChild(playerButtons.children[5]);
            playerButtons.removeChild(playerButtons.children[4]);
            playerButtons.removeChild(playerButtons.children[3]);

            console.log(playerButtons.children);
    }
}

const generateIconPack3 = () => {
    if(playerButtonTime && playerButtonLizard && playerButtonSpock && extraOptions) {
        playerButtonTime.innerHTML = advancedIconPack[0];
        playerButtonLizard.innerHTML = advancedIconPack[1];
        playerButtonSpock.innerHTML = advancedIconPack[2];
    }
};

const addOptionsBtn = scoreboard.children[1].children[2];

addOptionsBtn.addEventListener('click', () => {
    if(extraOptions) {
        createExtraButtons();
        reassignButtons();
        generateIconPack3();
        console.log(extraOptions);
        console.log(iconChoice);
        addEventsOnButtons();
        extraOptions = false;
    }
    else {
        deleteExtraOptions();
        extraOptions = true;
    }
});