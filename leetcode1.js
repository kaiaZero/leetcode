/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj={},
        len = nums.length
    for(let i=0;i<len;i++){
        if(!obj[nums[i]]){
            obj[nums[i]]=[i]
        }else{
            obj[nums[i]].push(i)
        }
    }
    for(let i = 0;i<len;i++){
        let tmp = target-nums[i]
        obj[nums[i]].shift()
        if(obj[tmp] && obj[tmp].length>0){
            return [i,obj[tmp][0]]
        }
}
};
