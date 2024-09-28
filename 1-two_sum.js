/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        for(let j=1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
};



/* --------Practice ------------ */
/* const arr =  [2,7,11,15];
const target = 9; 

for(let i=0; i<arr.length; i++){
    for(let j=1; j<arr.length; j++){
        if(arr[i] + arr[j] === target){
            console.log([i,j]);
        }
    }
} */