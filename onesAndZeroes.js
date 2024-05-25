const binaryArrayToNumber = arr => {
    let sum = 0;
    let dig = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
      sum += dig * arr[i];
      dig *= 2;
    }
    return sum;
  };