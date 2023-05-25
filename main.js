function start1(panjang, title) {
	console.log(title);
    let hasil = '';
    for (let i = panjang; i > 0; i--) {
        for (let j = 1; j <= panjang; j++) {
            if (j >= i) {
                hasil += '* ';
            } else {
                hasil += ' '
            }
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(start1(2, "star 1"));




function star(panjang, title) {
	console.log(title);
    let hasil = '';
    for (let i = panjang; i > 0; i--) {
        for (let j = 1; j <= panjang; j++) {
            if (j >= i) {
                hasil += '* ';
            } else {
                hasil += ' ';
            }
        }
        hasil += '\n';
    }
    for (let i = panjang; i > 0; i--) {
        for (let j = panjang ; j > 0; j--) {
            if (j > i) {
                hasil += ' ';
            } else {
                hasil += '* ';
            }
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(star(2, "Star 2"));
console.log(star(3, "Star 3"));
console.log(star(4, "Star 4"));


