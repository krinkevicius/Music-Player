import { useStore } from '@/store'
import handleNoPropagationClick from '@/utils/handleNoPropagationClick'
import type { ReactElement } from 'react'

type PlayPauseButtonProps = {
  PlayIcon: ReactElement
  PauseIcon: ReactElement
}

export default function PlayPauseButton({ PlayIcon, PauseIcon }: PlayPauseButtonProps) {
  const isPlaying = useStore(state => state.isPlaying)
  const { onPlayPause } = useStore()

  return (
    <button
      onClick={handleNoPropagationClick(onPlayPause)}
      className="flex justify-center items-center"
      title={isPlaying ? 'Pause' : 'Play'}
    >
      {isPlaying ? PauseIcon : PlayIcon}
    </button>
  )
}
