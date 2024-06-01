import type { Song } from '@/types'
import { useStore } from '@/store'
import CurrentlyPlayingSVG from '@/components/ui/CurrentlyPlayingSVG'
import { IoMdPlay, IoMdPause } from 'react-icons/io'

type TrackButtonProps = {
  song: Song
  isHovered: boolean
}

export default function TrackButton({ song, isHovered }: TrackButtonProps) {
  const currentSong = useStore(state => state.currentSong)
  const isPlaying = useStore(state => state.isPlaying)
  // const onPlayPause = useStore(state => state.onPlayPause)
  // const onSelectSong = useStore(state => state.onSelectSong)
  const { onPlayPause, onSelectSong } = useStore()
  const isCurrentSongPlaying = song.id === currentSong.id && isPlaying

  if (isHovered && isCurrentSongPlaying)
    return (
      <button onClick={onPlayPause} title="Pause">
        <IoMdPause />
      </button>
    )

  if (isHovered)
    return (
      <button onClick={() => onSelectSong(song.id)} title={`Play ${song.title} by ${song.artist}`}>
        <IoMdPlay />
      </button>
    )

  if (isCurrentSongPlaying) return <CurrentlyPlayingSVG className="size-3.5 fill-customGreen" />

  return <div>{song.id}</div>
}
