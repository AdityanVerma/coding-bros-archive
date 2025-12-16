function comparison(expression) {
  let [num1, symbol, num2] = expression.split(" "); // split returns an array thats why destructuring does not work

  if (symbol === ">") {
    if (num1 > num2) {
      console.log("Right");
    } else {
      console.log("Wrong");
    }
  } else if (symbol === "<") {
    if (num1 < num2) {
      console.log("Right");
    } else {
      console.log("Wrong");
    }
  } else {
    if (num1 === num2) {
      console.log("Right");
    } else {
      console.log("Wrong");
    }
  }
}

comparison("5 > 4");
comparison("9 < 1");
comparison("4 = 4");
