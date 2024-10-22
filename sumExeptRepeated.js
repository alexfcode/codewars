function sumNoDuplicates(numList) {
    let sum =0
    for (n of numList) {
        let count = 0
        for (let i = 0; i < numList.length; i++) {
            if (n === numList[i]) {
              count++
            }
        }
        // console.log(n);
        // console.log(count);
        
        if (count === 1) {
            sum += n
        }
        // console.log(sum);
        
};
return sum
}

console.log(sumNoDuplicates([10, 9, 2, 8, 9, 10, 4, 6, 9, 5, 1, 1, 4, 3, 9, 7, 8, 5, 5]));

