// 96. Unique Binary Search Trees
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let a=[]
    a[0]=1
    a[1]=1
    for(let i=2;i<n+1;i++){
        a[i]=0
        for(let j=0;j<i;j++){
            a[i]+=a[j]*a[i-1-j]
        }

    }
    return a[n]
};

// Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?
//
// Example:
//
// Input: 3
// Output: 5
// Explanation:
// Given n = 3, there are a total of 5 unique BST's:
//
//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3
