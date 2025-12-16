/*
Given two person names.

Each person has {"the first name" + "the second name"}

Determine whether they are brothers or not.

Note: The two persons are brothers if they share the same second name.

Input
First line will contain two Strings F1, S1 which donates the first and second name of the 1st person.

Second line will contain two Strings F2, S2 which donates the first and second name of the 2nd person.

Output
Print "ARE Brothers" if they are brothers otherwise print "NOT".
*/

function bloodline_check(name1, name2)
{
    let [F1, S1] = name1.split(" ");
    let [F2, S2] = name2.split(" ");

    if(S1 === S2) console.log("ARE Brothers");
    else console.log("NOT");
}


bloodline_check("Adityan Verma", "Priyanshu Verma");
bloodline_check("Rajesh Mehta", "Jagdish Mehta");
bloodline_check("Raju Agarwal", "Taklu Bajaj");
