/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let arr = []
    function getVal(list){
        if(!list){
            return
        }
        arr.push(list.val)
        if(list.next){
            list = list.next
            getVal(list)
        }else{
            return
        }
    }
    for(let i=0;i<lists.length;i++){
        getVal(lists[i])
    }
    if(!arr.length){
        return null
    }
    arr.sort((a,b)=>a-b)
    let res = new ListNode(arr[0]),
        front = res
    for(let i=1;i<arr.length;i++){
      let rear = new ListNode(arr[i])

          front.next = rear
          front = front.next

    }
    return res
};
