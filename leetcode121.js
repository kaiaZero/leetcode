// 121. Best Time to Buy and Sell Stock
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res=0,
        min=prices[0]
    for(let i=0;i<prices.length;i++){
        min=min<prices[i]?min:prices[i]
        res=Math.max(res,prices[i]-min)
    }
    return res

}
