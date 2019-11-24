// 114. Flatten Binary Tree to Linked List
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(!root){
        return  null
    }
  let res = []
  function recursion(r){
      res.push(r.val)
      if(r.left){
          recursion(r.left)
      }
      if(r.right){
          recursion(r.right)
      }
  }
    recursion(root)
    let len = res.length
    for(let i=0;i<len-1;i++){
        root.val = res[i]
        root.left = null
        root.right = new TreeNode(res[i+1])
        root=root.right
    }
};

// Given a binary tree, flatten it to a linked list in-place.
//
// For example, given the following tree:
//
//     1
//    / \
//   2   5
//  / \   \
// 3   4   6
// The flattened tree should look like:
//
// 1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
//          \
//           6
