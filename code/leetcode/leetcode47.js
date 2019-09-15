
// 47. Permutations II
//
// Given a collection of numbers that might contain duplicates, return all possible unique permutations.
//
// Example:
//
// Input: [1,1,2]
// Output:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = []
    nums.sort((a,b)=>a-b)
    function recursion(arr,answer){
      if(!arr.length){
            res.push(answer)
        }
      for(let i=0;i<arr.length;i++){
        let temp = [...arr],
            del = temp.splice(i,1),
            ans = [].concat(answer)
        ans.push(...del)
        while(i<arr.length-1 && arr[i]===arr[i+1] ){
            i++
        }
        recursion(temp,ans)
      }
    }
    recursion(nums,[],[])
    return res
};
