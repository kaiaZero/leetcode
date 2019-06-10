export default (n) => {
//格雷编码
  function x(n) {
    if (n === 1) {
      return  [[0],[1]]
    } else {
      let arr = []
      let arrPrevious = x(n - 1)
      for (let i = 0 ;i<(Math.pow(2, n)) / 2 ; i++) {
        arr[i] = []
        arr[Math.pow(2, n) - 1 - i]=[]
        for (let j = 0; j < n; j++) {
          arr[i][j] = j === 0 ? 0 : arrPrevious[i][j-1]
          let pow = (Math.pow(2,n-1))-1-i
          arr[Math.pow(2,n)-1-i][j] = j === 0 ? 1 : arrPrevious[i][j-1]
        }
      }
      return arr

    }
  }

}




  // 递归函数，用来算输入为n的格雷编码序列
  // let make = (n) => {
  //   if (n === 1) {
  //     return ['0', '1']
  //   } else {
  //     let prev = make(n - 1)
  //     let result = []
  //     let max = Math.pow(2, n) - 1
  //     for (let i = 0, len = prev.length; i < len; i++) {
  //       result[i] = `0${prev[i]}`
  //       result[max - i] = `1${prev[i]}`
  //     }
  //     return result
  //   }
  // }
  // return make(n)
}
