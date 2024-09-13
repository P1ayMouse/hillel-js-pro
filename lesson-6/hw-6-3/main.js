function removeElement(array, item) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === item) {
            array.splice(i, 1);
        }
    }
}

const array = [1, 4, 3, 4, 6, 2, 5, 4, 7, 4, 4];

removeElement(array,4);

console.log(array); // Результат: [1, 3, 6, 2, 5, 7]