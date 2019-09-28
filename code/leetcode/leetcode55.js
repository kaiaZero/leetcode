/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max=0,
        len=nums.length
    if(len===1){
        return true
    }
    for(let i=0;i<len;i++){
        if(i>max){
            return false
        }
        nums[i]=i+nums[i]
        max=nums[i]>max?nums[i]:max
    }
    if(max>=len-1){
        return true
    }else{
        return false
    }
};
