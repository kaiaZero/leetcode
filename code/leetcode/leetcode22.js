/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = []
      function recursion  (x, str, left, right){
        if(x<0){
          return
        }
        if (right > left || left > n || right > n) {
          return
        }
        if (left === n && right === n) {
          res.push(str)
        }
        const addleft = str + '(',
          addright = str + ')'
        recursion(x - 1, addleft, left+1, right)
        recursion(x - 1, addright, left, right+1)
      }
      recursion(2*n, '', 0, 0)
      return res
};
