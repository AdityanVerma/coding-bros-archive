function maxMin(num1, num2, num3) {
  let max, min;
  if (num1 < num2) {
    if (num1 < num3) {
      min = num1;
    }
    num2 < num3 ? (max = num3) : (max = num2);
  } else if (num2 < num1) {
    if (num2 < num3) {
      min = num2;
    }
    num1 < num3 ? (max = num3) : (max = num1);
  }
  if (num3 < num1) {
    if (num3 < num2) {
      min = num3;
    }
    num1 < num2 ? (max = num2) : (max = num1);
  }

  console.log(min, " ", max);
}

maxMin(1, 2, 3);
maxMin(-1, -2, -3);
maxMin(10, 20, -5);
