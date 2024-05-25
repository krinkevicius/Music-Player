/**
 * Prepends a given prefix to each element of an array of strings and combines them into a single string.
 *
 * @param {string} prefix - The prefix to prepend to each element of the array.
 * @param {string[]} classes - The array of strings to which the prefix will be prepended.
 * @returns {string} - A single string with each prefixed element joined by a space.
 *
 * @example
 * const result = getStyles('before:', ['content-[""]', 'h-1']);
 * // Returns 'before:content-[""] before:h-1'
 */
export default function getStyles(prefix: string, classes: string[]): string {
  return classes.map(cls => `${prefix}${cls}`).join(' ')
}
