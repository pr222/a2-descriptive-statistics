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

function maxNumber(maximum) {
  const maxNumber = Math.max(...maximum)
  return maxNumber
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

  // TODO: Check if an array. If not, make a TypeError 
  // It should then say "The passed argument is not an array."

  // TODO: Check if array has no elements. If not, make an Error
  // It should then say "The passed array contains no elements"

  // TODO: Check if array has only numbers. If not, make a TypeError
  // It should then say "The passed array contains not just numbers."

  // TODO: Number .NaN may not pass. Message:
  // "The passed array may only contain valid numbers. "




  // TODO: Return the object StatisticalSummary with all the properties

}
