let number = prompt("Введіть ціле число.");
let primeNumber = true;

if (number > 1)
{
    for (let i = 2; i < number; i++)
    {
        if (number % i === 0)
        {
            primeNumber = false;
            console.log("Число не є простим")
            break;
        }
    }
    if (primeNumber === true)
    {
        console.log("Число є простим")
    }
}
else
{
    console.log("Число має бути більше 1")
}