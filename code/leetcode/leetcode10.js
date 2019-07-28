/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
           const arrs = s.split(''),
        arrp = p.split('')
      function r(s, p){
  const slen = s.length,
    plen = p.length
  if (slen === 0 && plen === 0) {
    return true
  }
  else if (plen === 0 && slen !== 0) {
    return false
  }
  else if (slen === 0 && plen === 2 && arrp[1] == '*') {
    return true
  }
  if ((p[plen - 1]) !== '*') {
    if (s[slen - 1] === p[plen - 1] ||( p[plen - 1]=='.'&&slen!==0)) {
      s.pop();
      p.pop()
      return r(s, p)
    } else {
      return false
    }
  } else {
    function checkStar (s,p,slen,plen){
      if (s[slen - 1] === p[plen - 2] || (p[plen - 2] == '.'&&slen!==0)) {
        if(slen===0 && plen>2){
          return false
        }
        return r(s.slice(0, slen - 1), p)
      }

    }
    return checkStar(s, p, slen, plen) || r(s, p.slice(0, plen - 2))

  }
}
return r(arrs, arrp)

};
