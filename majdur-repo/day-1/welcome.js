function Welcome (num1, num2){
    if(num1>=num2){            //statement does no return a value
        console.log("Yes")
    }
    else{
        console.log("No");
    }
}
 
function Welcome2 (num1, num2){
    num1>=num2?console.log("Yes"):console.log("No");   //expression returns avalue
}

Welcome(10, 9); // Yes
Welcome(5, 5);  // Yes
Welcome(5, 7);  // No
Welcome2(10, 9); // Yes
Welcome2(5, 5);  // Yes
Welcome2(5, 7);  // No