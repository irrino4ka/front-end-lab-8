function reverseNumber (number) {
    var numberAsString =  number.toString();
    var reversed = numberAsString.split('').reverse().join('');
    if (number > 0) {
        return reversed;
    } else {
        return `-${reversed.slice(0, numberAsString.length - 1)}`;
    } 
}
