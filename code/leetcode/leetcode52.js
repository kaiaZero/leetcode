// 52. N-Queens II

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let Qposition=[],
        res=[]
    function nqueen(k){
        if(k===n){
            res.push(Qposition)
        }
        for(let i=0;i<n;i++){
            let j=0
            for(j=0;j<k;j++){
                if(i===Qposition[j] || Math.abs(j-k)===Math.abs(Qposition[j]-i)){
                    break
                }
            }
            if(j===k){
                Qposition[k]=i
                nqueen(k+1)
                }
            }
    }
    nqueen(0)
    return res.length
};


// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.
// Given an integer n, return the number of distinct solutions to the n-queens puzzle.
//
// Example:
//
// Input: 4
// Output: 2
// Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
// [
//  [".Q..",  // Solution 1
//   "...Q",
//   "Q...",
//   "..Q."],
//
//  ["..Q.",  // Solution 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]
