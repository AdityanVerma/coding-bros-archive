/*
Given N numbers. Count how many of these values are even, odd, positive and negative.

Input
First line contains one number N (1 ≤ N ≤ 103) number of values.
Second line contains N numbers (-105 ≤ Xi ≤ 105).

Output
Print four lines with the following format:
First Line: "Even: X", where X is the number of even numbers in the given input.
Second Line: "Odd: X", where X is the number of odd numbers in the given input.
Third Line: "Positive: X", where X is the number of positive numbers in the given input.
Fourth Line: "Negative: X", where X is the number of negative numbers in the given input.

Note
First Example :
Even Numbers are : 0, -4 , 12
Odd Numbers are : -5 , -3
Positive Numbers are : 12
Negative Numbers are : -5 , -3 , -4
*/

function even_odd_positive_and_negative(N, nums)
{
    const numsArr = nums.split(" ").map(Number);

    let evenNums = 0;
    let oddNums = 0;
    let positiveNums = 0;
    let negativeNums = 0;

    for (const num of numsArr)
    {
        if (num == 0) {
            evenNums++;
        }
        
        else if (num < 0) {
            negativeNums++;
            if (Math.abs(num % 2 == 0)) evenNums++;
            else oddNums++;
        }

        else {
            positiveNums++;
            if (Math.abs(num % 2 == 0)) evenNums++;
            else oddNums++;
        }
    }
    
    console.log(`\n Even: ${evenNums}\n Odd: ${oddNums}\n Positive: ${positiveNums}\n Negative: ${negativeNums}\n`);
}

even_odd_positive_and_negative(5, "-5 0 -3 -4 12");
even_odd_positive_and_negative(5, "10 -3 25 0 -8");
even_odd_positive_and_negative(8, "-100000 99999 0 42 -17 500 -1 73");
