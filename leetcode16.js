/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b)
    let min = Math.abs(nums[0] + nums[1] + nums[2] - target),
      sum = nums[0] + nums[1] + nums[2]
    for (let i = 0; i < nums.length - 2; i++) {
      let j = i + 1,
        k = nums.length - 1
      while (j < k) {
        if (nums[i] + nums[j] + nums[k] < target) {
          while (j < k && nums[i] + nums[j] + nums[k] < target) {
            if (target - nums[i] - nums[j] - nums[k] <= min) {
              min = target - nums[i] - nums[j] - nums[k]
              sum = nums[i] + nums[j] + nums[k]
            }
            j++
          }
        } else if (nums[i] + nums[j] + nums[k] > target) {
          while (j < k && nums[i] + nums[j] + nums[k] > target) {
            if (nums[i] + nums[j] + nums[k] - target <= min) {
              min = nums[i] + nums[j] + nums[k]-target
              sum = nums[i] + nums[j] + nums[k]
            }
            k--
          }
        } else {
          return target
        }

      }
    }
    return sum
};
