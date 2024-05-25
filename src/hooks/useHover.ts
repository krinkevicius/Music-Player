import { useState, useRef, useEffect } from 'react'

/**
 * Custom hook to track whether a DOM element is being hovered over.
 *
 * @template T - The type of the DOM element to be tracked.
 * @returns {[boolean, React.RefObject<T>]} An array containing a boolean value indicating whether the element is hovered over,
 * and a React ref object for attaching to the DOM element.
 * @example
 * // Usage in a React component
 * const [isHovered, hoverRef] = useHover<HTMLDivElement>();
 *
 * return (
 *   <div ref={hoverRef}>
 *     {isHovered ? 'Hovered' : 'Not Hovered'}
 *   </div>
 * );
 */
export default function useHover<T extends HTMLElement>(): [boolean, React.RefObject<T>] {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const hoverRef = useRef<T>(null)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  useEffect(() => {
    const element = hoverRef.current
    if (!element) return

    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return [isHovered, hoverRef]
}
