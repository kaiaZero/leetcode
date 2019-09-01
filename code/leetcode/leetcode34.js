/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(!nums.length) return [-1,-1]
    let min = nums.length,
        max = -1
    function binary(l,r){
        if(l===r){
            if(nums[l]===target){
                min = l<min?l:min
                max = l>max?l:max
                return
            }
        }
        if(l<r){
            let mid = Math.floor(l+(r-l)/2)
            if(target<=nums[mid]){
                binary(l,mid)
            }
            if(target>=nums[mid]){
                binary(mid+1,r)
}
        }
    }
    binary(0,nums.length-1)
    min=min===nums.length?-1:min
    return [min,max]
};
