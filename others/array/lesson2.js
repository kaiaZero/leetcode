export default (arr) => {
  //leetcode 914.卡牌分组


    arr.sort()
    let a = 1, b = [], min = 10000
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        a++
      } else {
        min = a < min ? a : min
        b.push(a)
        a = 1
      }
    }
    for(let j=0;j<b.length;j++){
      if(b[j]%min===0){
        continue
      }else{
        return false
      }
    }
    return true
  

  // 对这副牌进行排序，升序、降序都可以
  // arr.sort((a, b) => a - b)
  // let min = Number.MAX_SAFE_INTEGER
  // let dst = []
  // let result = true
  // for (let i = 0, len = arr.length, tmp = []; i < len; i++) {
  //   tmp.push(arr[i])
  //   for (let j = i + 1; j < len - 1; j++) {
  //     if (arr[i] === arr[j]) {
  //       tmp.push(arr[j])
  //     } else {
  //       if (min > tmp.length) {
  //         min = tmp.length
  //       }
  //       dst.push([].concat(tmp))
  //       tmp.length = 0
  //       i = j
  //       break
  //     }
  //   }
  // }
  // dst.every(item => {
  //   if (item.length % min !== 0) {
  //     result = false
  //     return false
  //   }
  // })
  // return result
}
