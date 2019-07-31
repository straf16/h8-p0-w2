// 1. Menyusun Barisan Bintang
var rows1 = 5; // input the number of rows

// do loops to display asterisks in the console.
for (var i = 0; i < rows1; i++) {
    console.log('*');
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5; // input the number of rows
var asterisks = '';

// do loops to display asterisks in the console.
for (var i = 0; i < rows2; i++) {
    for (var j = 0; j < rows2; j++) {
        asterisks += '*';
    }
    console.log(asterisks);
    asterisks = '';
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5; // input the number of rows
var asterisks2 = '';

// do loops to display asterisks in the console.
for (var i = 0; i < rows3; i++) {
    for (var j = 0; j <= i; j++) {
        asterisks2 += '*';
    }
    console.log(asterisks2);
    asterisks2 = '';
}