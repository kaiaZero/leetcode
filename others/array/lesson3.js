export default (arr, n) => {
//leetcode605 种花问题
  let space = 2n+1
  let count = 0
  for(let i= 0;i<arr.length;i++){
    if(arr[i]===0){
      count++
    }else{
      count = 0
    }
    if(count===space){
      return true
    }
  }
  return false
  // 计数器
  // let max = 0
  // for (let i = 0, len = arr.length - 1; i < len; i++) {
  //   if (arr[i] === 0) {
  //     if (i === 0 && arr[1] === 0) {
  //       max++
  //       i++
  //     } else if (arr[i - 1] === 0 && arr[i + 1] === 0) {
  //       max++
  //       i++
  //     }
  //   }
  // }
  // return max >= n
}
