for(let i =0; i<2; i++){
    let str= "";
    for (let j = 2; j > i; j--) {
        str+= " ";
    }
    for (let k= 0; k <= i; k++) {
        str+= "*";
    }
    for (let l = 1;l <= i; l++) { 
        str+= "*";   
    }
    console.log(str);
}