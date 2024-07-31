function insertionSort(array) {
  // Only change code below this line
	if  (array.length <= 1) return array

  let sortedArray = []

  for (let n = 0; n < array.length; n++) {
    if (sortedArray.length === 0) {
      sortedArray.push(array[n])
    } else {
      for (let m = 0; m < sortedArray.length; m++) {
				if (array[n] < sortedArray[m]) {
					sortedArray.splice(m, 0, array[n])
					break
				} else if (m === sortedArray.length - 1 && sortedArray[m] < array[n]) {
					sortedArray.push(array[n])
					break
				}
      }
    }
  }
  return sortedArray;
  // Only change code above this line
}

console.log(insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))
console.log(insertionSort([5, 4, 33, 2, 8]))
