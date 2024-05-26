function findShort(s){
    let word = s.split(" ")[0];
      for (n of s.split(" ")) {
          if (n.length < word.length) {
              word = n;
          }  
      }
      return word.length;
  }