let baris = 3;
let star = "";

for (let i = 1; i <= baris; i++) {
 
  for (let j = 1; j <= baris - i; j++) {
    star += " "; // ini untuk ngatur jaraknya membuat kosong
  }
  
  for (let k = 0; k < 2 * i - 1; k++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);