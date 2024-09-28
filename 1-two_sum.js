/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
};



/* --------Practice ------------ */


/* ---Brute Force Approach--- */
/* const arr =  [2,7,11,15];
const target = 9; 

for(let i=0; i<arr.length; i++){
    for(let j=1; j<arr.length; j++){
        if(arr[i] + arr[j] === target){
            console.log([i,j]);
        }
    }
} */

/* ------Map Method---- */

/* const arr =  [2,7,11,15];
const target = 9;  

const map = new Map();

for(let i=0; i < arr.length; i++){
    let rem = target - arr[i];
    if(map.has(rem)){
       return [map.get(rem),i]; 
    }else{
        return map.set(arr[i],i);
    }
} */

