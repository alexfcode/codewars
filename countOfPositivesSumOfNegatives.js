function countPositivesSumNegatives(input) {
    let countPos = 0;
    let sumNeg = 0;
    if (input !== null && input.length > 0) {
        for (const n of input) {
            n > 0 ? countPos ++ : sumNeg += n;
          }
          return [countPos, sumNeg];
    } else {
        return [];
    }
}
    console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));