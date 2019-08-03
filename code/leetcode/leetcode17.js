/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits){
        return []
    }
    let arr = ['','',['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']],
        numbers = digits.split(''),
        res = ['']
    for(let i = 0;i<numbers.length;i++){
        let temp =[],
            number = Number(numbers[i])
        for(let j=0;j<arr[number].length;j++){
            for(let k = 0;k<res.length;k++){
                temp.push(res[k]+arr[number][j])
            }
        }
        res = temp
    }
    return res
};
