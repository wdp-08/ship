let a = 2
let star = ""

for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= a - i; j++) {
        star += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        star += "*";
    }
    star += "\n";
}

console.log(star);