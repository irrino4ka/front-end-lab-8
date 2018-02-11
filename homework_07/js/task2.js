var maxPrize = 10;
var possiblePrize = 0;
var totalPrize = 0;
var numberMaxRange = 5;
var currentPrize = 0;
var r;

r = confirm("Do you want to play a game?");
if (r == true) {
    game(totalPrize, maxPrize, numberMaxRange);
} else {
    console.log('You did not become a millionaire');
}

function game(totalPrize, maxPrize, numberMaxRange){
        let attempt = 3;
        let n = Math.floor(Math.random() * numberMaxRange);
        let guessN = prompt(`Enter a number from 0 to ${numberMaxRange}.
        How do you think, the number is`, 0);
        if (guessN === null) return;
        if (guessN != parseInt(guessN)){
            console.log('Please input correct data');
        }
        currentPrize = maxPrize;
        while (attempt >1){
            if (guessN == n) {
                totalPrize = currentPrize + totalPrize;
                console.log('You prize is: ',totalPrize);
                r = confirm("Do you want to play a game?");
                if (r == true) {
                    game(totalPrize, maxPrize*3, numberMaxRange*2);
                } else {
                    console.log('Thank you for a game. Your prize is:', totalPrize);
                }
                break;
            } else {
                attempt--;
                currentPrize = Math.round(currentPrize/2);
                guessN = prompt(`Enter a number from 0 to ${numberMaxRange}.
                Attempts left ${attempt}.
                Total prize ${totalPrize}$.
                Possible prize on current attempt ${currentPrize}$.
                How do you think, the number is`, 0);
                if (guessN === null) break;
            }
        }
}
