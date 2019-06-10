function x(arr,l,r) {
  if(l<r){
    //js中除法不会取整
    let mid = l + Math.floor((r - l) / 2)
    x(arr, l, mid)
    x(arr,mid + 1, r)
    merge(arr,l,r,mid)
  }
    function merge(arr,l,r,mid){
      let i = l,
        j = mid + 1,
        // t = 0
        t=l
      let tmp = [],
          tmpindex=0
      while (i !== mid + 1 && j !== r + 1) {
        if (arr[i] <= arr[j]) {
          tmp[t++] = arr[i++]

        }else {
          tmp[t++] = arr[j++]
        }
      }
      while (i !== mid + 1) {
        tmp[t++] = arr[i++]
      }
      while (j !== r + 1) {
        tmp[t++] = arr[j++]
      }
      for (let i = l; i <= r; i++) {
        arr[i]=tmp[i]
        // arr[i] = tmp[tmpindex++]

      }
  }


}
