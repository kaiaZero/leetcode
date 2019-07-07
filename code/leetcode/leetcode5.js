/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
      let arr = s.split(''),
        len = arr.length,
        rlen = 1,
        p1 = 0,
        p2 = 0
      for (let i = 0; i < len; i++) {

          let front = i - 1,
            rear = i + 1
          while (front >= 0 && rear <= len && arr[front] === arr[rear]) {
            front--;
            rear++;
          }
          let temp = rear - front + 1
          if (temp > rlen) {
            rlen = temp
            p1 = front + 1
            p2 = rear - 1
          }

        if (arr[i] === arr[i + 1]){
          let front = i - 1,
            rear = i + 2
          while (front >= 0 && rear <= len && arr[front] === arr[rear]) {
            front--;
            rear++;
          }
          let temp = rear - front + 1
          if (temp > rlen) {
            rlen = temp
            p1 = front + 1
            p2 = rear - 1
          }
        }


        }

      return s.slice(p1,p2+1)

};
