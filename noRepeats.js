function allPermutations(string) {
  if (string.length === 1) {
    return [string]
  }
  else {
    let permutations = []
    for (let i = 0; i < string.length; i++) {
      let firstChar = string[i]
      let rest = string.slice(0, i) + string.slice(i + 1)
      let restPermutations = [...allPermutations(rest)]
      for (let j = 0; j < restPermutations.length; j++) {
        if (firstChar !== restPermutations[j][0])
permutations.push(firstChar + restPermutations[j])
      }
    }
    return permutations
  }
}

function permAlone(str) {
  return allPermutations(str).length;
}

console.log(permAlone("aab"))
console.log(permAlone("aaa"))
console.log(permAlone("aabb"))
console.log(permAlone("abcdefa"))
console.log(permAlone("abfdefa"))
console.log(permAlone("zzzzzzzz"))
console.log(permAlone("a"))
console.log(permAlone("aaab"))
console.log(permAlone("aaabb"))
