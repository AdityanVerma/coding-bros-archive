function memoMomo(a, b, k) {
  if (a % k === 0 && b % k === 0) {
    console.log("Both");
  } else if (a % k === 0) {
    console.log("Memo");
  } else if (b % k === 0) {
    console.log("Momo");
  } else {
    console.log("No One");
  }
}

memoMomo(15, 7, 3);
memoMomo(22, 10, 2);
memoMomo(21, 13, 4);
