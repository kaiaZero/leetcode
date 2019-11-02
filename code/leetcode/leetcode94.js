/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = []
    function recursion(node){
        if(!node)return
        recursion(node.left)
        res.push(node.val)
        recursion(node.right)
    }
    recursion(root)
    return res
};
