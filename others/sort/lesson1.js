export default (arr) => {
  //leetcode 922
  let arrOdd=[],arrEven=[],result=[]
  for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
      arrOdd.push(arr[i])
    }else{
      arrEven.push(arr[i])
    }
  }
  for(let i=0;i<arr.length;i++){
    if(i%2===0){
      result.push(arrOdd.pop())
    }else{
      result.push(arrEven.pop())

    }
  }
return result
}
  // // 进行升序排序
  // arr.sort((a, b) => a - b)
  // // 声明一个空数组用来存储奇偶排序后的数组
  // let r = []
  // // 记录奇数、偶数位下标
  // let odd = 1
  // let even = 0
  // // 对数组进行遍历
  // arr.forEach(item => {
  //   if (item % 2 === 1) {
  //     r[odd] = item
  //     odd += 2
  //   } else {
  //     r[even] = item
  //     even += 2
  //   }
  // })
  // return r
// }
