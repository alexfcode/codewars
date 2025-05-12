// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    let count = 0;
    const voc = ["a", "e", "i", "o", "u"]
    for (const char of str) {
      console.log(char)
      if (voc.indexOf(char) != -1) {
        count++
      }
    }
    return count;
  }