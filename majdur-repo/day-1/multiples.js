function multiple(num1, num2) {
    if(num1%num2===0 || num2%num1===0) {
        console.log("Multiples");
    }
    else {
        console.log("No Multiples");
    }
}

function multiple2(num1, num2) {      //more optima as comparison + % is better than 2%
    if(num1>num2) {
        if(num1%num2===0) {
            console.log("Multiples");
        }
        else {
            console.log("No Multiples");
        }
    }
    else {
        if(num2%num1===0) {
            console.log("Multiples");
        }
        else {
            console.log("No Multiples");
        }
    }
}

multiple(9, 3);  // Multiples
multiple(6, 24); // Multiples
multiple(12, 5); // No Multiples
multiple2(9, 3);  // Multiples
multiple2(6, 24); // Multiples
multiple2(12, 5); // No Multiples