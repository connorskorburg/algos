//recursive sigma 
function rSigma(val){
    let count = 0;
    for(let i = 1; i <= val; i++){
        count += i;
    }
    return count;
}
// console.log(rSigma(15));

//recursive factorial
function rFact(val){
    let count = 1;
    if(val < 1){
        return 0;
    }
    else if(val > 0){
        for(let i = 1; i <= val; i++){
            count *= i;
        }
        return count;
    }
}
// console.log(rFact(6));
// console.log(rFact(-100));

//