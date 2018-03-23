function letterOrdering(words) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let j = i + 1;
    let wA = words[i];
    let wB = words[b];
    const pairs = {};
    for (let x = 0; x < wA.length; x++) {
      if (wA[x] !== wB[x]) {
        pairs[wA[x]] = pairs[wA[x]] || [];
        pairs[wA[x]].push(wB[x]);
        break;
      }
    }
  }
  nodes = Object.keys(pairs);
  for (tos in Object.values(pairs)) {
    tos.map(node => nodes.remove(node));
  }
  assert(nodes.length = 1);
  const root = nodes.only(); // ?
  topSort(root, pairs, []);
  return l;
}

function topSort(root, vertex_map, l) {
  if (l.find(root) != -1) {
    return;
  }
  const entries = vertex_map[root];
  entries.forEach(entry => topSort(entry, vertex_map, l));
  l.push(root);

  //DFS => push the nodes when you exit
}
