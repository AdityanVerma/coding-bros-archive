/*
One day, Ali Baba had an easy puzzle that he couldn't solve.
The puzzle consisted of 4 numbers and his task was to check whether
he could get the fourth number using arithmetic operators (+,−,×)
between the other three numbers; so that each operator is used only once.

>>> a □ b □ c = d

+-
-+
+*
*+
-*
*-

Can you solve this tricky puzzle for him?

Input
Only one line containing four numbers a, b, c and d (−10^9 ≤ a,b,c ≤ 10^9),(−10^18 ≤ d ≤ 10^18).

Output
Print "YES" (without quotes) if you get the fourth number using arithmetic operators, otherwise, print "NO" (without quotes).
*/

function memo_and_momo(input)
{
    // Splitting the string and
    // converting them to Number using map method
    let [a, b, c, d] = input.split(" ").map(Number)

    if ((a + b - c) === d) return "YES"
    else if ((a + b * c) === d) return "YES"
    else if ((a * b + c) === d) return "YES"
    else if ((a * b - c) === d) return "YES"
    else if ((a - b + c) === d) return "YES"
    else if ((a - b * c) === d) return "YES"
    else return "NO"
}

console.log(memo_and_momo("3 4 5 23"));
console.log(memo_and_momo("9 5 3 7"));
console.log(memo_and_momo("1 2 3 1"));
