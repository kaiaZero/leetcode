export default (str) => {
  let arr = str.split('')
  let result = []
  for (let i = 0; i < arr.length; i++) {
    let flag = arr[i]
    let flag2 = 0
    let num1 = 1
      let  num2=0
    for (let j=i + 1; j < arr.length; j++) {
      if (flag === arr[j]) {
        if (flag2 === 1) {
          continue
        }
        num1++
      } else {
        num2++
        flag2 = 1
      }
      if (num1 === num2) {
        result.push(arr.slice(i,j+1).join())
        break
      }
    }
  }
  return result

  // let r = []
  // 给定任意子输入都返回第一个符合条件的子串
  // let match = (str) => {
  //   let j = str.match(/^(0+|1+)/)[0]
  //   let o = (j[0] ^ 1).toString().repeat(j.length)
  //   let reg = new RegExp(`^(${j}${o})`)
  //   if (reg.test(str)) {
  //     return RegExp.$1
  //   } else {
  //     return ''
  //   }
  // }
  // // 通过for循环控制程序运行的流程
  // for (let i = 0, len = str.length - 1; i < len; i++) {
  //   let sub = match(str.slice(i))
  //   if (sub) {
  //     r.push(sub)
  //   }
  // }
  // return r
  //
}
