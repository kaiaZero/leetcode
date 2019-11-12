// 101. Symmetric Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 //1.递归
var isSymmetric = function(root) {
    if(!root) return true
    let ltree = root.left?root.left:null,
        rtree = root.right?root.right:null,
        res=true
    if(!ltree && !rtree) return true
    else if(ltree&&rtree){}
    else{
        return false
    }

    function walk(ltree,rtree){
        if(ltree.val!==rtree.val){
            res=false
            return
        }else{
            if(ltree.left && rtree.right){
                walk(ltree.left,rtree.right)
            }else if((!ltree.left) &&(!rtree.right)){

            }else{
                res=false
                return
            }
            if(ltree.right && rtree.left){
                walk(ltree.right,rtree.left)
            }else if((!ltree.right) &&(!rtree.left)){

            }else{
                res=false
                return
            }
        }

    }
    walk(ltree,rtree)
    return res
};

//2.迭代
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true
    let arr=[root.left,root.right]
    while(arr.length!==0){
        let l=arr.pop(),
            r=arr.pop()
        if(!l && !r) continue
        if((!l&&r)||(l&&!r)) return false
        if(l.val!==r.val){
            return false
        }
        arr.push(l.left)
        arr.push(r.right)
        arr.push(l.right)
        arr.push(r.left)
    }
    return true
};
