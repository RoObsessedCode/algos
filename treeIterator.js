
//write an iterator for post order traversal such that iterator can pause the traversal of the tree
class TreeIterator {
  constructor(tree) {
    this.stack = []

    //stack is path down to the current node
    this.findLeftMostChild(tree)
  }

  findLeftMostChild(root) {
    if (!root) return;
    const n = root.left || root.right
    this.stack.push(root)
    this.findLeftMostChild(n)
  }

  //when we call trav on a node we are essentially running thru post order traversal until we hit our first console.log of node

  next() {
    const pop = this.stack.pop()
    const parent = this.stack.peek()
    if (parent!==null && pop === parent.left && parent.right!==null) {
      findLeftMostChild(parent.right)
    }
  }



  //

  current() {
    return this.stack.peek()
  }
}
