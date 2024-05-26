// import { songs } from '@/lib/constants/songs'
import useHover from '@/hooks/useHover'

// const activeSong = songs[2]

export default function Test() {
  const [isHovered, ref] = useHover<HTMLDivElement>()

  return (
    <div className="bg-black h-screen py-2 text-spotifyGray">
      <div className="container mx-auto h-full bg-lightBlack rounded-lg">
        {/* rkq: Change className */}
        <div className="track-list flex flex-col gap-2 h-full p-4">
          {/* rkq: Change className */}
          <div
            ref={ref}
            className="single-track flex flex-row py-2 px-4 rounded-lg justify-between font-semibold hover:bg-spotifyHover hover:text-white"
          >
            <div className="flex flex-row gap-2 items-center">
              <button>
                <img src="src/assets/icons/play.svg" alt="Play" title="Play" />
              </button>
              <div className="w-16 aspect-square">
                <img
                  className="rounded"
                  src="src/assets/covers/song1.jpg"
                  alt="TVARI - Tokyo Cafe"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-white text-lg font-semibold">Tokyo Cafe</div>
                <div className="text-sm font-semibold">TVARI</div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-8 pr-4">
              {isHovered && (
                <button className="flex items-center justify-center">
                  <img
                    src="src/assets/icons/addToFavorites.svg"
                    alt="Add to favorites"
                    title="Add to favorites"
                  />
                </button>
              )}
              {/* rkq: Change className */}
              <div className="duration w-12 pb-0.5 text-spotifyGray">2:23</div>
            </div>
          </div>

          {/* rkq: Change className */}
          <div className="single-track flex flex-row py-2 px-4 rounded-lg justify-between font-semibold hover:bg-spotifyHover hover:text-white">
            <div className="flex flex-row gap-2 items-center">
              <button>
                <img src="src/assets/icons/pause.svg" alt="Pause" title="Pause" />
              </button>
              <div className="w-16 aspect-square">
                <img
                  className="rounded"
                  src="src/assets/covers/song2.jpg"
                  alt="Top-Flow - Summer Party"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-spotifyGreen text-lg font-semibold">Summer Party</div>
                <div className="text-sm font-semibold">Top-Flow</div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-8 pr-4">
              <button className="flex items-center justify-center">
                <img
                  src="src/assets/icons/favoritedSong.svg"
                  alt="Remove from favorites"
                  title="Remove from favorites"
                />
              </button>
              {/* rkq: Change className */}
              <div className="duration w-12 pb-0.5 text-spotifyGray">1:41</div>
            </div>
          </div>

          <div className="playing-track flex flex-row gap-1">
            <div className="w-32 aspect-square">
              <img
                className="rounded"
                src="src/assets/covers/song2.jpg"
                alt="Top-Flow - Summer Party"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-spotifyGreen">Summer Party</div>
              <div>Top-Flow</div>
            </div>
          </div>
          {/* <WaveformBar /> */}
          <Test />
        </div>
        {/* <TrackList /> */}
        <div className="audio-player h-8">This is the player</div>
      </div>
      {/* <CanvasTest /> */}
    </div>
  )
}
