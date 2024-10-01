/* ----------------Practice Code-------------------- */
/* let arr = [0,0,1,1,1,2,2,3,3,4,9,10,11];
let newArr = [];
let count = 0; 
for(let i=0; i<arr.length; i++){
    if(arr[i] !== arr[i+1]){
        newArr.push(arr[i]);
        count++;
    }
    
}
console.log(newArr);
console.log(count); */

/* ----------------Another way to Practice Code-------------------- */

/* let arr = [0,0,1,1,1,2,2,3,3,4,9,10,11];
let newArr = [];
let count = 0; 

var result = arr.filter((element, index,array)=>element!==array[index-1]);

console.log(result); */





/* ----------------Leet Code Problem Solve-------------------- */
/**
 * @param {number[]} nums
 * @return {number}
 */
/* var removeDuplicates = function (nums) {
    let count = 1;
    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[count] = nums[i+1];
            count++;
        }
    }
    return count;
}; */