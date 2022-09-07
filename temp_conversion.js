//Forecast for today in Kelvin
const kelvin = 0;
//Convert Kelvin to Celsius
let celsius = kelvin - 273;
//Convert Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//round farhenheit to whole number
fahrenheit = Math.floor(fahrenheit);
//print temp in fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
//convert celsius to newton
let newton = celsius * (33/100);
//round newton to whole number
newton = Math.floor(newton);
//print temp in newton
console.log(`The temperature is ${newton} degrees Newton`);