export default (arr) => {
  // 选择排序

  for(let i=0;i<arr.length;i++){
    let min=arr[i]
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]<min){
        arr[i]=arr[j]
        arr[j]=min
        min=arr[i]
      }
    }
  }
  return arr




  // for (let i = 0, len = arr.length, min; i < len; i++) {
  //   min = arr[i]
  //   for (let j = i + 1; j < len; j++) {
  //     if (arr[j] < min) {
  //       let c = min
  //       min = arr[j]
  //       arr[j] = c
  //     }
  //   }
  //   arr[i] = min
  // }
  // return arr
}
