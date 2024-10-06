/* ----------Practice code---------- */
//let digits = [0];
var plusOne = function(digits){
    for(let i=digits.length-1; i>=0; i--){
        digits[i]++;
        if(digits[i]>9){
            return digits[i] = 0; 
        }else{
            return digits; 
        }
    }
    //digits.unshift(1);
    //return digits;
}

console.log(plusOne([4,5,3,0]));




/* ----------Leet code---------- */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
/* var plusOne = function(digits) {
    for(let i=digits.length-1; i>=0; i--){
        digits[i]++;
        if(digits[i]>9){
            digits[i]=0;
        }else{
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
}; */







