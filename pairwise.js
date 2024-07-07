function pairwise(arr, arg) {
  let indexes = []

  for (let i in arr) {
    i = Number(i)

    if (indexes.includes(i)) continue;
    const indexToSum = arr.findIndex(n => n === arg - arr[i])

    if (indexToSum >= 0 && !indexes.includes(indexToSum) && i !== indexToSum) {
      indexes = [...indexes, i, indexToSum]
			arrCopy[i] = Number.NEGATIVE_INFINITY
			arrCopy[indexToSum] = Number.NEGATIVE_INFINITY
    }
  }

  let sum = 0
  for (const index of indexes) {
    sum += index
  }
  return sum;
}

console.log(pairwise([0, 0, 0, 0, 1, 1], 1))
