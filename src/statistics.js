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
const StatisticalSummary = {
  average: 'number',
  maximum: 'number',
  median: 'number',
  minimum: 'number',
  mode: 'number[]',
  range: 'number',
  standardDeviation: 'number'
}

/**
 * Calculates the average of the numbers.
 *
 * @param {number[]} numbers - The numbers to calculate.
 * @returns {number} - The average value of all the numbers.
 */
export function average (numbers) {
//  checkValidity(numbers) // Check if all numbers are valid. ******
  const theTotal = numbers.reduce((a, b) => a + b, 0)
  const howManyNumbers = numbers.length
  return (theTotal / howManyNumbers)
}

/**
 * Calculates the maximum number.
 *
 * @param {number[]} numbers - The numbers to calculate.
 * @returns {number} - The maximum value of all the numbers.
 */
export function maximum (numbers) {
  checkValidity(numbers) // Check if all numbers are valid. ******
  return Math.max(...numbers)
}

/**
 * Finds the median number of the array.
 *
 * @param {number[]} numbers - The numbers to check.
 * @returns {number} - The median value of the numbers.
 */
export function median (numbers) {
  // checkValidity(numbers) // Check if all numbers are valid. ******
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
 * @param {number[]} numbers - The numbers to calculate.
 * @returns {number} - The minimum value of all the numbers.
 */
export function minimum (numbers) {
//  checkValidity(numbers) // Check if all numbers are valid. ******
  return Math.min(...numbers)
}

// TODO: Mode #5
// function to return the mode value, whatever that is...
// Typvärde.
export function mode (numbers) {


}

/**
 * Calculates the range between numbers.
 *
 * @param {number[]} numbers - The numbers to calculate.
 * @returns {number} - The range between the maximum and minimum number.
 */
export function range (numbers) {
  // checkValidity(numbers) // Check if all numbers are valid. ******
  return Math.max(...numbers) - Math.min(...numbers)
}

// TODO: Deviation value #7
// Standardavvikelse, the standard deviation value...
export function standardDeviation (numbers) {

}

/**
 * Will check the array so that returning array only has valid numbers.
 *
 * @param {numbers[]} numbers - The data to analyse
 * @returns {numbers} Returns the numbers if they have not been thrown
 */
export function checkValidity (numbers) {
  const result = numbers
  // Checks if an array.
  if (!Array.isArray(numbers)) {
    throw new TypeError('The passed argument is not an array.')
  }
  // Checks if array has no elements.
  if (numbers.length === 0) {
    throw new Error('The passed array contains no elements.')
  }
  // Checks if array has only numbers or if a numbers has the value of NaN
  if (numbers !== 'number' || Number.isNaN) {
    throw new TypeError('The passed array may only contain valid numbers.')
  }
  return result
}

/**
 * Returns several descriptive statistics (average, maximum, median, minimum,
 * mode, range and standard deviation) from a set of numbers.
 *
 * @param {number[]} numbers - The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {StatisticalSummary} An object whose properties correspond to the descriptive statistics from the data set.
 */
export function summary (numbers) {
  checkValidity(numbers)

  const result = numbers
  // TODO: Return the object StatisticalSummary with all the properties
  return result
}
