//leetcode

/*
Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3

*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {


    return binaryTreePathsNew(root, [], '')


};

var binaryTreePathsNew = function(root, paths, currPath) {


    if (root === null) {

        return
    }


    let updatedPath = (!currPath.length) ? currPath + root.val : currPath + '->' + root.val


    if (root.right === null && root.left === null) {
        paths.push(updatedPath)
    }

   binaryTreePathsNew(root.left, paths, updatedPath)
   binaryTreePathsNew(root.right, paths, updatedPath)

    return paths


}
