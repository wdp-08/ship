let n = 2;
let string = "";

for (let i = 1; i <= n; i++) {
 
  for (let j = 1; j <= n - i; j++) {
    string += " "; // ini untuk ngatur jaraknya membuat kosong
  }
  
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);