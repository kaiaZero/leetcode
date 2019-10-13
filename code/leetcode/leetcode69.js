// 69. Sqrt(x)
//solution 1
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x===1 || x===0){
        return x
    }
    let res
    function recur(l,r){
        const mid = l+(r-l)/2,
              result =mid*mid-x
        if(Math.abs(result)>0.999){
            if(result>0){
               recur(l,mid)
            }else{
                recur(mid,r)
            }
        }else{
            if(Math.ceil(mid)*Math.ceil(mid)===x){
                res=Math.ceil(mid)
            }else{
                res = mid
            }
            return
        }
    }
    recur(0,x)
    return(Math.floor(res))
};

// solution2
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x==0) return 0
    let l=1,
        r=x
    while(l<r && l+1!==r){
        let mid = Math.floor(l+(r-l)/2)
        if(mid*mid===x){
            return mid
        }else if(mid*mid>x){
            r=mid
        }else{
            l=mid
        }
    }
    return l
};
