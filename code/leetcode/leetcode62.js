// 62. Unique Paths
//动态规划
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
   let dp = []
   for(let i=0;i<n;i++){
       dp[i]=[]
       for (let j=0;j<m;j++){
        if(i===0){
            dp[0][j]=1
       }else{
           if(j===0){
               dp[i][j]=1
           }else{
               dp[i][j]=dp[i-1][j]+dp[i][j-1]
           }

       }
       }
   }
   return dp[n-1][m-1]
};

//空间优化
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
   let dp = []
   for(let i=0;i<n;i++){
       for (let j=0;j<m;j++){
        if(i===0){
            dp[j]=1
       }else{
           if(j===0){
               dp[j]=1
           }else{
               dp[j]=dp[j-1]+dp[j]
           }
       }
       }
   }
   return dp[m-1]
};
//
// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
//
// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
//
// How many possible unique paths are there?

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right
