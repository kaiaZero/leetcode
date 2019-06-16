/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var orderlyQueue = function(S, K) {
    let arr = S.split(''),
        len=S.length,
        temp=S,
        b = arr
    if(K>1){
        let a = arr,
            res = a.sort().join('')
        return  res
}
        for(let i=1;i<len;i++){

          b.push(b.shift())
          if(b.join('')<temp){
            temp = b.join('')
          }
        }
      return temp
};
