function xo(str) {
    var hitungX = 0;
    var hitungO = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            hitungX++;
        } else if (str[i] === 'o') {
            hitungO++;
        }
    }
    if (hitungX == hitungO) {
        return true;
    } else {
        return false;
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true