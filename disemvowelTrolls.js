function disemvowel(str) {
    const v = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let newStr = ""
    for (i = 0; i <= str.length; i++) {
      if (!v.includes(str[i])) {
        newStr += str[i]
    }
    }
      return newStr;
  }

  log
