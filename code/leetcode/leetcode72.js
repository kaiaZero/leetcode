// 72. Edit Distance
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const res = [],
          len1 = word1.length,
          len2 = word2.length
    for(let i=0;i<=len1;i++){
        res[i]=[]
        for(let j=0;j<=len2;j++){
            if(i===0){
                res[i][j]=j
            }else{
                if(j===0){
                  res[i][j]=i
                }else{
                  if(word1[i-1]===word2[j-1]){
                      res[i][j]=Math.min(res[i-1][j]+1,res[i][j-1]+1,res[i-1][j-1])
                  }else{
                      res[i][j]=Math.min(res[i-1][j],res[i][j-1],res[i-1][j-1])+1
                  }
                }
            }
        }
    }
    return (res[len1][len2])
};

//
// Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.
//
// You have the following 3 operations permitted on a word:
//
// Insert a character
// Delete a character
// Replace a character
// Example 1:
//
// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation:
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')
// Example 2:
//
// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation:
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')
