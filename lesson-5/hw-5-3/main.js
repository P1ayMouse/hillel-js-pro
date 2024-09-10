let N = prompt("Введіть ціле число.");

for (let i = 1; i <= 100; i++)
{
    if (i**2 < N)
    {
        console.log(i);
    }
    else
    {
        break;
    }
}