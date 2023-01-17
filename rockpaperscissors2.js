const getUserChoice = () => {
    userChoice = prompt('Rock Paper Scissors. What do you pick?', "Rock");
    userChoice = userChoice.toLowerCase();
    if (userChoice === "rock") {
      return userChoice;
    } else if (userChoice === "paper") {
      return userChoice;
    } else if (userChoice === "scissors") {
      return userChoice;
    } else {
      alert("Invalid selection");
      return getUserChoice();
    }
  };
    
  let getComputerChoice = () => {
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
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    alert("You played: " + userChoice);
    alert("The computer played: " + computerChoice);
    alert(determineWinner(userChoice, computerChoice));
  };