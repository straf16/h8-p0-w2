// 1. Melakukan Looping Menggunakan While
var count = 0;
console.log('LOOPING PERTAMA');
while (count < 20) {
    count += 2;
    console.log(count + ' - I love coding');
}
console.log('LOOPING KEDUA');
while (count > 0) {
    console.log(count + ' - I will become fullstack developer');
    count -= 2;
}

// 2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA');
for (var i = 1; i <= 20; i++) {
    console.log(i + ' - I love coding');
}
console.log('LOOPING KEDUA');
for (var j = 20; j >= 1; j--) {
    console.log(j + ' - I will become fullstack developer');
}

// 3. Angka Ganjil dan Genap
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log('GENAP');
    } else {
        console.log('GANJIL');
    }
}
for (var j = 1; j <= 100; j+=2) {
    if (j % 3 === 0) {
        console.log(j + ' KELIPATAN 3');
    } else {
        console.log('');
    }
}
for (var k = 1; k <= 100; k+=5) {
    if (k % 6 === 0) {
        console.log(k + ' KELIPATAN 6');
    } else {
        console.log('');
    }
}
for (var l = 1; l <= 100; l+=9) {
    if (l % 10 === 0) {
        console.log(l + ' KELIPATAN 10');
    } else {
        console.log('');
    }
}