function mergeSort(array) {
	if (array.length <= 1) return array
	const middle = Math.floor(array.length / 2)
	const left = array.slice(0, middle)
	const right = array.slice(middle)
	return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
	let i = 0
	while (i < left.length && right.length > 0) {
		if (left[i] >= right[0]) {
			left.splice(i, 0, right.shift())
		}
		else if (i === left.length - 1 && left[i] < right[0]) {
			left.push(right.shift())
		}
		i++
	}
	return left
}

console.log(mergeSort([6, 4, 9, 5, 1, 0, 16, 3, 8, 3, 13]));
console.log(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))
