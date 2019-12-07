/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let obj = {},
        len = deck.length
    for(let i=0;i<len;i++){
        if(!obj[deck[i]]){
            obj[deck[i]]=1
        }else{
            obj[deck[i]]++
        }
}
    let keys = Object.keys(obj)
    for(let i=2;i<=obj[keys[0]];i++){
        for(let j=0;j<keys.length;j++){
            if(obj[keys[j]]%i){
                break
            }
            if(j===keys.length-1){
                return true
            }
        }
}
    return false
};
