function countSheeps(sheep) {
    let sum = 0
    for (i in sheep) {
      if (sheep[i]) {
        sum++
      }
    }
    return sum
  }