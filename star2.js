let baris = 2;
let star = "";
let star1 = "";

for (let i = 1; i <= baris; i++) {

    for (let j = 0; j <= baris - i; j++) {
        star += " "; // ini untuk ngatur jaraknya membuat kosong
    }

    for (let j = 0; j <= baris * i; j++) {
   
        star1 += " "; // ini untuk ngatur jaraknya membuat kosong
    }

    for (let k = 0; k < 2 * i - 1; k++) {
        star += "*";
    }
    star += "\n";

    for (let l = 10; l > 4 * i - 2; l--) {
        star1 += "*";
    }
    star1 += "\n";
}
console.log(star);
console.log(star1);