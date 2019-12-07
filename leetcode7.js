/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   let n = x,
        r = '';
      if (n < 0) {
        n = -n;
        r = '-'
      }
       r+=n.toString().split('').reverse().join('')
    let a=Number(r)
     if(a<-Math.pow(2,31)||a>Math.pow(2,31)-1){
      return 0
      }
   return Number(r)

};
