/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr =[],
        len1 = nums1.length,
        len2 = nums2.length,
        index = Math.ceil((len1+len2)/2)-1
    for(let i=0;i<len1;i++){
        addNumber(nums1[i])
    }
    for(let i=0;i<len2;i++){
        addNumber(nums2[i])
    }
    if((len1+len2)%2){
        return arr[index]
    }else{
        return (arr[index]+arr[index+1])/2
    }
    function addNumber(num){
        if(arr.length===0){
            arr.push(num)
        }else{
            let start =0,
             end = arr.length
            while(start<end){
              let mid = Math.floor(start+(end-start)/2)
              if(num>arr[mid]){
                  start = mid+1
              }else{
                  end = mid
              }
            }
            arr.splice(start,0,num)
        }
    }

};
