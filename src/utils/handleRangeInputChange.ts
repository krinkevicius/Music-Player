/**
 * Creates a change event handler for a range-type input field, parsing its value and passing it to a callback function.
 *
 * @param callbackFn - The callback function to be called with the new value.
 * @returns A change event handler function for range-type input fields.
 * @example
 * // Usage in a React component
 *
 * const MyComponent() {
 *   const handleChange = handleRangeInputChange((newValue) => {
 *     // Do something with the new value
 *   });
 *
 *   return <input type="range" onChange={handleChange} />
 * }
 */
export default function handleRangeInputChange(callbackFn: (newValue: number) => void) {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value)
    callbackFn(newValue)
  }
}
