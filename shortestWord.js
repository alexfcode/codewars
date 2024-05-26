// 32
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let word = s.split(" ")[0];
      for (n of s.split(" ")) {
          if (n.length < word.length) {
              word = n;
          }  
      }
      return word.length;
  }