function star(param) {
  // console.log("// output");

  for (let i = 0, k = 3 * param - 2; i < param; i++, k -= 1) {
    let baris = "";
    for (let j = 0; j < k; j++) {
      baris += " ";
    }
    for (let j = 0; j < i * 2 + 1; j++) {
      baris += "*";
    }
    console.log(baris);
  }

  for (
    // let i = param * 2 + 1 + (param - 1) * 4, k = 0;
    // x * 2 + 1 + (x - 1) * 4;
    // 2x + 1 + 4x - 4
    // 6x - 3
    let i = 6 * param - 3, k = 0;
    i > param * 2;
    i -= 4, k += 2
  ) {
    let baris = "";
    for (let j = 0; j < k; j++) {
      baris += " ";
    }
    for (let j = 0; j < i; j++) {
      baris += "*";
    }
    console.log(baris);
  }
}

for (let i = 1; i < 5; i++) {
  console.log(`star(${i})`);
  star(i);
}

let res = "";
for (let i = 0; i < 5; i++) {
  console.log(i);
  res += "*";
}
console.log(res);
