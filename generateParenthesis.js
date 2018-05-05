function generateParenthesis(n) {
  if (n === 0) return []

  if (n === 1) return ['()']

  let result = []
  let hash = {}

  let perms = generateParenthesis(n-1)
  for(let i = 0; i < perms.length; i++) {
    let perm = perms[i]
    for (let j = 0; j < perm.length; j++) {
      let newPerm = addToPerm(perm, j)
      if (!hash[newPerm]) {
        result.push(newPerm)
        hash[newPerm] = true
      }

    }
  }

  return result
}

function addToPerm(perm, i) {
  const leftStr = perm.slice(0, i)

  const rightStr = perm.slice(i)

  return leftStr + '()' + rightStr
}


console.log(generateParenthesis(0))
console.log(generateParenthesis(1))
console.log(generateParenthesis(2))
console.log(generateParenthesis(3))
console.log(generateParenthesis(4))
console.log(generateParenthesis(5))


var generateParenthesis = function(n) {
  const list = [];
  backtrack(list, n, [], 0, 0);
  return list;
};

function backtrack(result, n, temp, open, closing){
  if(temp.length === 2*n){
    result.push(temp.concat().join(''));
  }
  //
  if(open < n){
    temp.push('(');
    backtrack(result, n, temp, open+1, closing);
    temp.pop();
  }
  if(closing < open){
    temp.push(')');
    backtrack(result, n, temp, open, closing+1);
    temp.pop();
  }
}
