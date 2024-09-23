function cycle (){
    let count = 0;
    let num;

    while (count < 10) {
        num = prompt("Введіть число більше 100.");

        if (num < 100) {
            count++;
        }
        else {
            break;
        }
    }

    console.log("Останнє введене число: " + num);
}

cycle();
