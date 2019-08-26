// Easy
//
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     for(let i= 0; i< nums.length; i++) {
//       for(let j = i + 1; j< nums.length; j++) {
//         console.log(i,j,i+j)
//         if (nums[i] + nums[j] === target) {
//           console.log(i,j,i+j)
//           return [i, j];
//         }
//       }
//     }
// };

function twoSum(nums, target) {
  let hash = {}
  for (let i = 0; i <nums.length; i++){
    if( nums[i] in hash ){
        return [hash[nums[i]], i];
    }
    hash[target - nums[i]] = i;
  }
}
const nums =[2,7,11,15]
let target = 9;
console.log(twoSum(nums, target))
