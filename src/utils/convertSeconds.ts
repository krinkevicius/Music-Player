/**
 * Converts a number of seconds into a string formatted as "mm:ss".
 *
 * @param {number} seconds - The number of seconds to convert.
 * @returns {string} A string representing the input seconds in "mm:ss" format.
 * @example
 * const result = convertSeconds(150);
 * // Returns "02:30" for 150 seconds
 */

export default function convertSeconds(seconds: number): string {
  const minutesAndSeconds = new Intl.DateTimeFormat('en', {
    minute: '2-digit',
    second: '2-digit',
  })
  return minutesAndSeconds.format(new Date(seconds * 1000))
}
