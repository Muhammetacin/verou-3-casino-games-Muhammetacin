// A secret number will be generated. To make things fair, the number should be between 1 and (learners in the class)
const input = document.getElementById("number");

const randomNumber =
  "Haha you can't exploit this! You'll never know what it is unless you play the GAME.";
let dratini = () => {
  return Math.floor(Math.random() * 22 + 1);
};

// A user can enter a guess (what html element can be useful for this?) = <input>
input.addEventListener("keyup", (event) => {
  const inputValue = event.target.value;
  if (inputValue == "") {
    alert("Please enter a valid number.");
    event.target.value = "";
  }
  if (inputValue <= 0 || inputValue > 22) {
    alert("You can't choose that.");
    event.target.value = "";
  }
});

input.addEventListener("change", (event) => {
  const inputValue = event.target.value;
  if (inputValue == "") {
    alert("Please enter a valid number.");
    event.target.value = "";
  }
  if (inputValue <= 0 || inputValue > 22) {
    alert("You can't choose that.");
    event.target.value = "";
  }
});

// When he or she pushes the "play" button, the number will be compared to the secret number
const guessButton = document.getElementById("button");

// Depending on the outcome, an alert box will show:
guessButton.addEventListener("click", () => {
  if (input.value == "") {
    alert("Please enter a valid number.");
  } else {
    const dratiniNr = dratini();

    if(input.value == dratiniNr - 1 || input.value == dratiniNr + 1) {
      alert("So close, but you just missed it! Are you in a class that started on the thirteenth or what?");
    } 
    // Bummer.. You guessed (guess) and the secret number was (secret number).
    else if (input.value != dratiniNr) {
      alert(
        "Bummer.. You guessed " +
          input.value +
          " and the secret number was " +
          dratiniNr +
          "."
      );
      input.value = "";
    }
    // Awesome! You number (actual number) was correct. You can be named many things, hungry not being one of them.
    else if (input.value == dratiniNr) {
      alert(
        "Awesome! You number " +
          input.value +
          " was correct. You can be named many things, hungry not being one of them."
      );
      input.value = "";
    }
  }
});
