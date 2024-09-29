/* --------Leetcode Code for the program--------- */
/**
 * @param {string} s
 * @return {number}
 */
/* var romanToInt = function(s) {
    const obj= {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    let total = 0; 
    for(let i=0; i<s.length; i++){
        if(obj[s[i]] < obj[s[i+1]]){
            total = total - obj[s[i]];
        }else{
            total = total + obj[s[i]];
        }
    }
    return total;
}; */


/* ------------practice code this is also accepted----------- */

const obj= {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000
}

const s = "MCMXCIV";
const arr = s.split('');

var total = 0;


arr.forEach((value,index)=>{
    if(obj[value] < obj[arr[index+1]]){
        total-= obj[value];
    }else{
        total+=obj[value];
    }
});

console.log(total);






