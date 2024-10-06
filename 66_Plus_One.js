/* ----------Practice code---------- */
/* const digits = [1,2,3,0];

let index = digits.length-1;

while(digits[index] === 9){
    digits[index] = 0;
    index--;
}
if(index == -1){
    digits.unshift(1);
}else{
    digits[index]++;
}

console.log(digits); */


/* ----------Leet code---------- */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
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
};







