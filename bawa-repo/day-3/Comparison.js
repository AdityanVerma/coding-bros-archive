/*
Given a comparison symbol S between two numbers A and B. Determine whether it is Right or Wrong.

The comparison is as follows: A < B, A > B, A = B.

Where A, B are two integer numbers and S refers to the sign between them.

Input
Only one line containing A, S and B respectively (-100  ≤  A, B  ≤  100), S can be ('<', '>','=') without the quotes.

Output
Print "Right" if the comparison is true, "Wrong" otherwise.
*/

function comparison(expression)
{
    let [A, S, B] = expression.split(" ");

    switch (S) {
        case ">":
            if (A > B) console.log("Right");
            else console.log("Wrong");
            break;

        case "<":
            if (A < B) console.log("Right");
            else console.log("Wrong");
            break;

        case "=":
            if (A == B) console.log("Right");
            else console.log("Wrong");
            break;
    
        default:
            break;
    }
}

comparison("5 > 4");
comparison("9 < 1");
comparison("4 = 4");
