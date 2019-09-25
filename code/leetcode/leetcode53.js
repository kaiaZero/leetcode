// 53. Maximum Subarray
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
//
// Example:
//
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:
//
// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
//

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let k =0,
        sum =0,
        max=0,
        nagtive =1,
        maxNagtive

    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            nagtive=0
        }else{
            maxNagtive=maxNagtive>nums[i]?maxNagtive:nums[i]
        }
       if(sum+nums[i]<0){
           sum=0
           k=i+1
       }else{
           sum+=nums[i]
           max=max>sum?max:sum
       }
    }
    if(nagtive===0){
        return max
    }else{
        return maxNagtive
    }
};


//solution 2
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max=nums[0]
    for(let i=1;i<nums.length;i++){
        nums[i]=nums[i]+nums[i-1]>nums[i]?nums[i]+nums[i-1]:nums[i]
        max=nums[i]>max?nums[i]:max
    }
    return max
};
