/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const m = a >= b ? a : b;

  return m >= c ? m : c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */

function canQueenCaptureKing(queen, king) {
  const isLine = queen.x === king.x || queen.y === king.y;
  const isDiaginal = Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y);

  return isLine || isDiaginal;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return false;

  const isCorrectTriangle = a + b >= c && a + c >= b && b + c >= a;

  return isCorrectTriangle && (a === b || a === c || b === c);
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const digits = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  const decades = Math.floor(num / 10);
  let roman = '';

  for (let i = 0; i < decades; i += 1) roman += 'X';
  if (num % 10 !== 0) roman += digits[(num % 10) - 1];

  return roman;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const digits = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let result = '';

  for (let i = 0, len = numberStr.length; i < len; i += 1) {
    const c = numberStr[i];
    if (i > 0) result += ' ';

    switch (c) {
      case '-':
        result += 'minus';
        break;
      case '.':
      case ',':
        result += 'point';
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        result += `${digits[+c]}`;
        break;
      default:
        result += c;
    }
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (
    let iStart = 0, iEnd = str.length - 1, mid = Math.floor(str.length / 2);
    iStart < mid;
    iStart += 1, iEnd -= 1
  ) {
    if (str[iStart] !== str[iEnd]) return false;
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0, len = str.length; i < len; i += 1) {
    if (str[i] === letter) return i;
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let number = Math.abs(num);

  do {
    const d = number % 10;
    if (d === digit) return true;
    number = Math.floor(number / 10);
  } while (number > 0);

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let startSum = 0;
  let endSum = 0;

  for (let i = 1; i < arr.length; i += 1) endSum += arr[i];

  for (let i = 0; i < arr.length - 1; i += 1) {
    startSum += arr[i];
    endSum -= arr[i + 1];
    if (startSum === endSum) return i + 1;
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) matrix[i] = [];

  let columnLeft = 0;
  let rowUp = 0;
  let rowLow = size - 1;
  let columnRight = size - 1;
  let value = 1;

  while (columnLeft <= columnRight && rowUp <= rowLow) {
    for (let i = columnLeft; i <= columnRight; i += 1) {
      matrix[rowUp][i] = value;
      value += 1;
    }
    rowUp += 1;

    for (let i = rowUp; i <= rowLow; i += 1) {
      matrix[i][columnRight] = value;
      value += 1;
    }
    columnRight -= 1;

    for (let i = columnRight; i >= columnLeft; i -= 1) {
      matrix[rowLow][i] = value;
      value += 1;
    }
    rowLow -= 1;

    for (let i = rowLow; i >= rowUp; i -= 1) {
      matrix[i][columnLeft] = value;
      value += 1;
    }
    columnLeft += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const matrixCopy = matrix;
  const len = matrix.length;

  const rotated = [];
  for (let i = 0; i < len; i += 1) rotated[i] = [];

  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len; j += 1) {
      rotated[j][len - 1 - i] = matrix[i][j];
    }
  }

  for (let i = 0; i < len; i += 1) {
    for (let j = len - 1; j >= 0; j -= 1) {
      matrixCopy[i][j] = rotated[i][j];
    }
  }

  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] < pivot) {
      left[left.length] = arr[i];
    } else {
      right[right.length] = arr[i];
    }
  }

  const sorted = [...sortByAsc(left), pivot, ...sortByAsc(right)];
  const link = arr;

  for (let i = 0; i < sorted.length; i += 1) {
    link[i] = sorted[i];
  }

  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const cache = [];
  const len = str.length;
  const isOddString = len % 2 === 1 ? 1 : 0;
  const midst = Math.floor(len / 2) + isOddString;
  const digits = [];
  for (let i = 0; i < len; i += 1) digits[i] = str[i];

  function shuffleArray(source, cycle) {
    if (cache[0]) {
      let isEqual = true;

      for (let i = 0; i < len; i += 1) {
        if (cache[0][i] !== source[i]) {
          isEqual = false;
          break;
        }
      }

      if (isEqual) return cache[cycle % cache.length];
    }

    cache[cache.length] = source;
    const nextItem = [];

    for (let iEven = 0, i = 0; i < midst; iEven += 2, i += 1) {
      nextItem[i] = source[iEven];
      nextItem[midst + i] = source[iEven + 1];
    }
    if (isOddString) nextItem.length -= 1;

    if (cycle > 1) return shuffleArray(nextItem, cycle - 1);

    return nextItem;
  }

  const shuffledArr = shuffleArray(digits, iterations);
  let result = '';

  for (let i = 0; i < shuffledArr.length; i += 1) {
    result += shuffledArr[i];
  }

  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const digits = [];

  for (let n = number; n > 0; n = Math.floor(n / 10)) digits.unshift(n % 10);

  let swapIndex = 0;
  let isSwap = false;

  for (let i = digits.length - 2; i >= 0; i -= 1) {
    if (digits[i] < digits[i + 1]) {
      isSwap = true;
      swapIndex = i;
      break;
    }
  }

  if (!isSwap) {
    return number;
  }

  let nextBiggerIndex = swapIndex + 1;

  for (let i = swapIndex + 1; i < digits.length; i += 1) {
    if (digits[i] > digits[swapIndex] && digits[i] < digits[nextBiggerIndex]) {
      nextBiggerIndex = i;
    }
  }

  [digits[swapIndex], digits[nextBiggerIndex]] = [
    digits[nextBiggerIndex],
    digits[swapIndex],
  ];

  const sortedDigits = digits.splice(swapIndex + 1).sort((a, b) => a - b);
  digits.push(...sortedDigits);

  let nearestBigger = 0;
  for (let i = 0, len = digits.length; i < len; i += 1) {
    nearestBigger += digits[i] * 10 ** (len - 1 - i);
  }

  return nearestBigger;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
