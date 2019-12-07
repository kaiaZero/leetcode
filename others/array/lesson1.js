export default (str) => {
  function multiple(result, n) {
  let b = []
  for (let j = 0; j < n.length; j++) {
    result.map(item => {
      let a = []
      a.push(item + n[j])
      b = b.concat(a)
    })
  }
  return b
}

function combinations(str){
  // // 更好的做法：建立电话号码键盘映射
  // let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  // // 把输入字符串按单字符分隔变成数组，234=>[2,3,4]
  // let num = str.split('')
  // // 保存键盘映射后的字母内容，如 23=>['abc','def']
  let arr = str.split('')
  let n2 =['a','b','c']
  let n3 = ['d','e','f']
  let n4 = ['g','h','i']
  let n5 = ['j','k','l']
  let n6 = ['m','n','o']
  let n7 = ['p','q','r','s']
  let n8 = ['t','u','v']
  let n9 = ['w','x','y','z']

  let result=['']
  for(let i=0;i<arr.length;i++){
    switch(arr[i]){
      case "2":
        result = multiple(result,n2)
      case "3":
        result = multiple(result,n3)
      case "4":
        result = multiple(result,n4)
      case "5":
        result = multiple(result,n5)
      case "6":
        result = multiple(result,n6)
      case "7":
        result = multiple(result,n7)
      case "8":
        result = multiple(result,n8)
      case "9":
        result = multiple(result,n9)

    }
  }
  return result
}
     combinations(str)

}

  // // 建立电话号码键盘映射
  // let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  // // 把输入字符串按单字符分隔变成数组，234=>[2,3,4]
  // let num = str.split('')
  // // 保存键盘映射后的字母内容，如 23=>['abc','def']
  // let code = []
  // num.forEach(item => {
  //   if (map[item]) {
  //     code.push(map[item])
  //   }
  // })
  // let comb = (arr) => {
  //   // 临时变量用来保存前两个组合的结果
  //   let tmp = []
  //   // 最外层的循环是遍历第一个元素，里层的循环是遍历第二个元素
  //   for (let i = 0, il = arr[0].length; i < il; i++) {
  //     for (let j = 0, jl = arr[1].length; j < jl; j++) {
  //       tmp.push(`${arr[0][i]}${arr[1][j]}`)
  //     }
  //   }
  //   arr.splice(0, 2, tmp)
  //   if (arr.length > 1) {
  //     comb(arr)
  //   } else {
  //     return tmp
  //   }
  //   return arr[0]
  // }
  // return comb(code)
}
