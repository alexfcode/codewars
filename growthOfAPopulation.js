// 47
// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.


function nbYear(p0, percent, aug, p) {
    let res = p0;
    let year = 0;
    while (res < p) {
      res += Math.floor(p0 / 100 * percent + aug);
      p0 = res;
      year ++;
    }
    return year;
  }


//   Nice solution:

//   function nbYear(p0, percent, aug, p) {
    
//     for (var years = 0; p0 < p; years++) {
//       p0 = Math.floor(p0 + p0 * percent / 100 + aug);
//     }
//     return years
//   }