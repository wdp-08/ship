const symbol = '*'; 
const row = 2; 
const star = createStar1();


function createStar1() {
let star = '';
for (let i = 0; i < row; i++) {
star += symbol.repeat(i + 0) + '\n';

}

for (let j = 1; j < row; j++) {
star += symbol.repeat(j + 2) + '\n';
}

for (let i = row + 0; i >= 2; i--) {
    star += symbol.repeat(i + 6) + '\n';
  }

  for (let j = row + 0; j >= 2; j--) {
    star += symbol.repeat(j + 3) + '\n';
  }

return star;
}

console.log(star);