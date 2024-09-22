function name(first) {
    return function (second) {
        return first * second;
    }
}

console.log(name(5)(2));
