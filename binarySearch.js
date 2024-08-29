function binarySearch(searchList, value) {
  if ((searchList.length === 1 && searchList[0] !== value) || searchList.length < 1) return 'Value Not Found'
  const result = compare(searchList, value)
  if (result !== false) return result
  else return 'Value Not Found'
}

function compare(searchList, value) {
  if (searchList.length === 1) {
		if (searchList[0] === value) return searchList
		else return false
	}
	if (searchList.length < 1) return false
  let arrayPath = [];
  let middle = Math.round(searchList.length / 2)
  arrayPath.push(searchList[middle - 1])

  if (searchList[middle - 1] === value) {
    return arrayPath;
  } else {
    const left = searchList.slice(0, middle - 1)
    const right = searchList.slice(middle)

    if (value < searchList[middle - 1]) {
      const result = compare(left, value)
      if (result !== false) {
        return [...arrayPath, ...result]
      } else return false
    } else {
      const result = compare(right, value)
      if (result !== false) {
        return [...arrayPath, ...result]
      } else return false
    }
  }
}

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];
console.log(binarySearch(testArray, 0))
console.log(binarySearch(testArray, 1))
console.log(binarySearch(testArray, 2))
console.log(binarySearch(testArray, 6))
console.log(binarySearch(testArray, 11))
console.log(binarySearch(testArray, 13))
console.log(binarySearch(testArray, 49))
console.log(binarySearch(testArray, 70))

