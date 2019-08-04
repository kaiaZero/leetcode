/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b)=>a-b)
    let len = nums.length,
        res=[]
    for(let i=0;i<len-3;i++){
        while(i>0  && nums[i]===nums[i-1]){
            i++
        }
        for(let j=i+1;j<len-2;j++){
             while(j>i+1  && nums[j]===nums[j-1]){
            j++
        }
            let k=j+1,
                m=len-1
            while(k<m){
                while(k>j+1  && nums[k]===nums[k-1]){
            k++
        }
                if(nums[i]+nums[j]+nums[k]+nums[m]<target){
                    while(k<m && nums[i]+nums[j]+nums[k]+nums[m]                            <target){
                        k++
                        if(nums[i]+nums[j]+nums[k]+nums[m]                            ===target && k!==m){
                         res.push([nums[i],nums[j],nums[k],nums[m]])
                        }
                    }
                }else if(nums[i]+nums[j]+nums[k]+nums[m]>target){
                    while(k<m && nums[i]+nums[j]+nums[k]+nums[m]                            >target){
                         m--
                         if(nums[i]+nums[j]+nums[k]+nums[m]                            ===target && k!==m){
                         res.push([nums[i],nums[j],nums[k],nums[m]])
                        }
                    }
                }else{
                    if(k===j+1 && m===len-1){
                        res.push([nums[i],nums[j],nums[k],nums[m]])
                    }
                    k++

                }
            }
        }
    }
    return res
};
