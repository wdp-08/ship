for (let i = 0; i < 3; i++) {
  let row = "";
  let space = 2 - i;
  let star = 2 * i + 1;

  for (let j = 0; j < space; j++) {
    row += " ";
  }
  for (let k = 0; k < star; k++) {
    row += "*";
  }

  console.log(row);
}
