
function search(array) {
  let lo = 0
  let hi = array.length - 1

  while (lo <= hi && lo < array.length && hi >= 0) {

    const mid = Math.floor((lo + hi) / 2)
    if (target === array[mid]) {
      console.log(target, 'Found at index', mid)
      break
    }



    if (target > array[mid]) {
      lo = mid + 1
    } else {
      hi = mid - 1
    }
  }
}

const arrayToSort = [3, 9, 10, 27, 38, 43, 82]
const target = 10

search(arrayToSort, target)