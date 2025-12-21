/*
You are given an array a[0 … n−1] of length n consisting of non-negative integers.
Note that array indices start from 0.

An array is called **good** if the parity of each index matches the parity of the
element at that index.

More formally, an array is good if for all i (0 ≤ i ≤ n−1),
    i % 2 == a[i] % 2

where x % 2 is the remainder when x is divided by 2.

Examples:
- The arrays [0, 5, 2, 1] and [0, 17, 0, 3] are good.
- The array [2, 4, 6, 7] is bad because for i = 1,
  i % 2 = 1 but a[1] % 2 = 0.

In one move, you can take any two elements of the array and swap them
(they are not necessarily adjacent).

Your task is to find the minimum number of moves required to make the array good,
or determine that it is not possible.

Input:
- The first line contains a single integer t (1 ≤ t ≤ 1000),
  the number of test cases.
- For each test case:
  - The first line contains an integer n (1 ≤ n ≤ 40),
    the length of the array.
  - The second line contains n integers a0, a1, …, a(n−1)
    (0 ≤ ai ≤ 1000), the elements of the array.

Output:
For each test case, output a single integer — the minimum number of moves needed
to make the array good, or -1 if it is not possible.
*/

function even_array(n, arr)
{
    // Odd - Even Indexes and,
    // Odd - Even Values
    let oddIdx = Math.floor(n / 2);
    let evenIdx = n - oddIdx;
    let oddVal = 0;
    let evenVal = 0;

    // moves and flagCount
    // flagCount contain number of wrong parity
    // moves contain number of swaps needed or not swappable
    let moves = 0;
    let flagCount = 0;


    // flagging the indexes if parity is not matched
    // checking no. of odd - even values
    for (let i = 0; i < n; i++)
    {
        // no. of odd and even values
        if(arr[i] % 2 === 0) evenVal++;
        else oddVal++;

        // flagCount (parity checker)
        if(i % 2 !== arr[i] % 2) flagCount++;
    }


    // if number of odd and even values and index are equal,
    // also, if flag count is even that means,
    // they are swappable otherwise not
    if (oddIdx === oddVal && evenIdx === evenVal) {
        if (flagCount % 2 == 0) {
            moves = flagCount / 2;
        } else {
            moves = -1;
        }
    } else {
        moves = -1;
    }

    console.log(moves);
}

even_array(4, [3, 2, 7, 6]);             // 2
even_array(3, [3, 2, 6]);                // 1
even_array(1, [7]);                      // -1
even_array(7, [4, 9, 2, 1, 18, 3, 0]);   // 0
even_array(3, [0, 1, 1]);                // -1
even_array(3, [1, 1, 1]);                // -1
