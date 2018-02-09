function minNumberOfCoinsForChange(n, denoms) {
  const ways = (new Array(n + 1)).fill(Infinity);

  ways[0] = 0;


  for (let i = 0; i < denoms.length; i++) {
    const denom = denoms[i]
    for (let amount = 0; amount < n + 1; amount++) {
      if (denom <= amount) {
        ways[amount] =Math.min(ways[amount - denom] + 1, ways[amount])
      }
    }
  }
  if (ways[n] === Infinity) return -1
  return ways[n];

}

console.log(minNumberOfCoinsForChange(6, [1, 2, 4]));

console.log(minNumberOfCoinsForChange(3, [2, 1])); //2
