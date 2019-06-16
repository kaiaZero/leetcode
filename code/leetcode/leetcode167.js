/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let obj={},
        len = numbers.length
    for(let i=0;i<len;i++){
        if(!obj[numbers[i]]){
            obj[numbers[i]]=[i]
        }else{
            obj[numbers[i]].push(i)
        }
    }
    for(let i = 0;i<len;i++){
        let tmp = target-numbers[i]
        obj[numbers[i]].shift()
        if(obj[tmp] && obj[tmp].length>0){
            return [i+1,obj[tmp][0]+1]
        }
}
};
