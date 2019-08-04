/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let arr = [head],
        len = 1
    function deep(node){
        if(node.next){
            arr.push(node.next)
            len++
            deep(node.next)
        }else{
            return
        }
    }
    deep(head);

    let index = len-n,
        obj = Object.assign(head)
    if(index===0){
      return head.next
    }else{
      arr[index-1].next = arr[index+1]
      return head
    }



};
