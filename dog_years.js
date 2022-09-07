//my age
const myAge = 35;
//early dog years
let earlyYears = 2;
earlyYears *= 10.5;
//calculate later years
let laterYears = myAge - 2;
//calculate dog years
laterYears *= 4;
//print earlyYears and laterYears
console.log(earlyYears);
console.log(laterYears);
//calculate my age in dog years
let myAgeInDogYears = earlyYears + laterYears;
//return my name as a string
let myName = 'Louis'.toLowerCase();
//print name and ages
console.log(`My name is ${myName}.  I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);