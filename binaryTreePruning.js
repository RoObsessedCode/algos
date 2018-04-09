class Solution(object) {
  pruneTree(root) {
    function containsOne(node) {
      if (!node) return false
     a1 = containsOne(node.left)
     a2 = containsOne(node.right)
     if (!a1) node.left = null
     if (!a2) node.right = null
     if (node.val === 1|| node.val === a1 || node.val === a2) return true
     else return false
    }
    if (containsOne(root)) return root
    else return null
  }
}
