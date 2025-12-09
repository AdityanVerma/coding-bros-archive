
// Given two numbers N and M. Print the summation of their last digits.

function digit_summation(N, M){

    console.log((N % 10) + (M % 10));
}

digit_summation(13, 12);  // 5
digit_summation(9, 6);    // 15
digit_summation(15, 98);  // 13