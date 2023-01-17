//get the user's name and greet them
let userName = prompt('What is your name?');
//user asks a question
let userQuestion = prompt('Ask the magic 8 ball a question');
//generate answer from random number
let randomNumber = Math.floor(Math.random() * 8);
let answer = '';
//switch statement for answers
switch (randomNumber) {
    case 0:
        answer = 'It is certain';
        break;
    case 1:
        answer = 'It is decidedly so';
        break;
    case 2:
        answer = 'Without a doubt';
        break;
    case 3:
        answer = 'Yes - definitely';
        break;
    case 4:
        answer = 'You may rely on it';
        break;
    case 5:
        answer = 'As I see it, yes';
        break;
    case 6:
        answer = 'Most likely';
        break;
    case 7:
        answer = 'Outlook good';
        break;
    default:
        answer = 'No';
        break;
}
//print answer
alert('Hello, ' + userName + ' 8 ball says: ' + answer);