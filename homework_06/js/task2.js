/*8.02 - dollar = 27.1196  euro = 33.4602*/

var dollar = prompt('How many dollars?', 10);
var euro = prompt('How many euros?', 10);

var dollarCourse = 27.1196;
var euroCourse = 33.4602

var dollarHrn = Math.round(dollar*dollarCourse* 100) / 100;
var euroHrn = Math.round(euro*euroCourse* 100) / 100;
var value = Math.round(euroCourse/dollarCourse* 100) / 100;

console.log(`${euro} euros are equal to ${euroHrn} UAH,
${dollar} dollars are equal to ${dollarHrn} UAH, 
one euro is equal to ${value} dollars`);

