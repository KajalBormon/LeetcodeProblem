/* --------------Practice Code------------ */
let nums = [0,1,2,2,3,0,4,2];
let val = 2;
let newArr = [];
let count = 0; 
for(let i=0; i<nums.length; i++){
    if(val !== nums[i]){
        newArr.push(nums[i]);
        count++;
    }
}

console.log(newArr);
console.log(count);



/* --------------Leet Code------------ */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/* var removeElement = function (nums, val) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (val !== nums[i]) {
            nums[count] = nums[i];
            count++;
        }
    }
    return count;
}; */