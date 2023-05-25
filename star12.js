let n = 2;
let star1 = "";
let star2 = "";




for (let i = 1; i <= n; i++) {
    //jarak kosong
    for (let j = 0; j <= n * i; j++) {
        star1 += " ";
        star2 += " ";
    }

    for (let k = 0; k < 2 * i - 1; k++) {
        star1 += "*";
    }
    star1 += "\n";

    for (let l = 10; l > 4 * i - 2; l--) {
        star2 += "*";
    }
    star2 += "\n";


}
console.log(star1);
console.log(star2);