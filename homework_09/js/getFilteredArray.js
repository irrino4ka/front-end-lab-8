function forEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

function getFilteredArray(arr, predicate) {

    let newArray = [];

    forEach(arr, (e) => {
        if (predicate(e)) newArray.push(e);
    })

    return newArray;
}

getFilteredArray([2, -2, 0], (e) => e >= 0); // [2, 0]
