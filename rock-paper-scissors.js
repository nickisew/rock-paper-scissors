var getUserChoice = function (userInput) {
  userInput =userInput.toLowerCase();

  if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
    return userInput;
  } else {
    console.log("Error");
  }
};

// Test getUserChoice
// var choice =getUserChoice('Rock');
// console.log(choice);


var getComputerChoice = function () {
  var randomNumber = Math.floor(Math.random() * 3)

  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else if (randomNumber === 2) {
  return 'scissors'
  }
};

var determineWinner = function (userchoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "You tied." }
  if (userChoice === "rock" && computerChoice === "paper") {
    return "You lost." }
  if (userChoice === "rock" && computerChoice === "scissors") {
    return("You won."); }
  if (userChoice === "paper" && computerChoice === "rock") {
    return("You won.");
  } if (userChoice === "paper" && computerChoice === "scissors") {
    return("You lost.");
  } if (userChoice === "scissors" && computerChoice === "rock") {
    return("You lost.");
  } if (userChoice === "scissors" && computerChoice === "paper") {
    return("You won.");
  }
};

// Test determineWinner

// var userChoice = getUserChoice('paper');
// var computerChoice = getComputerChoice();

// console.log(userChoice)
// console.log(computerChoice)

// var winnerText = determineWinner(userChoice, computerChoice);
// console.log(winnerText)

var playGame = function (userInput) {
  var userChoice = getUserChoice(userInput);
  var computerChoice = getComputerChoice();

  console.log('User Choice', userChoice);
    console.log('Computer Choice', computerChoice);

    var winnerText =determineWinner(userChoice, computerChoice);

    console.log(winnerText);
}

var userInput = prompt();

console.log(userInput);