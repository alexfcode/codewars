function sumArray(array) {
    if (Array.isArray(array) && array.length > 0) {
        let min = array[0];
        let max = min;
        for (const n of array) {
            if (n > max) {
                max = n;
            }
            if (n < min) {
                min = n;
            }
        }
    array.splice(array.indexOf(min), 1);
    array.splice(array.indexOf(max), 1);
    let summ = 0;
    array.map((item) => summ += item);
    return summ;
  } else {return 0};
}

console.log(sumArray(null))