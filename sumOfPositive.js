function positiveSum(arr) {
    sum = 0;
    for (const n of arr) {
      if (n > 0) {
        sum += n;
      }
    } return sum;
    
  }