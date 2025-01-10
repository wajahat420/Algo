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
function maxConsecutiveOnes(nums) {
  let start = 0,
    length = 0,
    flip = 0,
    lastFlipIndex = 0

  for (const [end, rightChar] of nums.entries()) {
    if (rightChar === 0) {
      if (flip === 1) lastFlipIndex = end

      flip++
    }

    if (flip === 2) {
      start = lastFlipIndex
      flip--
    }



    if (end - start + 1 > length) {
      length = end - start + 1
    }
  }
}

// const nums = [1, 1, 0, 1, 1, 1, 0, 1, 1] // 6 -> second 0
// const nums = [1, 1, 1, 1, 0, 1, 1, 1, 1] // 9 
// const nums = [1, 0, 1, 1, 0] // 4 -> first 0
// const nums = [1, 0, 1, 1, 0, 1] // -> 4 -> any 0
// const nums = [1, 1, 1, 1, 0] // 5 
// const nums = [0, 1, 0, 0, 1, 1] // 3 -> third 0
// maxConsecutiveOnes(nums)



// 6- Longest Subarray with At Most K Distinct Characters
function LongestSubStringDistinctChars(str, K) {
  let maxChars = 0

  for (i in str) {
    i = Number(i)

    let distinct = 0
    let counter = 1
    while (distinct <= K && counter + i + 1 < str.length) {
      let iter = counter + i
      let chars = str.slice(i, iter - 1)

      if (!chars.includes(str[iter - 1])) distinct += 1

      if (chars.length + 1 > maxChars) {
        maxChars = chars.length + 1
      }

      console.log({ distinct, chars, maxChars, counter, item: str[iter - 1], iter, len: !chars.includes(str[iter - 1]) })

      counter++
    }

  }
  console.log({ maxChars })

}

// approach 2 myself + GPT
function longestSubStringDistinctChars(str, K) {
  let maxChars = 0,
    charFreq = {},
    distinct = 0,
    start = 0

  for (end in str) {
    end = Number(end)

    let rightChar = str[end]

    if (!charFreq[rightChar]) distinct += 1

    charFreq[rightChar] = (charFreq[rightChar] || 0) + 1

    while (distinct > K) {
      let leftChar = str[start]
      charFreq[leftChar]--

      if (charFreq[leftChar] === 0) distinct--
      start++
    }
  }

  if (end - start + 1 > maxChars) {
    maxChars = end - start + 1
    subStringStart = start
  }


  console.log({ maxChars })

}

// const s = "aaaa"
// const K = 2

// const s = "abcd" // a -> 1
// const K = 1

// const s = "aabbcc" // aabbcc -> 6
// const K = 3

// const s = "aabbcc" // aa -> 2
// const K = 1

// const s = "araaci" // araa -> 4
// const K = 2

// const s = "cbbebi" // cbbeb -> 5
// const K = 3
// longestSubStringDistinctChars(s, K)



// 7- Find the smallest substring in a given string that contains all the characters of a given pattern.

function SmallestSubStringInAString(str, subStr) {
  let smalletLen = Infinity + ''
  for (i in str) {
    i = Number(i)
    const subStrLength = subStr.length

    let counter = 0
    while (subStrLength + i + counter <= str.length) {
      let slicedStr = str.slice(i, subStrLength + i + counter)

      let isCorrectSlicedStr = true
      for (s of subStr) {
        if (!slicedStr.includes(s)) isCorrectSlicedStr = false
      }

      if (isCorrectSlicedStr && slicedStr.length < smalletLen.length) {
        smalletLen = slicedStr
        break
      }

      counter++
    }
  }

  console.log({ smalletLen })
}

// approach 2 -GPT
function smallestSubstringContainingPattern(str, pattern) {
  let charFrequency = {};
  for (let char of pattern) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  let start = 0,
    matched = 0,
    minLength = Infinity,
    substringStart = 0;

  for (let end = 0; end < str.length; end++) {
    let rightChar = str[end];
    if (rightChar in charFrequency) {
      charFrequency[rightChar]--;
      if (charFrequency[rightChar] >= 0) {
        matched++;
      }
    }

    console.log({ rightChar, start, end, charFrequency, matched })


    while (matched === pattern.length) {
      if (end - start + 1 < minLength) {
        minLength = end - start + 1;
        substringStart = start;
      }

      let leftChar = str[start];

      start++;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched--;
        }
        charFrequency[leftChar]++;
      }

      console.log({ leftChar, matched })

    }
  }

  return minLength === Infinity ? "" : str.substring(substringStart, substringStart + minLength);
}

// const str = 'abdcabc' // cab
// const subStr = 'abc'

// console.log(smallestSubstringContainingPattern(str, subStr))

// 10 Minutes completion
// 8- Given an array and an integer K, find the maximum value in each sliding window of size K
function SlidingWindowMaximum(nums, K) {
  const maxNums = []
  for (let start = 0; start < nums.length - K + 1; start++) {

    let maxNum = Infinity * -1
    for (let iter = start; iter < start + K; iter++) {
      if (nums[iter] > maxNum) {
        maxNum = nums[iter]
      }
    }
    maxNums.push(maxNum)
  }

  console.log({ maxNums })
}

// const nums = [1] // [1]
// const K = 1

// const nums = [1, 3, -1, -3, 5, 3, 6, 7] // [3,3,5,5,6,7]
// const K = 3

// SlidingWindowMaximum(nums, K)

// 22 Minutes
// 9- Find the length of the longest subarray with a sum equal to K
function longestSubArraySumEqualsGivenNum(nums, K) {

  let end = 0,
    longest = 0

  for (const [start, _] of nums.entries()) {
    let sum = 0

    while (start <= end && sum <= K) {
      sum += nums[start]

      if (sum > K) {
        end = start
      }

      if (sum === K && end - start > longest) {
        console.log({ sum, end, start })
        longest = end - start
      }

      end++
    }
  }

  console.log({ longest })


}

// const nums = [4, 1, 1, 1, 2, 3, 5]
// const K = 5

// longestSubArraySumEqualsGivenNum(nums, K)

// 20 minutes
// 10- Check if the first string's permutation is a substring of the second string.
function PermutationInString(str, permutation) {
  let charFreq = {}
  for (let i of permutation) {
    charFreq[i] = (charFreq[i] || 0) + 1
  }

  let matched = 0

  for (let [_, elem] of str.split('').entries()) {
    if (charFreq[elem] > 0) matched++

    if (matched > 0 && !charFreq[elem]) {
      matched = 0
    }

    if (matched === permutation.length) {
      break
    }
  }

  console.log(matched === permutation.length)
}

// const str = "eidbaooo"
// const permutation = "ab"

// const str = "eidboaoo"
// const permutation = "ab"

// PermutationInString(str, permutation)


// 11- Find the number of subarrays with exactly K different integers.
function SubArraysWithGivenNumOfDistinctInt(nums, K) {
  let end = 0,
    start = 0,
    numOfSubArrays = 0

  // for (const [start, rightChar] of nums.entries()) {
  while (start <= nums.length) {
    let distinct = 1,
      hashMap = {}

    hashMap[nums[start]] = 1
    end = start
    // console.log({ distinct, start, end })

    while (distinct <= K && end < nums.length) {
      if (!hashMap[nums[end]]) {
        hashMap[nums[end]] = 1
        distinct++
      }



      if (distinct == K) numOfSubArrays++

      console.log({ distinct, start, end, numOfSubArrays })
      if (distinct <= K) end++
    }

    console.log({ numOfSubArrays, end }, '\n')

    start++
  }

  return { numOfSubArrays }
}

// approach GPT
function subArraysWithGivenNumOfDistinctInt(nums, K) {
  function atMostKDistinct(nums, K) {
    let start = 0,
      count = 0,
      freqMap = {};

    for (let end = 0; end < nums.length; end++) {
      const rightChar = nums[end];

      // Add the current element to the frequency map
      if (!freqMap[rightChar]) {
        freqMap[rightChar] = 0;
      }
      freqMap[rightChar]++;

      // If we have more than K distinct elements, shrink the window
      while (Object.keys(freqMap).length > K) {
        const leftChar = nums[start];
        freqMap[leftChar]--;

        if (freqMap[leftChar] === 0) {
          delete freqMap[leftChar];
        }
        start++;
      }

      // Count subarrays ending at `end`
      count += end - start + 1;
    }

    return count;
  }

  // To get exactly K distinct, subtract the result of atMost(K-1) from atMost(K)
  return atMostKDistinct(nums, K) - atMostKDistinct(nums, K - 1);
}




// const nums = [1, 2, 1, 2, 3]; // 7
// const K = 2

// const nums = [1, 2, 3, 4] // 4
// const nums = [4, 4, 4, 4] // 10
// const K = 1

// const nums = [1, 2, 3, 4, 5] // 3
// const K = 3

// const nums = [1, 2, 1, 2, 1] // 10
// const K = 2

// const nums = [1, 2, 1, 3, 4]
// const K = 3

// console.log(SubArraysWithGivenNumOfDistinctInt(nums, K))


// 50 minutes
// 12- Find the contiguous subarray which has the largest product.
function MaximumProductOfSubArray(nums) {
  let maxProduct = 0,
    end = 0

  for (let start = 0; end < nums.length; start++) {

    let tempProduct = 1

    while (end < nums.length) {
      let product = nums[end] * tempProduct

      tempProduct = product

      if (tempProduct > maxProduct) maxProduct = tempProduct
      end++
    }

    end = start + 1
  }

  console.log({ maxProduct })
}


// const nums = [-2, -3, 0, -2, -40]
// const nums = [0, 2] // 2
// const nums = [-1, -2, -9, 3] // 54
// const nums = [2, 3, -2, 4] // 6
// const nums = [-2, 0, -1] // 0
// const nums = [1, -2, -3, 4] // 24
// MaximumProductOfSubArray(nums)