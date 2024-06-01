import { useEffect, useRef } from 'react'
import { useStore } from '@/store'

/**
 * Custom hook to manage audio playback, synchronized with a Zustand store.
 *
 * @returns React ref for HTML audio element and a function to set the playback time.
 *
 * @example
 * // Usage in a React component
 * const { audioRef, setAudioTime } = useAudio();
 *
 * return (
 *   <div>
 *     <audio ref={audioRef} controls />
 *     <input
 *       type="range"
 *       onChange={(e) => setAudioTime(Number(e.target.value))}
 *     />
 *   </div>
 * );
 *
 * @description
 * This hook handles the following:
 *
 * 1. **Updating Audio Source**:
 *    - Updates the `src` attribute of the audio element whenever `currentSong` changes, ensuring that the correct song is loaded.
 *
 * 2. **Play/Pause Audio**:
 *    - Controls the playback state of the audio element based on `isPlaying`. It ensures that the audio starts playing when the song changes if it was already playing.
 *
 * 3. **Handle Song End**:
 *    - Listens for the `ended` event on the audio element to automatically play the next song in the playlist when the current song finishes.
 *
 * 4. **Update Current Time**:
 *    - Updates the `currentTime` state in the Zustand store whenever the `timeupdate` event fires on the audio element, ensuring that the current playback time is synchronized with the store.
 *
 * 5. **Set Volume**:
 *    - Adjusts the volume of the audio element based on the `volume` state, ensuring that changes in volume are applied to the audio element.
 */
export default function useAudio(): [React.RefObject<HTMLAudioElement>, (time: number) => void] {
  const currentSong = useStore(state => state.currentSong)
  const isPlaying = useStore(state => state.isPlaying)
  const volume = useStore(state => state.volume)
  // const onNextPrevSong = useStore(state => state.onNextPrevSong)
  // const onSetCurrentTime = useStore(state => state.onSetCurrentTime)
  const { onNextPrevSong, onSetCurrentTime } = useStore()
  const audioRef = useRef<HTMLAudioElement>(null)
  const audioElement = audioRef.current

  function setAudioTime(time: number) {
    if (!audioElement) return
    audioElement.currentTime = time
  }

  useEffect(() => {
    if (!audioElement) return
    audioElement.src = currentSong.source
  }, [audioElement, currentSong.source])

  useEffect(() => {
    if (!audioElement) return

    if (isPlaying) {
      audioElement.play()
    } else {
      audioElement.pause()
    }
  }, [audioElement, currentSong.source, isPlaying])

  useEffect(() => {
    const nextSong = () => onNextPrevSong('next')

    audioElement?.addEventListener('ended', nextSong)

    return () => audioElement?.removeEventListener('ended', nextSong)
  }, [audioElement, onNextPrevSong])

  useEffect(() => {
    if (!audioElement) return
    const handleTimeUpdate = () => {
      onSetCurrentTime(audioElement.currentTime)
    }

    audioElement?.addEventListener('timeupdate', handleTimeUpdate)

    return () => audioElement?.removeEventListener('timeupdate', handleTimeUpdate)
  }, [audioElement, onSetCurrentTime])

  useEffect(() => {
    if (!audioElement) return
    audioElement.volume = volume
  }, [audioElement, volume])

  return [audioRef, setAudioTime]
}
