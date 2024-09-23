// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

function boredom(staff){
    let score = 0;
    for (const key in staff) {
        switch(staff[key]) {
            case "accounts": score += 1
            break
            case "finance": score += 2
            break
            case "canteen": score += 10
            break
            case "regulation": score += 3
            break
            case "trading": score += 6
            break
            case "change": score += 6
            break
            case "IS": score += 8
            break
            case "retail": score += 5
            break
            case "cleaning": score += 4
            break
            case "pissing about": score += 25
            break
        }
      
    }
    return score <= 80 ? "kill me now" :
           score < 100 ?  "i can handle this" : "party time!!"
  }

  console.log(boredom({tim: 'change', jim: 'accounts',
    randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
    laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
    mr: 'finance' }));
  