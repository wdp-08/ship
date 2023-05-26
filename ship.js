  function star1(n) {
    let str = " ";
    for (let i = 1; i <= 2 * n; i++) {
      for (let j = 1; j <= i * 2 - 1; j++) {
        str += "*";
      }
      str += "\n";
    }
    console.log(str);
  }
  console.log("Star 1");
  star1(1);

  // function star3(n) {
  //   let str = " ";
  //   for (let i = 1; i <= n; i++) {
  //     for (let j = 1; j <= i * 2 - 1; j++) {
  //       str += "*";
  //     }
  //     str += "\n";
  //   }
  //   for (let i = n - 1; i >= 1; i--) {
  //     for (let j = 0; j <= 2 * n - i; j++) {
  //       str += "*";
  //     }
  //     str += "\n";
  //   }
  //   console.log(str);
  // }
  // star3(2);
  
  // function star4(n) {
  //   let str = "";
  //   for (let i = 1; i <= n; i++) {
  //     for (let j = 1; j <= i; j++) {
  //       str += "*";
  //     }
  //     str += "\n";
  //   }
  //   for (let i = n - 1; i >= 1; i--) {
  //     for (let j = 1; j <= i; j++) {
  //       str += "*";
  //     }
  //     str += "\n";
  //   }
  //   for (let i = 1; i <= n; i++) {
  //     for (let j = 1; j <= i; j++) {
  //       str += "*";
  //     }
  //     str += "\n";
  //   }
  //   for (let i = n - 1; i >= 1; i--) {
  //     for (let j = 1; j <= i; j++) {
  //       str += "*";
  //     }
  //     str += "\n";
  //   }
  //   console.log(str);
  // }

