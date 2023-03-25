
function star(number) {
    for (let i = 1; i <= 2 * number; i++) {
        if (number != 1) {
            if (i != number + 1) {
                for (let j = 0; j <= 2 * number - i; j++) {
                    if (i >= number + 1) {
                        break;
                    }
                    process.stdout.write(' ')
                }

            }
        } else {
            if (i != number + 1) {
                for (let j = 0; j <= number - i; j++) {
                    process.stdout.write(' ')
                }

            }
            for (k = 0; k < 2 * i - 1; k++) {
                process.stdout.write('*')
            }
        }

        if (i <= number && number != 1) {
            for (k = 0; k < 2 * i - 1; k++) {
                process.stdout.write('*')
            }
        } else {
            if (number != 1) {

                if (i >= 2 * number) {
                    for (let j = 0; j < number; j++) {
                        process.stdout.write(' ')
                    }
                    for (k = 0; k <= 2 * i - (number*2); k++) {
                        process.stdout.write('*')
                    }
                }
                if (i == number + 1) {
                    for (k = 0; k <= 2 * i + number; k++) {
                        process.stdout.write('*')
                    }
                }
            }
        }




        console.log()
    }
}

star(2)
