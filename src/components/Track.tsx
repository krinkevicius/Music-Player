import Duration from '@/components/Duration'
import TrackInfo from '@/components/TrackInfo'
import TrackButton from '@/components/ui/TrackButton'
import useHover from '@/hooks/useHover'
import { useStore } from '@/store'
import type { Song } from '@/types'

export default function Track({ song }: { song: Song }) {
  const [isHovered, hoverRef] = useHover<HTMLDivElement>()

  const currentSong = useStore(state => state.currentSong)
  const isCurrentSong = song.id === currentSong.id

  return (
    <div
      ref={hoverRef}
      className={`flex flex-row gap-2 py-2 px-4 rounded-lg items-center justify-between font-semibold hover:bg-spotifyHover ${isCurrentSong ? 'text-spotifyGreen' : 'text-white'}`}
    >
      <div className="flex items-center justify-center size-6 text-center">
        <TrackButton song={song} isHovered={isHovered} />
      </div>
      <div className="flex flex-row w-full h-16 gap-2">
        <TrackInfo song={song} showFavoriteButton={isHovered} highlightArtistName={isHovered} />
      </div>
      <div className="flex items-center w-12 gap-8 px-4">
        <Duration source={song.source} />
      </div>
    </div>
  )
}
