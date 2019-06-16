/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let hash = {},
         len = s.length
       for (let i = 0; i < len; i++) {
         if (!hash[s[i]]) {
           hash[s[i]] = 1
         } else {
           hash[s[i]]++
         }
       }
       let keys = Object.keys(hash),
           hash2 = {}
       for (let i = 0; i < keys.length; i++) {
         if (!hash2[hash[keys[i]]]) {
           hash2[hash[keys[i]]] = [keys[i]]
         } else {
           hash2[hash[keys[i]]].push(keys[i])
         }
       }
       let keys2 = Object.keys(hash2)
       keys2.sort((a,b)=>b-a)
       let r=''
       for(let i=0;i<keys2.length;i++){
          while(hash2[keys2[i]].length){
            r += hash2[keys2[i]].pop().repeat(keys2[i])
          }
       }
       return r
};
