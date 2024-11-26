var getUserChoice = function (userInput) {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error");
    return null; // Return a clear invalid value
  }
};

// Test getUserChoice
// var userChoice =getUserChoice('Rock');
// console.log(choice);

var getComputerChoice = function () {
  var randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
};

// Test getComputerChoice
// var computerChoice = getComputerChoice();
// console.log(computerChoice);

var determineWinner = function (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "You tied.";
  }
  if (userChoice === "rock" && computerChoice === "paper") {
    return "You lost.";
  }
  if (userChoice === "rock" && computerChoice === "scissors") {
    return "You won.";
  }
  if (userChoice === "paper" && computerChoice === "rock") {
    return "You won.";
  }
  if (userChoice === "paper" && computerChoice === "scissors") {
    return "You lost.";
  }
  if (userChoice === "scissors" && computerChoice === "rock") {
    return "You lost.";
  }
  if (userChoice === "scissors" && computerChoice === "paper") {
    return "You won.";
  }
};



// console.log(userChoice)
// console.log(computerChoice)

// Test determineWinner
// var winnerText = determineWinner(userChoice, computerChoice);
// console.log(winnerText)

var playGame = function (userInput) {
  var userChoice = getUserChoice(userInput);
  if (!userChoice) {
    console.log("Game aborted due to invalid user input.");
    return;
  }
  var computerChoice = getComputerChoice();

  console.log("User Choice", userChoice);
  console.log("Computer Choice", computerChoice);

  var winnerText = determineWinner(userChoice, computerChoice);

  console.log(winnerText);
};

// Prompt to get userInput, then call function
var userInput = prompt("Enter rock, paper, or scissors:");

playGame(userInput);