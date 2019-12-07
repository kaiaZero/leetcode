102. Binary Tree Level Order Traversal
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){
        return []
    }
    let arr =[],
        res=[]
    arr.push(root)
    arr.push(0)
    while(arr.length){
         if(res[arr[1]]){
            res[arr[1]].push(arr[0].val)
        }else{
            res[arr[1]]=[]
             res[arr[1]].push(arr[0].val)
        }
        let proot = arr.shift()
            index = arr.shift()
        
        if(proot.left){
           arr.push(proot.left)
           arr.push(index+1)  
        }
        if(proot.right){
            arr.push(proot.right)
            arr.push(index+1)    
        }
    }
    return res
};

// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]