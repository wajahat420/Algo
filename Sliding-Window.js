// 1- Find the maximum sum of any contiguous subarray of size K
function MaxSubArraySum(array, K) {
  let maxSum = 0

  for (let i in array) {
    i = Number(i)
    if (i > array.length - K) break

    const subArray = array.slice(i, i + K)
    const sum = subArray.reduce((acc, elem) => acc + elem, 0)

    if (sum > maxSum) maxSum = sum
  }

  console.log(maxSum)
}

// const K = 2
// const arr = [2, 3, 4, 1, 5] // [3,4] => 7
// MaxSubArraySum(arr, K)

// 2- Find the length of the smallest contiguous subarray whose sum is greater than or equal to a given value.
function MinSubArraySumEqualsToNumber(arr, target) {
  let minLength = Infinity
  for (let i in arr) {
    i = Number(i)

    let sum = 0
    let counter = 1
    while (sum <= target && counter < arr.length) {
      const slicedArr = arr.slice(i, i + counter)
      sum = slicedArr.reduce((acc, elem) => acc + elem, 0)

      if (sum === target) {
        if (slicedArr.length < minLength) minLength = slicedArr.length
        break
      }


      counter++
    }

  }
  console.log({ minLength })
}
// const K = 8
// const arr = [4, 2, 2, 7, 8, 1, 2, 8, 10] // [8] => 1
// const K = 7
// const arr = [2, 1, 5, 2, 3, 2] // [8] => 1
// MinSubArraySumEqualsToNumber(arr, K)


// 3- Find the length of the smallest contiguous subarray whose sum is greater than or equal to a given value.
function LongestSubStringWithoutRepeat(str) {
  let maxLength = -Infinity
  for (let i in str) {
    i = Number(i)

    let counter = 0
    while (i + counter + 1 < str.length) {
      const slicedArr = str.slice(i, i + counter)

      if (slicedArr.includes(str[i + counter])) {
        if (slicedArr.length > maxLength) maxLength = slicedArr.length
        break
      }

      counter++
    }

  }
  console.log({ maxLength })
}

// const K = "bbbbbb"
// LongestSubStringWithoutRepeat(K)

// 4- Count all occurrences of an anagram of a given pattern in a string.
function CountOccuranceOfAnagram(str, anagram) {
  let occurance = 0
  for (let i in str) {
    i = Number(i)
    const slicedStr = str.slice(i, i + anagram.length)


    if (slicedStr === anagram) {
      occurance++
    } else {
      let falsy = false
      for (j of anagram) {
        if (!slicedStr.includes(j)) {
          falsy = true
          break
        }
      }

      if (!falsy) {
        occurance++
      }
    }
  }

  console.log({ occurance })
}

// const anagram = "ab"
// const str = "abab" // 3
// CountOccuranceOfAnagram(str, anagram)

// 5- Given a binary array, find the maximum number of consecutive 1s you can achieve by flipping at most one 0.
function MaxConsecutiveOnes(nums) {
  let counter = 0
  let flip = 0

  for (i of nums) {
    if (i === 0) flip++
    if (flip > 1) break

    counter++
  }

  console.log({ counter })
}

// const nums = [1, 0, 1, 1, 0]
// MaxConsecutiveOnes(nums)


// 6- Longest Subarray with At Most K Distinct Characters
function LongestSubStringDistinctChars(str, K) {
  let maxChars = 0

  for (i in str) {
    i = Number(i)

    let distinct = 1
    let counter = 1
    while (distinct <= K && counter + i + 1 < str.length) {
      let iter = counter + i
      let chars = str.slice(i, iter - 1)

      if (!chars.includes(str[iter - 1])) distinct += 1

      if (chars.length > maxChars) {
        maxChars = chars.length
      }

      console.log({ distinct, chars, maxChars, counter, item: str[iter - 1], iter, len: !chars.includes(str[iter - 1]) })

      counter++
    }

  }
  console.log({ maxChars })

}

const s = "cbbebi"
const K = 3
LongestSubStringDistinctChars(s, K)