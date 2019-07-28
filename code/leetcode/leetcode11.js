/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0,
        i=0,
        j=height.length-1
    while(i<j){
        if(height[i]<height[j]){
          let temp = (j-i)*height[i]
          max = temp>max?temp:max
          i++
        }else{
          let temp = (j-i)*height[j]
          max = temp>max?temp:max
          j--
        }
}

return max

};
