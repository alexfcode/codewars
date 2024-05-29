// 56
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"


function expandedForm(num) {
    let array = []
    let step = num.toString().length - 1;
  while (step >= 0) {
       if (num / 10 ** step >= 1) {
       array.push(Math.floor(num / 10 ** step) + "0".repeat(step));
       array.push(" + ");
       }
       num %= 10 ** step;   
       step --;
       }
    return array.slice(0, -1).join("")
  }