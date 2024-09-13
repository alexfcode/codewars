// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


function solution(str){
    let str1 = ''
    for (i = str.length - 1; i >= 0; i--) {
      str1 += str[i];
    }
    return str1 
  }