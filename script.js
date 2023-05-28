function ship(num){
    let result = '';
    for (let i = 0; i < num; i++) {
        for (let j = 1; j < num * 2 - i; j++) {
            result += ' '  
        } 
        for (let j = 1; j < 2 * (i + 1); j++) {
            result += '*'   
        } 
        result += '\n'
    } 
    for (let x = 0; x < num; x++) {
        for (let y = 1; y <= x; y++) {
            result += ' '  
        } 
        for (let z = num; z >= (x * 2 - num ** 2); z--) {
            result += '*' 
        }
        result += '\n'
    }
    return result;
}

console.log(ship(1));
console.log(ship(2));
console.log(ship(3));
console.log(ship(4));