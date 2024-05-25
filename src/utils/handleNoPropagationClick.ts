/**
 * A higher-order function that stops the propagation of the click event
 * and then calls the provided callback function.
 *
 * @param callbackFn - The callback function to be called after stopping event propagation.
 * @returns A function that takes a React.MouseEvent and stops its propagation before calling the callback function.
 *
 * @example
 * // Usage in a React component
 *
 * const MyComponent() {
 *   const handleClick = () => {
 *     console.log('Button clicked');
 *   };
 *
 *   return (
 *     <button onClick={handleNoPropagationClick(handleClick)}>
 *       Click Me
 *     </button>
 *   );
 * }
 */
export default function handleNoPropagationClick(callbackFn: () => void) {
  return (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    callbackFn()
  }
}
