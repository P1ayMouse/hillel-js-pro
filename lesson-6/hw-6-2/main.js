function numAverage (arr) {
    let numbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number')
        {
            numbers.push(arr[i]);
        }
    }

    if (numbers.length !== 0) {
        let sum = 0;

        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i]
        }

        return sum / numbers.length;
    }
    else {
        return "Zero number elements"
    }
}

console.log(numAverage([null, "asdas", 2,undefined, 5, 2, true, 10, [10000, 123123, 1231241], 1]));
console.log(numAverage([null,"asdas",undefined, true, [10000, 123123, 1231241]]));
console.log(numAverage([null,"asdas",undefined, 0, true, [10000, 123123, 1231241]]));
console.log(numAverage([null,"asdas",undefined, -3, true, [10000, 123123, 1231241], -7]));
