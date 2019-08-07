/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let arr = []
    if(!(l1||l2)){
        return null
    }
    while(l1 || l2){
        if(!l1 && l2){
            arr.push(l2)
            break
        }
         if(!l2 && l1){
            arr.push(l1)
             break
        }

          if (l1 &&l2 && l1.val<=l2.val){
            arr.push(l1)
            if(l1.next){
                l1 = l1.next
            }else{
                l1=''
            }
        }else{
            arr.push(l2)
             if(l2.next){
                l2 = l2.next
            }else{
                l2=''
            }
        }
  }
  for(let i=0;i<arr.length-1;i++){
      arr[i].next = arr[i+1]
  }


    return (arr[0])
};
