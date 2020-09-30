/**
 * Module for obtaining statistical analysis about a set of data.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Pauliina Raitaniemi <pr222ja@student.lnu.se>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Type definitions
// ------------------------------------------------------------------------------

/**
 * Represents statistical summary.
 *
 * @typedef {object} StatisticalSummary
 * @property {number} average - The average value.
 * @property {number} maximum - The maximum value.
 * @property {number} median - The median value.
 * @property {number} minimum - The minimum value.
 * @property {number[]} mode - The mode value.
 * @property {number} range - The range value.
 * @property {number} standardDeviation - The standard deviation value.
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Calculates the average value.
 *
 * @param {number} numbers - The numbers to calculate.
 * @function checkValidity - Checks if input should throw errors.
 * @returns {number} - The average value of all the numbers.
 */
export function average (numbers) {
  checkValidity(numbers) // Checks if all numbers are valid.

  const theTotal = numbers.reduce((a, b) => a + b, 0)
  const howManyNumbers = numbers.length
  return theTotal / howManyNumbers
}

/**
 * Calculates the maximum number.
 *
 * @param {number} numbers - The numbers to calculate.
 * @function checkValidity - Checks if input should throw errors.
 * @returns {number} - The maximum value of all the numbers.
 */
export function maximum (numbers) {
  checkValidity(numbers) // Checks if all numbers are valid.
  return Math.max(...numbers)
}

/**
 * Finds the median number of the array.
 *
 * @param {number} numbers - The numbers to check.
 * @function checkValidity - Checks if input should throw errors.
 * @returns {number} - The median value of the numbers.
 */
export function median (numbers) {
  checkValidity(numbers) // Checks if all numbers are valid.
  // Sort numbers from lowest to highest
  const sortedNumbers = numbers.slice().sort(function (a, b) {
    return a - b
  })
  // Finding the midpoint
  const theMiddle = Math.floor(sortedNumbers.length / 2)
  // Check if even number
  if (sortedNumbers.length % 2 === 0) {
  // Divide the sum of the two numbers in the middle
    return (sortedNumbers[theMiddle] + sortedNumbers[theMiddle - 1]) / 2
  } else {
  // Returns the median if array has uneven amount of numbers
    return sortedNumbers[theMiddle]
  }
}

/**
 * Calculates the minimum number.
 *
 * @param {number} numbers - The numbers to calculate.
 * @function checkValidity - Checks if input should throw errors.
 * @returns {number} - The minimum value of all the numbers.
 */
export function minimum (numbers) {
  checkValidity(numbers) // Checks if all numbers are valid.
  return Math.min(...numbers)
}

/**
 * Finds the mode of numbers.
 *
 * @param {number[]} numbers - The numbers to go through.
 * @function checkValidity - Checks if input should throw errors.
 * @returns {number} - The mode of numbers.
 */
export function mode (numbers) {
  checkValidity(numbers) // Checks if all numbers are valid.

  // sortera i ordning, näst kolla om de är lika, om lika adda
}

/**
 * Calculates the range between numbers.
 *
 * @param {number} numbers - The numbers to calculate.
 * @function checkValidity - Checks if input should throw errors.
 * @returns {number} - The range between the maximum and minimum number.
 */
export function range (numbers) {
  checkValidity(numbers) // Checks if all numbers are valid.
  return maximum(numbers) - minimum(numbers)
//  return Math.max(...numbers) - Math.min(...numbers)
}

/**
 * Calculates the standardDeviation.
 *
 * @param {number} numbers - The numbers to calculate.
 * @function checkValidity - Checks if input should throw errors.
 * @returns {number} - The standard deviation.
 */
export function standardDeviation (numbers) {
  checkValidity(numbers) // Checks if all numbers are valid.
}

/**
 * Will check the array so that returning array only has valid numbers.
 *
 * @param {numbers[]} numbers - The data to analyse
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 */
export function checkValidity (numbers) {
  // Checks if an array.
  if (!Array.isArray(numbers)) {
    throw new TypeError('The passed argument is not an array.')
  }
  // Checks if array has no elements.
  if (numbers.length === 0) {
    throw new Error('The passed array contains no elements.')
  }
  // Checks if array has only numbers or if a numbers has the value of NaN
  // let checkedNumbers = 0
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers !== 'number' || isNaN(numbers)) {
      throw new TypeError('The passed array may only contain valid numbers.')
    } // else {
      // checkedNumbers++
      // }
  }
  // return checkedNumbers
}

/**
 * Returns several descriptive statistics (average, maximum, median, minimum,
 * mode, range and standard deviation) from a set of numbers.
 *
 * @param {number[]} numbers - The set of data to be analyzed.
 * @function checkValidity - Checks if input should throw errors.
 * @returns {StatisticalSummary} An object whose properties correspond to the descriptive statistics from the data set.
 */
export function summary (numbers) {
  checkValidity(numbers) // Checks if all numbers are valid.

  // Object with its properties and functionvalues.
  const statisticalSummary = {
    average: average(numbers),
    maximum: maximum(numbers),
    median: median(numbers),
    minimum: minimum(numbers),
    mode: mode(numbers),
    range: range(numbers),
    standardDeviation: standardDeviation(numbers)
  }

  return statisticalSummary
}
