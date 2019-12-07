/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const obj = {}
    for(let i=0;i<nums.length;i++){
      if(!obj[nums[i]]){
          obj[nums[i]]=1
      }else{
          obj[nums[i]]--
      }
    }
    const keys = Object.keys(obj)
    for(let i=0;i<keys.length;i++){
        if(obj[keys[i]]){
            return keys[i]
        }
    }
};
