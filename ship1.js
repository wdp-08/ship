// Output 1
function Bintang() {
  for (let a = 1; a <= 2; a++) {
    let star = "";

    for (let b = 2; b >= a; b--) {
      star += " ";
    }

    for (let c = 1; c <= a; c++) {
      star += "*";
    }

    for (let d = 1; d <= a - 1; d++) {
      star += "*";
    }

    console.log(star);
  }
}
Bintang();
