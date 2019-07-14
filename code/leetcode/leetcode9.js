/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    let s = x.toString().split('').reverse();
    s=Number(s.join(''))
    return s===x
};
