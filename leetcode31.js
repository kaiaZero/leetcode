/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length-1
    while(nums[i]-nums[i-1]<=0 && i>0){
        i--
    }
    if(i===0){
        return nums.reverse()
    }
    let a = nums[i-1],
        min=-1,
        index
    for(let j=i;j<nums.length;j++){
        if(nums[j]>a){
            if(min===-1){
                min = nums[j]
                index=j
            }else{
                if(nums[j]<min){
                    min = nums[j]
                    index = j
                }
            }

        }
    }
    nums.splice(index,1)
    nums.splice(i-1,0,min)
    let slice =nums.splice(0,i)
    nums.sort((a,b)=>a-b).splice(0,0,...slice)
};
