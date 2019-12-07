// 128. Longest Consecutive Sequence
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let obj = {},
        max=0
    for(let i=0;i<nums.length;i++){
        if(!obj[nums[i]]){
            obj[nums[i]]=1
        }else{
            continue
        }
    }
    function check(num){
       let l=walkL(num-1),
           r=walkR(num+1)
        return 1+l+r
    }
    function walkL(num){
        if(!obj[num]) return 0
        else{
            obj[num]=0
            return 1+walkL(num-1)
        }
    }
        function walkR(num){
        if(!obj[num]) return 0
        else{
            return 1+walkR(num+1)
        }
    }
    for(let i=0;i<nums.length;i++){
        let m=check(nums[i])
        max=m>max?m:max
    }
     return max
};

// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
//
// Your algorithm should run in O(n) complexity.
//
// Example:
//
// Input: [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
