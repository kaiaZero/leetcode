/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let arr =[]
    function recursion (node){
        if(!node){
            return
        }
        arr.push(node.val)
        if(node.next){
          recursion(node.next)
        }else{
          return
        }
    }
    recursion(head)
    if(arr.length===0){
        return null
    }

    for(let i=0;i<arr.length;i+=2){
        if(i!==arr.length-1){
          let temp = arr[i]
          arr[i]=arr[i+1]
          arr[i+1]=temp
        }
    }
    let  res = new ListNode(arr[0]),
         list = res
    for(let i=1;i<arr.length;i++){
        list.next = new ListNode(arr[i])
        list = list.next
        if(i===arr.length-1){
            arr[i].next = null
        }
    }

    return res
};


//方法2
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
   if(head==null || head.next==null){
       return head
   }
   let temp = head.next
   head.next = swapPairs(temp.next)
   temp.next = head
   return temp
};
