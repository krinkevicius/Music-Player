/**
 * Converts a number of seconds into a string formatted as "mm:ss".
 *
 * @param {number} secs - The number of seconds to convert.
 * @returns {string} A string representing the input seconds in "mm:ss" format.
 * @example
 * const result = convertSeconds(150);
 * // Returns "02:30" for 150 seconds
 */

export default function convertSeconds(secs: number): string {
  const minutes = Math.floor(secs / 60)
  const seconds = Math.floor(secs % 60)
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}
