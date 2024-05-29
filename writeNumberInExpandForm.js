
// 57
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.


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

// Nice solution:
// const expandedForm = n => n.toString()
//                             .split("")
//                             .reverse()
//                             .map( (a, i) => a * Math.pow(10, i))
//                             .filter(a => a > 0)
//                             .reverse()
//                             .join(" + ");