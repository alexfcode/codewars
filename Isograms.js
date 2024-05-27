// 45
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str2){
    let str = str2.toLowerCase();
    let test = true;
    for (i = 0; i < str.length; i++) {
      for (j = i + 1; j <= str.length; j++) {
        if (str[i] == str[j]) {
        test = false;
      }
    }
           }
           return test
  }