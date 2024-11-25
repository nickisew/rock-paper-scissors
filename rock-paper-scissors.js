var userInput = function getUserChoice(userInput) {
  if (userInput == "rock" || userInput == "paper" || userInput == "scissors") {
    return userInput;
  } else {
    return console.log("Error");
  }
};

userInput = userInput.toLowerCase();

var getComputerChoice = function getComputerChoice() {
  return (randomNumber = Math.floor(Math.random() * 3));
};

if ((randomNumber = 0)) {
  computerChoice("rock");
} else if ((randomNumber = 1)) {
  computerChoice("paper");
} else if ((randomNumber = 2)) {
  computerChoice("scissors");
}

var determineWinner = function determineWinner(userchoice, computerChoice) {
  if (userInput == computerChoice) {
    console.log("You tied.");
  } else if (userChoice == "rock" && computerChoice == "paper") {
    console.log("You lost.");
  } else if (userChoice == "rock" && computerChoice == "scissors") {
    console.log("You won.");
  } else if (userChoice == "paper" && computerChoice == "rock") {
    console.log("You won.");
  } else if (userChoice == "paper" && computerChoice == "rock") {
    console.log("You won.");
  } else if (userChoice == "scissors" && computerChoice == "rock") {
    console.log("You lost.");
  } else if (userChoice == "scissors" && computerChoice == "paper") {
    console.log("You won.");
  }
};
