/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1){
        return s
      }
      let arr = [],
        len = s.length,
        flag = 1,
        p1 = 1
      for (let i = 0; i < numRows; i++) {
        arr[i] = []
      }
      arr[0].push(s.slice(0, 1))
      while (p1 < len) {
        if (flag === 1) {
          for (let i = 1; i < numRows; i++) {
            arr[i].push(s.slice(p1, p1 + 1))
            p1++
          }
          flag = 0
        } else {
          for (let i = numRows - 2; i >= 0; i--) {
            arr[i].push(s.slice(p1, p1 + 1))
            p1++
          }
          flag = 1
        }
      }
let r = ''
for(let i =0;i<numRows;i++){
  let l = arr[i].length
  for(let j=0;j<l;j++){
      if(arr[i][j]){
            r+=arr[i][j]
      }
  }
}
return r

};
