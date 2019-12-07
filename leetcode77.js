// 77. Combinations
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
       if(k===n){
           const temp =[]
           for(let i=1;i<k+1;i++){
               temp.push(i)
           }
           return [temp]
       }
       if(k===1){
           const temp2 =[]
           for(let i=1;i<n+1;i++){
               temp2.push([i])
           }
           return temp2
       }
       const temp3 = combine(n-1,k)
       const temp4 = combine(n-1,k-1)
       for(let i=0;i<temp4.length;i++){
           temp4[i].push(n)
       }
       return temp3.concat(temp4)
};

// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
//
// Example:
//
// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]
