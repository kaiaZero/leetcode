// 56. Merge Intervals
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>{
        return a[0]-b[0]
    })
    let res = [],
        temp = intervals[0],
        len=intervals.length
    if(len===0){
        return []
    }
    for(i=1;i<len;i++){
        if(intervals[i][0]<=temp[1]){
            if(intervals[i][1]>temp[1]){
                temp[1]= intervals[i][1]
            }
        }else{
            res.push(temp)
            temp = intervals[i]
        }
    }
    res.push(temp)
    return res
};

// Given a collection of intervals, merge all overlapping intervals.
//
// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:
//
// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
// NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
