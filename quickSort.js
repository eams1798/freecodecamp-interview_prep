function quickSort (array) {
	if (array.length <= 1) return array;
	let i = 0, j = array.length - 2, p = array.length - 1;

	while (i < j) {
		if (array[i] <= array[p]) i++;
		if (array[j] >= array[p]) j--;

		if (array[i] > array[p] && array[p] > array[j]) {
			let aux = array[i];
			array[i] = array[j];
			array[j] = aux;
			i++;
			j--;
		}

	}

	if (array[i] > array[p]) {
	let aux = array [i];
		array[i] = array[p];
		array[p] = aux;
	}

	return [...quickSort(array.slice(0, i + 1)), ...quickSort(array.slice(i + 1))];
}

console.log(quickSort([6, 4, 9, 5, 1, 0, 16, 3, 8, 3, 13]));
console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))
