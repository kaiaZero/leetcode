export default (str, words) => {
//leetcode030 Substring with Concatenation of All Words

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

 //***用移动窗口可以得到更优化的解法***

  //用哈希表解
var findSubstring = function(s, words) {
  if(!s){
      return []
  }
  if(words.length===0){
      return []
  }z
  let len = words.length,
      alen=words[0].length,
      tlen=len*alen,
      r=[]

  if(tlen>s.length){
      return []
  }
  let obj ={}
  for(let i=0;i<len;i++){
      if(!obj[words[i]]){
          obj[words[i]]=1
      }else{
          obj[words[i]]++
      }
  }

  for(let i=0;i<=s.length-tlen;i++){
    let o = Object.assign({},obj)
    let slice = s.slice(i,i+tlen)
    let count = 0
    for(let j=0;j<tlen;j+=alen){
        let word = slice.slice(j,j+alen)
        if(o[word]&&o[word]>0){
            o[word]--
            count++
            if(count===len){
                r.push(i)
            }
        }else {
            continue
        }
    }
  }
    return r
}
  // // 保存结果
  // let result = []
  // // 记录数组的长度，做边界条件计算
  // let num = words.length
  // // 递归函数体
  // let range = (r, _arr) => {
  //   if (r.length === num) {
  //     result.push(r)
  //   } else {
  //     _arr.forEach((item, idx) => {
  //       let tmp = [].concat(_arr)
  //       tmp.splice(idx, 1)
  //       range(r.concat(item), tmp)
  //     })
  //   }
  // }
  // range([], words)
  // // [0, 9, -1] filter 之后[0,9]
  // return result.map(item => {
  //   return str.indexOf(item.join(''))
  // }).filter(item => item !== -1).sort()
}
