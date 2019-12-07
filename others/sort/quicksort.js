function x(arr,l,r) {
  if(l>=r){
    return
  }
  let i = l,
    j = r,
    key = arr[l]
  while(i<j){
    while(i<j && key<=arr[j]){
      j--
    }
    arr[i]=arr[j]
    while(i<j && arr[i]<=key){
      i++
    }
    arr[j]=arr[i]
  }
  arr[i]=key
  x(arr,l,i-1)
  x(arr,i+1,r)
}
