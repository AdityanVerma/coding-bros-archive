/*
Given a number N and two arrays A, B of N numbers. Determine if B is a permutation of A or not.

Note: A permutation is an arrangement of all or part of a set of objects.

For example: The array [2, 1, 3], [3, 2, 1] and [2, 3, 1] are permutation of the array [1, 2, 3].

Input
First line contains a number N
 (1≤N≤103)
 Number of elements.

Second line contains N
 numbers (1≤Ai≤107)
 elements of array A
.

Third line contains N
 numbers (1≤Bi≤107)
 elements of array B
.

Output
Print "yes" if array B
 is a permutation of A
 otherwise, print "no" without quotations.
*/

function insertion_sort(n, arr)
{
    for (let i = 0; i < n; i++)
    {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            // swap
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;

            j--;
        }
    }
}

function permutation_with_array(n, arr1, arr2)
{
    insertion_sort(n, arr1);
    insertion_sort(n, arr2);

    let flag = 0;
    for (let i = 0; i < n; i++)
    {
        if (arr1[i] !== arr2[i]) {
            flag = 1;
            break;
        }
    }
    
    if (flag == 0) console.log("yes");
    else console.log("no");
}

permutation_with_array(4, [4, 2, 3, 7], [2, 3, 4, 9]);
permutation_with_array(5, [5, 1, 1, 9, 3], [1, 9, 1, 5, 3]);