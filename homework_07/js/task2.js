var attepmt = 3;
var maxPrize = 10;
var max = 5;
var currentPrize = 0;

var r = confirm("Do you want to play a game?");
if (r == true) {
    let n = Math.floor(Math.random() * max);
    let guessN = prompt('How do you think, the number is', 0);
    if (guessN !== parseInt(guessN)){
        console.log('Please input correct data');
    }

    if (guessN === n && attepmt!=0) {
        console.log('You [rize is: ', maxPrize)
    } else {
        attepmt--; 
    }
} else {
    console.log('You did not become a millionaire');
}