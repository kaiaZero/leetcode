function a(arr){
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


    function b(arr){
      return [...new Set(arr)]
      // 或
      // return Array.from(new Set(arr))
    }

//利用object的哈希特性
function c(arr){
  let a={},r=[]
  for(let i=0;i<arr.length;i++){
    let key =arr[i],
        type = typeof(key)
        console.log(type)
    if(!a[key]){
      r.push(arr[i])
      a[key]=[type]
    }else{
      if(a[key].indexOf(type)<0){
        r.push(arr[i])
        a[key].push(type)
      }
    }
  }
  return r
}


//利用Map可以区分key为1和"1"的情况，无需再判断类型
function d(arr){
  let a=new Map(),r=[]
  for(let i=0;i<arr.length;i++){
    let key =arr[i]
    if(!a.get(key)){
      r.push(arr[i])
      a.set(key,true)
    }
  }
  return r
}
