import { useEffect } from 'react'

/**
 * Custom hook that registers a keyboard shortcut and calls the provided callback function when the specified key is pressed.
 *
 * @param {string} key - The key that triggers the callback function when pressed.
 * @param {Function} callbackFn - The callback function to be called when the key is pressed.
 *
 * @example
 * // Usage in a React component
 * useKeyBoardShortcut('Enter', () => {
 *   console.log('Enter was pressed')
 * })
 */
export default function useKeyboardShortcut(key: string, callbackFn: () => void) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== key) return
      event.preventDefault()
      callbackFn()
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [key, callbackFn])
}
