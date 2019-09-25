// // 51. N-Queens/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let Qposition=[],
        res=[]
    function nqueen(k){
        if(k===n){
            let ans = []
            for(let i=0;i<n;i++){
                let str=''
                for(let j=0;j<n;j++){
                    if(Qposition[i]===j){
                        str+='Q'
                    }else{
                        str+='.'
                    }
                }
                ans.push(str)
            }
            res.push(ans)
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
    return res
};


// //
// // The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.
// Given an integer n, return all distinct solutions to the n-queens puzzle.
//
// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.
//
// Example:
//
// Input: 4
// Output: [
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
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.

// Runtime: 52 ms, faster than 99.78% of JavaScript online submissions for N-Queens.
// Memory Usage: 36.8 MB, less than 100.00% of JavaScript online submissions for N-Queens.
