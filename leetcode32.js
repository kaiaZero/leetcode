/**
 * @param {string} s
 * @return {number}
 */
 //利用栈
var longestValidParentheses = function(s) {
    let stack =[],
        start = 0,
        max = 0,
        arr = s.split('')
    for(let i=0;i<arr.length;i++){

        if(arr[i]==='('){
            stack.push(i)
            continue
        }else if(arr[i]===')'){
            if(!stack.length){
                start = i+1
                continue
            }else{
                stack.pop()
                if(stack.length){
                    max = Math.max(i-stack[stack.length-1],max)
                }else{
                    max=Math.max(i-start+1,max)
                }

            }
        }

        }

    return max
};
