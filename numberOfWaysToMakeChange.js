function numberOfWaysToMakeChange(n, denoms) {

  const ways = (new Array(n + 1)).fill(0)
  ways[0] = 1

  for (let den = 0; den < denoms.length; den++) {
    for (let amount = 1; amount < n + 1; amount++) {
      if (denoms[den] <= amount) {
        ways[amount] += ways[amount - denoms[den]]
      }
    }
  }
  return ways[n]

}

const num = numberOfWaysToMakeChange(10, [1, 5])

console.log(num)
