/**
 * initialize your data structure here.
 */



var MedianFinder = function() {
    this.arr = []
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
        if (this.arr.length === 0) {
        this.arr.push(num)
      } else {
      let start = 0,
        end = this.arr.length
      while (start < end) {
        let mid = Math.floor(start + (end - start) / 2)
        if (num > this.arr[mid]) {
          start = mid + 1
        } else {
          end = mid
        }
      }
        this.arr.splice(start, 0, num)
      }



};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let len = this.arr.length,
         index = Math.ceil(len/2)-1
    if(len%2){

        return this.arr[index]
    }else{

        return (this.arr[index]+this.arr[index+1])/2
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
