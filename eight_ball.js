//get user name and greet them
let userName = '';
userName ? console.log(`Hello,  ${userName}`) : console.log('Hello!');
//ask the user a question
const userQuestion = 'Will it rain today?';
console.log(`${userName}, ${userQuestion}`);
//generate random number
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
//switch statement for output
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'You suck';
    break;
}
//print answer
console.log(eightBall);