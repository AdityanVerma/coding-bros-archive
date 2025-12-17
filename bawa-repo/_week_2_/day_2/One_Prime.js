/*
Given a number X. Determine if the number is prime or not

Note:
A prime number is a number that is greater than 1 and has only two factors which are 1 and itself.
In other words : prime number divisible only by 1 and itself.
Be careful that 1 is not prime.

Input
Only one line containing a number X (2 ≤ X ≤ 105).

Output
print "YES" if the number is prime and "NO" otherwise.
*/

function one_prime(N)
{
    let flag = 1;

    if (N === 1) flag = 0;
    else {
        for (let i = 2; i < N / 2; i++)
        {
            if (N % i === 0) {
                flag = 0;
                break;
            }
        }
    }

    if (flag === 1) console.log("YES");
    else console.log("NO");
}

one_prime(7);
one_prime(15);
one_prime(53);
one_prime(1);
