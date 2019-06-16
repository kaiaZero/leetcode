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
var addTwoNumbers = function(l1, l2) {

  const  next = function(list1,list2,acc=0){
      const list = new ListNode,
            v1 = list1 && list1.val!==undefined?list1.val:0,
            v2 = list2 && list2.val!==undefined?list2.val:0

   const sum = v1+v2+acc,
         accN = Math.floor(sum/10)
   list.val = sum%10
   if(list1.next||list2.next||accN){
       list.next = next(list1.next||new ListNode,list2.next||new ListNode,accN)
   }else{
       list.next = null
   }
   return list
  }
  return next(l1,l2)
};
