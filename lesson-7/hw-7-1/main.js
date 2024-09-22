function summariser() {
    let sumNum = 0;

    function innerSum(number) {
        sumNum += number;
        return sumNum;
    }

    return innerSum;
}

const sum = summariser();

console.log(sum(4)); // 4

console.log(sum(6)); // 10

console.log(sum(10)); // 20

console.log(sum(7)); // 27
