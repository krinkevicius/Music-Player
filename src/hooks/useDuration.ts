import { useEffect, useState } from 'react'
import { Howl } from 'howler'

/**
 * Custom hook to fetch the duration of an audio file using the Howler.js library.
 *
 * @param {string} src - The path to the audio file for which to fetch the duration.
 * @returns {number} The duration of the audio file in seconds.
 * @example
 * // Usage in a React component
 * const audioSrc = 'path/to/audio.mp3';
 * const duration = useDuration(audioSrc);
 *
 * return (
 *   <div>
 *     {duration !== 0 ? `Duration: ${duration} seconds` : 'Loading duration...'}
 *   </div>
 * );
 */
export default function useDuration(src: string): number {
  const [duration, setDuration] = useState<number>(0)

  useEffect(() => {
    const getDuration = async () => {
      return new Promise<number>((resolve, reject) => {
        const sound = new Howl({
          src,
          preload: 'metadata',
          onload: function () {
            resolve(sound.duration())
          },
          onloaderror: function (error) {
            reject(error)
          },
        })
      })
    }
    getDuration().then(result => setDuration(result))
  }, [src])

  return duration
}
