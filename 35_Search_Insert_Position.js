/* let nums = [1,3,4,6];
let target = 7; */

/* for(let i=0; i<nums.length; i++){
    if(nums[i] === target){
        console.log(i);
        break;
    }else if(nums[i]>target){
        console.log(i);
        break;
    }else if(nums[i] !== target){
        console.log(nums.lastIndexOf(i));
    }
} */

/* ----------------Leet Code--------------- */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
};