/*
Given 3 numbers A, B and C, Print the minimum and the maximum numbers.

Input
Only one line containing 3 numbers A, B and C ( - 105 ≤ A, B, C ≤ 105)

Output
Print the minimum number followed by a single space then print the maximum number.
*/

function min(A, B, C)
{
    let min = Number.MAX_VALUE

    if (A < B) {
        if (A < C) min = A;
        else {
            if (B < C) min = B;
            else min = C;
        }
    } else {
        if (B < C) min = B;
        else min = C;
    }

    return min;
}

function max(A, B, C)
{
    let max = Number.MIN_VALUE

    if (A > B) {
        if (A > C) max = A;
        else {
            if (B > C) max = B;
            else max = C;
        }
    } else {
        if (B > C) max = B;
        else max = C;
    }

    return max;
}

function max_and_min(expression)
{
    let [A, B, C] = expression.split(" ");

    console.log(min(A, B, C), max(A, B, C));
}

max_and_min("1 2 3");
max_and_min("-1 -2 -3");
max_and_min("10 20 -5");
