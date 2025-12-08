
// QUES: Given two numbers A and B. Print "Multiples" if A is multiple of B or vice versa. Otherwise print "No Multiples".

const multiple = (A, B) => {
    if (A % B == 0 || B % A == 0) console.log("Multiples")
    else console.log("No Multiples")
}

multiple(9, 3);  // Multiples
multiple(6, 24); // Multiples
multiple(12, 5); // No Multiples
