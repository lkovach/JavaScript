const getUserChoice = (userChoice) => {
    userChoice = userChoice.toLowerCase();
    if (userChoice === "rock") {
      return userChoice;
    } else if (userChoice === "paper") {
      return userChoice;
    } else if (userChoice === "scissors") {
      return userChoice;
    } else {
      return "Invalid selection";
    }
  };
  
  let getComputerChoice = (computerChoice) => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    } 
  };
  
  let determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "The game was a tie!";
    }
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Computer won!";
      } else {
        return "User won!";
      }
    }
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "Computer won!";
      } else {
        return "User won!";
      }
    }
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "Computer won!";
      } else {
        return "User won!";
      }
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice("scissors");
    const computerChoice = getComputerChoice();
    console.log("You played: " + userChoice);
    console.log("The computer played: " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  playGame();
  