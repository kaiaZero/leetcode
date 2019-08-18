/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let count = k
  if(!rem(head,k)){
       return head
  }else{
      let first =head,
          prev = null,
          current = head,
          next
      while(count>0){
          count--
          next = current.next
          current.next = prev
          prev = current
          current = next

      }
      first.next = reverseKGroup(next,k)
      return prev
  }


   };

   function rem(node,k){
         let count = 0
         while(count<k){
             count++
             if(!node){
             return false
             }
             node = node.next
         }

         return true

   }
