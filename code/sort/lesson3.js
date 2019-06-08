export default (arr) => {
  //最大间距
  function x(arr){
    let max = 0
    for (let i = arr.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
      if (i === 7){
        continue
      }
      let space = arr[i+1] - arr[i]
      if(i===1){
        space=Math.max(space,arr[1]-arr[0])
      }
      if (space > max) {
        max = space
      }
    }

return max
  }


  // if (arr.length < 2) {
  //   return 0
  // }
  // let max = 0
  // let len = arr.length - 1
  // let space
  // for (let i = len, tmp; i > 0; i--) {
  //   for (let j = 0; j < i; j++) {
  //     tmp = arr[j]
  //     if (tmp > arr[j + 1]) {
  //       arr[j] = arr[j + 1]
  //       arr[j + 1] = tmp
  //     }
  //   }
  //   if (i < len) {
  //     space = arr[i + 1] - arr[i]
  //     if (space > max) {
  //       max = space
  //     }
  //   }
  // }
  // return Math.max(max, arr[1] - arr[0])
// }
