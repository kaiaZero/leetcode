76. Minimum Window Substring
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let obj={},
        tlen = t.length,
        count=0,
        l=0,
        r=0,
        min=s.length,
        minl=0,
        minr=0
    for(let i=0;i<tlen;i++){
        if(!obj[t[i]]){
            obj[t[i]]=1
        }else{
            obj[t[i]]++
        }
    }
    let klen = Object.keys(obj).length,
        temp = {}
    while(r<s.length){
        if(obj[s[r]]){
            if(tlen===1) return t
            temp[s[r]] = temp[s[r]]+1 || 1
        }
        if(temp[s[r]] && temp[s[r]]===obj[s[r]]){
            count++
        }
        while(count===klen){
            if(r-l<min){
                min = r-l
                minr=r
                minl=l
            }
            if(temp[s[l]]){
                temp[s[l]]--
            }
            if(temp[s[l]]<obj[s[l]]) count--
            l++
            while(!obj[s[l]]) l++
        }
        r++
    }
    if(min===s.length){
        return ''
    } else{
        return s.slice(minl,minr+1)
    }
};
//
// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).
//
// Example:
//
// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"
// Note:
//
// If there is no such window in S that covers all characters in T, return the empty string "".
// If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
