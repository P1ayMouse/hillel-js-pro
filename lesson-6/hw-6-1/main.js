function func(str, arr) {
    for (let i = 0; i < arr.length; i++) {
        str = str.replaceAll(arr[i], "");
    }

    return str;
}

while (true)
{
    let userString = prompt("Введіть рядок.")
    let userArray = prompt("Введіть символи, які потрібно видалити, через пробіл.").split(" ")

    let result = func(userString, userArray);
    alert(`Відповідь: "${result}"`)
}
