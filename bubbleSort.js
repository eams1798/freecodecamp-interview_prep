function bubbleSort(array) {
  if (array.length <= 1) return array;
  while (array.some((_, i) => array[i] - array[i-1] < 0 || array[i+1] - array[i] < 0)) {
    for (let x = 0; x < array.length - 1; x++){
      if (array[x + 1] < array[x]) {
        const aux = array[x + 1]
        array[x + 1] = array[x]
        array[x] = aux
      }
    }
  }
  return array;
}

console.log(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))
