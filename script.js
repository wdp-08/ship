function star(n) {
    for (let i = 1; i <= 2 * n; i++) {
        let string = "";
        if (n == 1) {
            for (let j = 0; j <= n - i; j++) {
                string += " ";
            }
            // jika  k < 2 * i -1, maka print bintang
            // misal 2 * 1 - 1 = 1, dst
            for (let k = 0; k < 2 * i - 1; k++) {
                string += "*"
            } 
        } else {
            // jika n = 2
            if (n == 2) {
                if (i <= n) {
                    // jika j < 2 * n - i, maka print dibaris sesuai hasil
                    for (let j = 0; j <= 2 * n - i; j++) {
                        // 2 * 2 - 1 = 3, maka print dibaris ketiga
                        string += " ";
                    }
                    for (let k = 0; k < 2 * i - 1; k++) {
                        // 2 * 1 - 1 = 1, 2 * 2 - 1 = 3, maka print bintang
                        string += "*"
                    } 
                } 
                if (i == n + 1) {
                    for (k = 0; k <= 2 * i + n; k++) {
                        // 2 * 3 + 3 = 9, maka print bintang
                        string += "*"
                    }
                }
                if (i >= 2 * n) {
                    for (let j = 0; j < n; j++) {
                        string += " ";
                    }
                    for (k = 0; k <= 2 * i - (n * 2); k++) {
                        string += "*"
                    }
                }
            }
        } 

        if (n == 3) {
            if (i <= n) {
                // jika j < 2 * n - i, maka print dibaris sesuai hasil
                for (let j = 0; j <= 2 * n - i + 1; j++) {
                    // 2 * 6 - 1 = 5, maka print dibaris kelima
                    string += " ";
                }
                for (let k = 0; k < 2 * i - 1; k++) {
                    string += "*"
                } 
            } 
            if (i == n + 1) {
                for (k = 0; k <= 2 * i + (n + 3); k++) {
                    string += "*"
                }
            }
            if (i == n + 2) {
                for (let j = 0; j <= 2 * n - i ; j++) {
                    string += " ";
                }
                for (k = 0; k <= 2 * i + (n - 3); k++) {
                    string += "*"
                }
            }
            if (i == n + 3) {
                for (let j = 0; j <= n ; j++) {
                    string += " ";
                }
                for (k = 0; k <= 2 * i - (n + 3); k++) {
                    string += "*"
                }
            }
        }
        
        console.log(string);
    }
}

console.log("Star 1");
star(1)
console.log("Star 2");
star(2)
console.log("Star 3");
star(3)
