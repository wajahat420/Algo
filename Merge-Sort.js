function mergeSort(array) {
  if (array.length <= 1) {
    return array
  }

  const mid = Math.floor(array.length / 2)

  const left_sorted = mergeSort(array.slice(0, mid))
  const right_sorted = mergeSort(array.slice(mid, array.length))

  return mergeArrays(left_sorted, right_sorted)
}

const arrayToSort = [38, 27, 43, 3, 9, 82, 10]
const result = mergeSort(arrayToSort)

console.log({ result })

function mergeArrays(left, right) {
  let i = 0
  let j = 0
  let result = []

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }

  result = result.concat(left.slice(i, left.length))
  result = result.concat(right.slice(j, right.length))

  return result
}



// const array1 = [2, 4, 6, 9]
// const array2 = [2, 5, 8]

// mergeArrays(array1, array2)

