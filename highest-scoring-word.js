function high(x){

    const y = x.split(" ");
    let out_max = [];
    let supermax = 0;
    
    for (n of y) {
        let str= ""
        let out = [];
        
        let max = 0;
        
        for (let i = 0; i < n.length; i++) {
            max += (n.charCodeAt(i) - 96);
            out.push(n.charCodeAt(i));
        }
        if (max > supermax) {
            supermax = max;
            out_max = out;
        }
    }
    return String.fromCharCode(...out_max);
      
    }