function isPrime(number) {
    if (number < 2) {
        return false
    }
    if (number != Math.round(number)) {
        return false
    }
    var isPrime = true;

    for (var i = 2; i <= Math.sqrt(number); i++) {
       if (number % i == 0) {
           isPrime = false
        }
    }
 
    return isPrime; 
 }