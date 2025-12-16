/*
Given a number N. Print all the divisors of N in ascending order.

Input
Only one line containing a number N (1 ≤ N ≤ 104).

Output
Print all positive divisors of N, one number per line.

Note
Divisor of Number is A number that divides the integer exactly (no remainder).
In other words the division works perfectly with no fractions or remainders involved.

*/

function divisors(N)
{
    for (let i = 1; i <= N/2; i++)
    {
        if (N % i == 0) console.log(i);
    }
    console.log(N);
    console.log();
}

divisors(6);
divisors(7);
divisors(4);
divisors(10000000000); // Very costly
