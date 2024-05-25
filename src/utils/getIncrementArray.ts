/**
 * Generates an array of numbers incrementing by one, starting from `startNum`
 * and ending at `endNum - 1`.
 *
 * @param {number} startNum - The starting number of the array.
 * @param {number} endNum - The ending number of the array (exclusive).
 * @returns {number[]} An array of numbers incrementing by one from `startNum`
 * to `endNum - 1`.
 *
 * @example
 * getIncrementArray(0, 5);
 * // Returns [0, 1, 2, 3, 4]
 */
export default function getIncrementArray(startNum: number, endNum: number): number[] {
  return Array.from({ length: endNum - startNum }, (_, i) => startNum + i)
}
