// 104. Maximum Depth of Binary Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0
    let res =0,
        arr =[]
    arr.push(root)
    arr.push(1)
    while(arr.length){
        let temp = arr.shift(),
            index = arr.shift()
        res = res>index?res:index
        if(temp.left){
            arr.push(temp.left)
            arr.push(index+1)
        }
        if(temp.right){
            arr.push(temp.right)
            arr.push(index+1)
        }
    }
    return res
};