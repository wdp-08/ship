let n = 2;
let string = "";


for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= n * i - 1; j++) {
        string += " "; // ini untuk ngatur jaraknya membuat kosong
    }

    for (let l = 10; l > 4 * i - 2; l--) {
        string += "*";
    }
    string += "\n";
}
console.log(string);