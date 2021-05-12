function factorial(n) {

  // while (n) {
  //   result *= n--;
  // }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}


