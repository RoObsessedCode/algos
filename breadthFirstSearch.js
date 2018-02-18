class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    // Write your code here.
    const root = this;
    array.push(this);
    const res = []
    while (array.length) {
      let parent = array.shift()
      for (let i = 0; i < parent.children.length; i++) {
        array.push(parent.children[i])
      }
      res.push(parent.name)
    }
    return res
  }
}
