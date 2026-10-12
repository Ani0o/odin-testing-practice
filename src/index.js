function capitalize(str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

function reverseString(str) {
  let res = '';
  for (let i = str.length - 1; i >= 0; i--) {
    res = res + str[i];
  }
  return res;
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
  div(a, b) {
    return a / b;
  }
}

function isAlpha(char) {
  return /^[a-zA-Z]$/.test(char);
}

function caesarCipher(str, key) {
  const alphabetsLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const alphabetsUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let map = {};
  let res = '';
  for (let i = 0; i < alphabetsLower.length; i++) {
    map[alphabetsLower[i]] = alphabetsLower[key % 26];
    map[alphabetsUpper[i]] = alphabetsUpper[key % 26];
    key++;
  }
  for (let i = 0; i < str.length; i++) {
    if (!isAlpha(str[i])) {
      res = res + str[i];
      continue;
    }
    res = res + map[str[i]];
  }
  return res;
}

function analyzeArray(nums) {
  return {
    average: nums.reduce((total, num) => total + num, 0) / nums.length,
    min: Math.min(...nums),
    max: Math.max(...nums),
    length: nums.length,
  }
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
