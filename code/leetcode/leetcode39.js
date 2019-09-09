/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a,b)=>a-b)
    let res = []
    function recursion(nums,ans,sum){
        const answer1 = [...ans],
              answer2 = [...ans]
        answer1.push(nums[0])
        if(nums.length===0) return
        if(nums[0]===sum){
            res.push(answer1)
            return
        }else if(nums[0]>sum){
            return
        }else{

            recursion(nums,answer1,sum-nums[0])
            const arr = nums.slice(1)

            recursion(arr,answer2,sum)
        }
    }
    recursion(candidates,[],target)
    return res
};
