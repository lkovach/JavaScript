let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnersAge = prompt('Runners age:');
//if statement to check registration and age
if (registeredEarly === true &&  runnersAge >= 18) {
  raceNumber += 1000;
}
if (runnersAge > 18 && registeredEarly === true) {
  alert('Your race time is 9:30 AM and your race number is ' + raceNumber);
} else if (runnersAge > 18 && !registeredEarly === true) {
  alert('Your race time is 11:00 AM and your race number is ' + raceNumber);
} else if (runnersAge < 18) {
  alert('You will race at 12:30 PM and your race number is ' + raceNumber);
} else {
  alert('Please see the registration desk');
}