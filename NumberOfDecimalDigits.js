// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

function digits(n) {
  let num = 0;

  if (n > 0) {
    while (n > 0) {
      num = num + 1;
      n = Math.floor(n / 10);
    }
    return num;
  } else {
    return 1;
  }
}

console.log(digits(0));
