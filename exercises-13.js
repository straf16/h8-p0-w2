function xo(str) {
    var hitungX = 0;
    var hitungO = 0;
    var something = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            hitungX++;
        } else if (str[i] === 'o') {
            hitungO++;
        } else {
            something++;
        }
    }
    if ((hitungX === hitungO) && (something === 0)) {
        return true;
    } else  if ((hitungX !== hitungO) && (something === 0)) {
        return false;
    } else if (something !== 0) {
        return 'terdapat karakter selain x/o'
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true