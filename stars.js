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

return star;
}

console.log(star);