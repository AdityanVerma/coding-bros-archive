/*
Given a number N. Print the Fibonacci number of N.

Note: In order to create the Fibonacci sequence use the following function:
fib(1) = 0.
fib(2) = 1.
fib(n) = fib(n - 1) + fib(n - 2).

Input
Only one line containing a number N (1 ≤ N ≤ 50).

Output
Print the Fibonacci number of N.
*/

// ----------------------------- Fibonacci using Loops -----------------------------
function fibo_loops(N)
{
    // Starting sequence of fibonacci
    let firstFibo = 0;
    let secondFibo = 1;

    if (N > 0) {
        if (N == 1) console.log(firstFibo);
        else if (N == 2) console.log(secondFibo);
        else {
            let nextFibo;
            for (let i = 3; i <= N; i++) {
                nextFibo = firstFibo + secondFibo;
                firstFibo = secondFibo;
                secondFibo = nextFibo;
            }
            console.log(nextFibo);
        }
    } else console.log("INVALID INPUT!! :(");
}

// tests
// fibo_loops(0)   // INVALID INPUT!! :(
// fibo_loops(1)   // 0
// fibo_loops(5)   // 3
// fibo_loops(9)   // 21
// fibo_loops(15)  // 377

// ----------------------------- Fibonacci using Recursion -----------------------------
function fibo_recursion(N)
{
    if (N <= 0) return "INVALID INPUT!! :(";

    if (N === 1) return 0; // Base case
    if (N === 2) return 1; // Base case

    return fibo_recursion(N - 1) + fibo_recursion(N - 2); // Combine results
}

// tests
console.log(fibo_recursion(0))   // INVALID INPUT!! :(
console.log(fibo_recursion(1))   // 0
console.log(fibo_recursion(5))   // 3
console.log(fibo_recursion(9))   // 21
console.log(fibo_recursion(15))  // 377
