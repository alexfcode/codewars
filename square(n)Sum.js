function squareSum(numbers){
    let sum = 0;
    if (numbers != null && numbers.length >0) {
      for (const n of numbers) {
        sum += n * n;
      }
    }
    return sum;
  }