// my custom approach
function sort(array, index = 0) {
  if (index === array.length - 1) {
    return array
  }

  const leftArray = []
  const rightArray = []

  for (ind in array) {
    if (array[ind] < array[index]) {
      leftArray.push(array[ind])
    } else {
      rightArray.push(array[ind])
    }
  }

  const updatedArray = leftArray.concat(rightArray)
  if (array[index] == updatedArray[index]) {
    index += 1
  }

  return sort(updatedArray, index)
}

// algo approach
function sort2(array) {
  if (array.length <= 1) {
    return array
  }

  const leftArray = []
  const rightArray = []
  const pivot = array[0]

  for (ind in array) {
    if (ind > 0 && array[ind] < pivot) {
      leftArray.push(array[ind])
    } else if (ind > 0) {
      rightArray.push(array[ind])
    }
  }


  return [...sort2(leftArray), pivot, ...sort2(rightArray)]
}

const arrayToSort = [3, 2, 1, 9]
// const arrayToSort = [5, 1, 3, 7];

const sorting = sort2(arrayToSort)


console.log({ sorting })