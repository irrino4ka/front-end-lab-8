var symb = '[ ~ ]';
var space = '     ';
var number = prompt('Enter number from 1 to 10', 3);

if ((number > 10) || (number < 1) || ((number *10)/10 != parseInt(number))) {
    console.log('incorrect data!');
}
let s = '';

for (let i = 0; i<number; i++) {
    s+= space.repeat(number-i);
    s+= symb.repeat(2*i + 1);
    s+='\n';
}
console.log(s);
