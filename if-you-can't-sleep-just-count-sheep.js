// ❓Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


// ✅Solution:
var countSheep = function (num){
    let str = ""
    if (num == "") {return ""} else {
    for (i = 1; i <= num; i++) {
      str += (i + " sheep...");
    }
    }
    return str;
  }

  console.log("countSheep: ", countSheep(5));



