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

// TODO: Medelvärdet #1

// TODO: Maximum #2

function maximum (number) {
  return Math.max(...maximum)
}


// TODO: Median #3

// TODO: Minimum #4
// Math.min

// TODO: Mode #5
// function to return the mode value, whatever that is...
// Typvärde.

// TODO: Range #6
// function to return the range value, whatever that means...
// Variationsbredd 

// TODO: Deviation value #7
// Standardavvikelse, the standard deviation value...


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
  const result = numbers

  // Check if an array. OK
  if (!Array.isArray(numbers)) {
    throw new TypeError('The passed argument is not an array.')
  }
  // Check if array has no elements. OK
  if (Array.length !== 0) {
    throw new Error('The passed array contains no elements.')
  }

  // TODO: Check if array has only numbers.
  if (typeof (numbers) !== 'number') {
    throw new TypeError('The passed array my only contain valid numbers.')
  }
  // Number .NaN should not pass.
  if (Number.isNaN(numbers) === true) {
    throw new Error('The passed array may only contain valid numbers.')
  }

  // TODO: Return the object StatisticalSummary with all the properties
  return result
}
