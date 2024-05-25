    let str2 = ""
    str2[0] = str[0].toUpperCase();  
    for (let i = 1; i <= str.length; i++ ) {
      if (str[i - 1] == " ") {
        str2 += str[i].toUpperCase()
      } else {
        str2 += str[i];
      }
    }
    console.log(str2);
