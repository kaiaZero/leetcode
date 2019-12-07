/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s){
        return 0
    }
     let arr = s.split(''),
        i = 0,
        j = 1,
        alen=arr.length,
        len = 1,
        max = 1,
        obj = {}
      obj[arr[i]] = 1
      while (j < alen) {
        while (j < alen&&!obj[arr[j]]) {
          len++
          max = max > len ? max : len
          obj[arr[j]] = 1
          j++
        }
        if(j===alen-1){
          return max
        }
        while (arr[i] !== arr[j]) {
          obj[arr[i]] = 0
          len--
          i++
        }
        i++
        j++
      }
    return max

};
