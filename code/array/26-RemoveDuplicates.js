function x(arr){
  arr.sort()
  let k=0
  //设指针k，每次与k指向的位置比较，不同就赋值给arr[k],指针向后移
  for(let i=1;i<arr.length;i++){
    if(arr[i]!==arr[k]){
      arr[++k]=arr[i]
    }
  }
  return arr.slice(0,k+1)
}

// function() {
//     function x(arr){
//       return [...new Set(arr)]
//     }
