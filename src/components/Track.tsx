import Duration from '@/components/Duration'
import CurrentlyPlayingSVG from '@/components/ui/CurrentlyPlayingSVG'
import FavoriteButton from '@/components/ui/FavoriteButton'
import useHover from '@/hooks/useHover'
import { useStore } from '@/store'
import type { Song } from '@/types'
import { IoMdPlay, IoMdPause } from 'react-icons/io'

export default function Track({ song }: { song: Song }) {
  const [isHovered, hoverRef] = useHover<HTMLDivElement>()

  const currentSong = useStore(state => state.currentSong)
  const isPlaying = useStore(state => state.isPlaying)
  const onPlayPause = useStore(state => state.onPlayPause)
  const onSelectSong = useStore(state => state.onSelectSong)
  const isCurrentSong = song.id === currentSong.id
  const isCurrentSongPlaying = isCurrentSong && isPlaying

  return (
    <div
      ref={hoverRef}
      className="single-track flex flex-row py-2 px-4 rounded-lg justify-between font-semibold hover:bg-spotifyHover hover:text-white"
    >
      <div className="flex flex-row gap-2 items-center">
        <div className="size-4">
          {isHovered ? (
            isCurrentSongPlaying ? (
              <button onClick={onPlayPause} title="Pause">
                <IoMdPause />
              </button>
            ) : (
              <button
                onClick={() => onSelectSong(song.id)}
                title={`Play ${song.title} by ${song.artist}`}
              >
                <IoMdPlay />
              </button>
            )
          ) : // rkq: Update size???
          isCurrentSongPlaying ? (
            <CurrentlyPlayingSVG className="size-3.5 fill-spotifyGreen" />
          ) : (
            song.id
          )}
        </div>
        <div className="w-16 aspect-square">
          <img className="rounded" src={song.cover} alt={`${song.artist} - ${song.title}`} />
        </div>
        <div className="flex flex-col">
          <div
            className={`${isCurrentSong ? 'text-spotifyGreen' : 'text-white'} text-lg font-semibold`}
          >
            {song.title}
          </div>
          <div className="text-sm font-semibold">{song.artist}</div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-8 pr-4">
        <FavoriteButton songId={song.id} isFavorite={song.favorite} isShowing={isHovered} />
        <Duration source={song.source} />
      </div>
    </div>
  )
}

//   {/* rkq: different variation of a track, remove later */}
//   <div className="single-track flex flex-row py-2 px-4 rounded-lg justify-between font-semibold hover:bg-spotifyHover hover:text-white">
//     <div className="flex flex-row gap-2 items-center">
//       <button>
//         <img src="src/assets/icons/pause.svg" alt="Pause" title="Pause" />
//       </button>
//       <div className="w-16 aspect-square">
//         <img
//           className="rounded"
//           src="src/assets/covers/song2.jpg"
//           alt="Top-Flow - Summer Party"
//         />
//       </div>
//       <div className="flex flex-col">
//         <div className="text-spotifyGreen text-lg font-semibold">Summer Party</div>
//         <div className="text-sm font-semibold">Top-Flow</div>
//       </div>
//     </div>
//     <div className="flex flex-row items-center gap-8 pr-4">
// <button className="flex items-center justify-center">
//   <img
//     src="src/assets/icons/favoritedSong.svg"
//     alt="Remove from favorites"
//     title="Remove from favorites"
//   />
// </button>
//       {/* rkq: Change className */}
//       <div className="duration w-12 pb-0.5 text-spotifyGray">1:41</div>
//     </div>
//   </div>
