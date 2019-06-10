/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {

       let stack = [],
        r = 0
      for (let i = 0; i < heights.length; i++) {

        if (!stack.length) {
          stack.push(heights[i])
        } else {
          if (heights[i] >= stack[stack.length - 1]) {
            stack.push(heights[i])
          } else {
            let stack2 = []

            while (heights[i] < stack[stack.length - 1]) {
              stack2.push(stack.pop())
              for (let i = 0; i < stack2.length; i++) {
                let max = (i + 1) * stack2[i]
                r = r > max ? r : max

              }
            }
            for(let j=0;j<stack.length; j++) {
              if (heights[i] < stack[j]){
                stack[j] = heights[i]
                console.log(heights[i])
              }
            }
            for(let j=0,len=stack2.length;j<=len;j++){
              stack.push(heights[i])
            }
          }
        }
      }

      for (let i = 0; i < stack.length; i++) {
        let max = stack[i] * (stack.length - i)
        r = r > max ? r : max
      }
      return r

};
