/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  } else {
    return nums[0]  * product(nums.slice(1));
  }
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 1) {
    return words[0].length;
  } else {
    const maxLength = longest(words.slice(1));
    return  Math.max(words[0].length, maxLength);
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length <= 1) {
    return str;
  } else {
    return str[0] +  everyOther(str.slice(2));
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  } else if (str[0] !== str[str.length - 1]) {
    return false;
  } else {
    return isPalindrome(str.slice(1, - 1)) ;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (index >= arr.length) {
    return -1;
  } else if (arr[index]  === val) {
    return index;
  } else {
   return findIndex(arr, val, index + 1);
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str === '') {
    return '';
  } else {
    return revString(str.substr(1)) + str.charAt(0);
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];
  for (let key in obj) {
    if (typeof obj[key] == 'string') {
      result.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      result = result.concat(gatherStrings(obj[key]));
    };
  }
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
