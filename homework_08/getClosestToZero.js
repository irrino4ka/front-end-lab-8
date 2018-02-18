function getClosestToZero(...args) {
    var numbers = args;
    var min = Math.min(...numbers.map((e) => Math.abs(e)));
    return args.indexOf(min) !== -1 ? min : -min;
}
