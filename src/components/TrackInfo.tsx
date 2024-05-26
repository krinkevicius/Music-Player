import FavoriteButton from '@/components/ui/FavoriteButton'
import type { Song } from '@/types'

type TrackInfoProps = {
  song: Song
  showFavoriteButton?: boolean
  highlightArtistName?: boolean
}

export default function TrackInfo({
  song,
  showFavoriteButton = true,
  highlightArtistName = false,
}: TrackInfoProps) {
  return (
    <>
      <div className="aspect-square box-content h-full">
        <img src={song.cover} alt={`${song.artist} - ${song.title}`} className="rounded" />
      </div>
      <div className="flex flex-row justify-between w-full items-center text-inherit">
        <div className="flex flex-col justify-center">
          <div className="text-sm font-semibold">{song.title}</div>
          <div
            className={`text-xs font-semibold ${highlightArtistName ? 'text-white' : 'text-customGray'}`}
          >
            {song.artist}
          </div>
        </div>
        <FavoriteButton
          songId={song.id}
          isFavorite={song.favorite}
          isShowing={showFavoriteButton}
        />
      </div>
    </>
  )
}
