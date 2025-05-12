function separateTypes(input) {
    const answer = {
      number: [],
      string: [],
      boolean: [],
      
    }
    
    for (const n of input) {
      answer[typeof(n)].push(n)
    }
    for (const key in answer) {
      if (answer[key].length === 0) {
        delete answer[key]
      }
    }
    return answer
  }