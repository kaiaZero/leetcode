export default (str) => {
  //复原ip地址 leetcode93


  保存所有符合条件的IP地址
  let r = []
  // 分四步递归处理ip分段
  let search = (cur, sub) => {
    // 边界条件
    if (cur.length === 4 && cur.join('') === str) {
      r.push(cur.join('.'))
    } else {
      // 正常的处理过程
      for (let i = 0, len = Math.min(3, sub.length), tmp; i < len; i++) {
        tmp = sub.substr(0, i + 1)
        if (tmp < 256) {
          //不能写成0<=tmp<=255
          //tmp>=0&&tmp<=255
          let c =cur.concat(tmp)
          search(c, sub.substr(i + 1))
          //concat返回新数组，不改变原数组，把每次结果保存到一个新的变量里
          //不能用push，push直接改变原数组，如果直接把结果推到cur，那push过的结果都会放在cur中
          //即使一个分支返回后，后面的结果仍放在现有cur数组后面
        }
      }
    }
  }
  search([], str)
  return r
}
