/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
      function isNumber(x) {
        if (x == 1 || x == 2 || x == 3 || x == 4 || x == 5 || x == 6 || x == 7 || x == 8 || x == 9 || x == 0) {
          return true
        } else {
          return false
        }
      }
      let s = str.replace(/^\s*/g, '')
      if (!s) { return 0 }
      s = s.match(/\S+/)[0]
      if (s.length === 1 && !isNumber(s)) {
        return 0
      }

      let firstLetter = s.slice(0, 1),
        r = ''
      if (firstLetter === '-') {
        r = '-'
        s = s.slice(1, str.length)
      } else if (firstLetter === '+') {
        s = s.slice(1, str.length)
      }
      while (s.slice(0, 1) == 0 && s.length > 1) {
        s = s.slice(1, s.length)
      }
      if (isNumber(s.slice(0, 1))) {

        const len = s.length
        for (let i = 0; i < len + 1; i++) {
          if (i === len || !isNumber(s.slice(i, i + 1))) {
            let a = s.slice(0, i)
            r += a
            break
          }
        }
      } else {
        return 0
      }
      let result = Number(r);
      if (result < -Math.pow(2, 31)) {
        return -2147483648
      }
      if (result >=Math.pow(2, 31)) {
        return 2147483647
      }
      return result
};
