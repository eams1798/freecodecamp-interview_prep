function updateInventory(arr1, arr2) {
    const currInvElements = arr1.map(el => el[1])

    for (const el2 of arr2) {
        if (currInvElements.includes(el2[1])) {
            let updatedElement = arr1.find(el1 => el1[1] === el2[1])
            let deletedIndex = arr1.findIndex(el1 => el1[1] === el2[1])
            updatedElement[0] += el2[0]

            arr1.splice(deletedIndex, 1, updatedElement)
        } else {
            arr1.push(el2)
        }
    }
    return arr1.sort((a, b) => a[1] === b[1]? 0 : (a[1] < b[1]? -1: 1))
}

// Example inventory lists
var curInv = [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]];

var newInv = [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]

console.log(updateInventory(curInv, newInv))
