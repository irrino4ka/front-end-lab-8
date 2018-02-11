function calculate(a,b,c){
    var c1 = parseInt(a);
    var c2 = parseInt(b);
    var c3 = parseInt(c);
    if (c1 <= 0 || c2 <= 0 || c3 <= 0) {
        console.log('One or more sides is unsuitable. Please provide correct values');
    }
    var max = Math.max(c1, c2, c3); 
    if (max == c1) {
        ifRight(max, c2, c3);
    } else if (max == c2) {
        ifRight(max, c1, c3); 
    } else {
        ifRight(max, c1, c2);
    }

    if (c1 == c2) {
        if (c1 == c3) {
            console.log('The triangle is Equilateral and it square is equal to ' + squareTriangle(c1, c2, c3));
        } else {
            console.log('The triangle is Isosceles and it square is equal to ' + squareTriangle(c1, c2, c3));
        }
    } else {
        console.log('The triangle is Scalene and it square is equal to ' + squareTriangle(c1, c2, c3));
    }
}

function squareTriangle (s1, s2, s3){
    var p = (s1 + s2 + s3)/2;
    return Math.sqrt(p * (p-s1) * (p-s2) * (p-s3)).toFixed(2);
}

function ifRight (g, c1, c2) {
    if (g*g == c1*c1 + c2*c2) {
        console.log('The triangle is Right and it square is equal to ' + squareTriangle(c1, c2, g));
    }
}

var a1 = prompt('First side', 5);
var a2 = prompt('Second side', 4);
var a3 = prompt('Third side', 3);
calculate(a1, a2, a3);