function numberOfWaysToMakeChange(n, denoms) {
  //fill array with n + 1 element and fill all with 0
  //n + 1 because we need to account for amount===0
  const ways = (new Array(n + 1)).fill(0)
  //how many ways are there to get nothing....1 way
  ways[0] = 1

  //logic for each denom
  for (let i = 0; i < denoms.length; i++) {
    let denom = denoms[i]
    for (let amount = 1; amount < (n + 1); amount++) {
      //equals to because (denom - amount === 0) then ways[0]
      // is an actual index in the array we need to account for
      if (denom <= amount) {
        ways[amount] += ways[amount - denom]
      }
    }
  }
  return ways[n]
}
