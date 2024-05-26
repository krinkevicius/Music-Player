import Track from '@/components/Track'
import { useStore } from '@/store'

export default function TrackList() {
  const songs = useStore(state => state.songs)

  return (
    <div className="track-list overflow-y-auto flex flex-col bg-customCharcoal gap-2 h-full w-full">
      {songs.map(song => {
        return <Track key={song.id} song={song} />
      })}
    </div>
  )
}
