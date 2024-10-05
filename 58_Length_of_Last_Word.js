/* -----------Practice code----------- */

var string = "      kajal bormon     ";

var newString = string.trim();

const n = newString.length;

let count = 0;
for(let i=n-1; i>=0; i--){
    if(newString[i] !== ' '){
        count++
    }else if(newString[i] === ' '){
        break;
    }
}
console.log(count);


/* -------------Let Code----------- */
/**
 * @param {string} s
 * @return {number}
 */
/* var lengthOfLastWord = function(s) {
    let count = 0;
    let newString = s.trim();
    let n = newString.length;
    for(let i=n-1; i>=0; i--){
        if(newString[i] !== ' '){
            count++;
        }else if(newString[i] === ' '){
            break;
        }
    }
    return count;
}; */

