// 105. Construct Binary Tree from Preorder and Inorder Traversal
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    function recursion(pre,inOrder){
        if(pre.length===1) return new TreeNode(pre[0])
        if(pre.length ===0)return null
        let val = pre[0],
            index = inOrder.indexOf(val),
            LIn = inOrder.slice(0,index),
            RIn = inOrder.slice(index+1),
            Lpre = pre.slice(1,1+index),
            Rpre = pre.slice(1+index),
            node = new TreeNode(val)
        node.left = recursion(Lpre,LIn)
        node.right = recursion(Rpre,RIn)
        return node
    }
   return  recursion(preorder,inorder)
};

// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.
//
// For example, given
//
// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
