/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {},
        len = nums.length
    for (let i=0;i<len;i++){
        if(!obj[nums[i]]){
            obj[nums[i]]=1
        }else{
            obj[nums[i]]++
        }
    }
    let key=Object.keys(obj)
    for(let i=0;i<key.length;i++){
        if((obj[key[i]])===1){
            return key[i]
        }
    }

};
