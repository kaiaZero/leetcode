/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
let arr = s.split(''),
      res = []
      while (arr.length > 0) {
        let temp = arr.shift()
        if (temp === '') {
        }
        else if (temp === '(' || temp === '[' || temp === '{') {
          res.push(temp)
        } else {
          if (temp === ')') {
            if (res[res.length - 1] === '(') {
              res.pop()
            } else {
              return false
            }
          } else if (temp === ']') {
            if (res[res.length - 1] === '[') {
              res.pop()
            } else {
              return false
            }
          } else if (temp === '}') {
            if (res[res.length - 1] === '{') {
              res.pop()
            } else {
              return false
            }
          }
        }
      }
      if (!res.length) {
        return true
      } else {
        return false
      }
};
