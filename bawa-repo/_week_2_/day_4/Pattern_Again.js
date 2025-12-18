/*
Given an integer n(1<=n<=10), print n rows of the given pattern in minimum length.

1
2 3
6 5 4
7 8 9 10

*/

function pattern_again(N)
{
    let count = 1;

    for (let i = 0; i < N; ++i)
    {
        let temp = i;
        for (let j = 0; j <= i; j++, count++)
        {
            if (i % 2 == 0) {
                process.stdout.write(`${count + temp} `);
                temp = temp - 2;
            } else {
                process.stdout.write(`${count} `);
            }
        }
        console.log();
    }
}

console.log();

pattern_again(7);

console.log();