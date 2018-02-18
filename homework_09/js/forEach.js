function forEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

forEach([3, 5, 2], function(i) {
    console.log(i);
})