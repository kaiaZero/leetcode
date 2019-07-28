/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 //1.Time Limit Exceeded 用一个hash找出所有组合，再去重,O(n^2)
var threeSum = function(nums) {
    const obj = {},
          res = new Set(),
          len = nums.length

    for(let i=0;i<len;i++){
        if(!obj[nums[i]]){
            obj[nums[i]]=1
        }else{
            obj[nums[i]]++
        }
    }
    for(let i=0;i<len-2;i++){
        let temp = {}
        for(let j =i+1;j<len-1;j++){
            if(temp[nums[j]]){
                continue
            }

            let third = -nums[i]-nums[j]
            obj[nums[i]]--;
            obj[nums[j]]--;
            if(obj[third]){
                res.add(JSON.stringify([nums[i],nums[j],third].sort()))
                temp[third]=1


            }
            obj[nums[i]]++;
            obj[nums[j]]++;
        }
    }
    return ([...res].map((item)=>{
        return JSON.parse(item)
}))
};

//2.方法一的优化，时间复杂度O(n*m)
var threeSum = function(nums) {
     const obj = {},
          list1 = [],
          list2 = [],
          list3 =[],
          res = new Set()

        for (let i = 0; i < nums.length; i++) {
          if (nums[i] < 0) {
            list1.push(nums[i])
          } else if (nums[i]>0){
            list2.push(nums[i])
          }else{
            list3.push(nums[i])
          }
          if (!obj[nums[i]]) {
            obj[nums[i]] = 1
          } else {
            obj[nums[i]]++
          }
        }
        if (list3.length>=3) {
          res.add(JSON.stringify([0, 0, 0]))
        }
        for (let i = 0; i < list1.length; i++) {
          let temp = {}
          for (let j = 0; j < list2.length; j++) {
            let third = -list1[i] - list2[j]
            obj[list1[i]]--;
            obj[list2[j]]--;
            if (obj[third]) {
              res.add(JSON.stringify([list1[i], list2[j], third].sort()))
              temp[third] = 1


            }
            obj[list1[i]]++;
            obj[list2[j]]++;
          }
        }
        return ([...res].map((item) => {
          return JSON.parse(item)
        }))
};

//排序后用三个指针
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
 nums.sort((a, b) => {
        return a - b
      })
      let j = 1,
        len = nums.length,
        k = len - 1,
        res = []
      for (let i = 0; i < len - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
          continue
        }
        let j = i + 1,
          k = len - 1,
          sum = -nums[i]
        while (j < k) {
          if (nums[j] + nums[k] > sum) {
            while (j < k && nums[j] + nums[k] > sum) {
              k--
            }

          } else if (nums[j] + nums[k] < sum) {
            while (j < k && nums[j] + nums[k] < sum) {
              j++
            }

          } else {
            if (j !== k && nums[j] + nums[k] === sum) {
              res.push([nums[i], nums[j], nums[k]])
            }
            j++
            while (nums[j - 1] === nums[j]) {
              j++
            }
          }
        }
      }
      return res
};
