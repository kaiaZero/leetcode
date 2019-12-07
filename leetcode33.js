/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(!nums.length) return -1
    let res = -1
    function binary(l,r){
        if(l===r){
            if(nums[l]===target) res=l

        }else{
            let mid = Math.floor(l+(r-l)/2)
            if(nums[l]<=nums[mid] ){
                if(target<=nums[mid]&& target>=nums[l]){
                    binary(l,mid)
                }else{
                    binary(mid+1,r)
                }
            }else{
                if(target>=nums[mid+1] && target<=nums[r]){
                    binary(mid+1,r)
                }else{
                    binary(l,mid)
                }
            }
        }
    }
    binary(0,nums.length-1)
    return res
};
