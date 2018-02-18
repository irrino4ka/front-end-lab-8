function forEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

function getTransformedArray(arr, func) {
    let newArray = [];
    forEach(arr, (e) => newArray.push(func(e)));
    return newArray;
}

getTransformedArray([1,2,3], (e) => e + 1);