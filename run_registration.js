let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnersAge = 18;
//if statement to check registration and age
if (registeredEarly === true &&  runnersAge >= 18) {
  raceNumber += 1000;
}
if (runnersAge > 18 && registeredEarly === true) {
  console.log('Your race time is 9:30 AM and your race number is ' + raceNumber);
} else if (runnersAge > 18 && !registeredEarly === true) {
  console.log ('Your race time is 11:00 AM and your race number is ' + raceNumber);
} else if (runnersAge < 18) {
  console.log('You will race at 12:30 PM and your race number is ' + raceNumber);
} else {
  console.log('Please see the registration desk');
}