import FavoriteButton from '@/components/ui/FavoriteButton'
import type { Song } from '@/types'

export default function TrackInfo({ song }: { song: Song }) {
  return (
    <>
      <div className="h-full max-h-48 aspect-square">
        <img src={song.cover} alt={`${song.artist} - ${song.title}`} className="rounded" />
      </div>
      <div className="flex flex-row justify-between w-full items-center">
        <div className="flex flex-col justify-center">
          <div className="text-white text-sm font-semibold">{song.title}</div>
          <div className="text-white text-xs font-semibold">{song.artist}</div>
        </div>
        <FavoriteButton songId={song.id} isFavorite={song.favorite} />
      </div>
    </>
  )
}
