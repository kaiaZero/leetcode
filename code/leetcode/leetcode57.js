// 57. Insert Interval
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let res = [],
        temp = [],
        len=intervals.length
    if(len===0){
        return [newInterval]
    }
    for(let i=0;i<len;i++){
        if(newInterval[0]>intervals[i][1]){
            res.push(intervals[i])
            if(i===len-1){
                        res.push(newInterval)
                        break
                    }
        }else if(newInterval[1]<intervals[i][0]){
                 res.push(newInterval)
                 res.push(...intervals.slice(i,len))
                 break
                 }else{
            temp.push(Math.min(newInterval[0],intervals[i][0]))
            temp.push(Math.max(newInterval[1],intervals[i][1]))
            if(i===len-1){
                        res.push(temp)
                        break
                    }
            for(let j=i+1;j<intervals.length;j++){
                if(intervals[j][0]<=temp[1]){
                    temp[1]=Math.max(temp[1],intervals[j][1])
                    if(j===len-1){
                        res.push(temp)
                        break
                    }
                }else{
                    res.push(temp)
                    res.push(...intervals.slice(j,len))
                    break
                }
            }
            break
        }
    }
    return res
};

// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
// 
// You may assume that the intervals were initially sorted according to their start times.
//
// Example 1:
//
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:
//
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
// NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
