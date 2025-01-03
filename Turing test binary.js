function decimalToBinaryConversion(num) {
  if (num === 0) return '0'.padStart(4, '0');
  const binary = (num % 2) + (decimalToBinaryConversion(Math.floor(num / 2)));
  return binary.padStart(4, '0');
}

function isValidBitwiseAnd(bits, comparison) {
  for (let i = 0; i < comparison.length; i++) {
    if (comparison[i] === '1' && bits[i] !== '1') {
      return false;
    }
  }
  return true;
}

function func(n, x) {
  const arr = [x];
  const comparisonBits = decimalToBinaryConversion(x);
  let count = x + 1;

  while (arr.length < n && count < 20) {
    const countBits = decimalToBinaryConversion(count);
    if (isValidBitwiseAnd(countBits, comparisonBits)) {
      arr.push(count);
    }
    count++;
  }

  return arr;
}

const ans = func(4, 2);
console.log(ans); // Output: [2, 3, 6, 7]
