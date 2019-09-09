/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let i = 0,
      j = height.length-1,
      res = 0
  while(i<j){
      if(height[i]<=height[j]){
          let temp1 = i
          while(height[temp1]>height[i+1]){
              res+=height[temp1]-height[i+1]
              i++
          }
          i++
      }else{
          let temp2 = j
          while(height[temp2]>height[j-1]){
              res+=height[temp2]-height[j-1]
              j--
          }
          j--
      }
  }
  return res
};
