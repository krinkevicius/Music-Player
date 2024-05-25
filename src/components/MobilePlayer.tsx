import TrackInfo from '@/components/TrackInfo'
import PlayPauseButton from '@/components/ui/PlayPauseButton'
import RangeInput from '@/components/ui/RangeInput'
import useDuration from '@/hooks/useDuration'
import { useStore } from '@/store'
import { useState } from 'react'
import { IoMdPlay, IoMdPause, IoIosArrowDown } from 'react-icons/io'

export default function MobilePlayer() {
  const [showModal, setShowModal] = useState(true)
  const currentSong = useStore(state => state.currentSong)
  const currentTime = useStore(state => state.currentTime)

  const duration = useDuration(currentSong.source)
  return (
    <>
      <div
        onClick={() => setShowModal(prevState => !prevState)}
        className="mobile-player flex flex-col bg-lightBlack gap-2 px-4 py-2 justify-center cursor-pointer md:hidden"
      >
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2 h-14 w-full">
            <TrackInfo song={currentSong} />
          </div>
          <div className="flex items-center justify-center">
            <PlayPauseButton
              PlayIcon={<IoMdPlay className="size-6 fill-spotifyGray hover:fill-white" />}
              PauseIcon={<IoMdPause className="size-6 fill-spotifyGray hover:fill-white" />}
            />
          </div>
        </div>
        <div>
          <RangeInput value={currentTime} max={duration} />
        </div>
      </div>
      <div
        className={`${showModal ? 'fixed inset-0 flex' : 'hidden'} w-full md:relative md:flex items-center justify-center bg-[rgb(0_0_0_/_20%)] z-50`}
      >
        <div className="p-8 w-full h-full max-h-screen rounded-xl bg-lightBlack shadow-md text-white">
          <button
            className="md:hidden"
            onClick={() => setShowModal(prevState => !prevState)}
            title="Close"
          >
            <IoIosArrowDown className="fill-spotifyGray hover:fill-white" />
          </button>
          <div className="flex flex-col gap-2 md:flex-row items-center">
            <TrackInfo song={currentSong} />
          </div>
        </div>
      </div>
      <div className="mobile-modal bg-lightBlack flex flex-col h-screen max-h-screen z-40 md:hidden">
        <div className="w-48 aspect-square">
          <img
            className="rounded"
            src="src/assets/covers/song2.jpg"
            alt="Top-Flow - Summer Party"
          />
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-center">
            <div className="text-white text-sm lg:text-lg font-semibold">Tokyo Cafe</div>
            <div className="text-xs lg:text-sm font-semibold">TVARI</div>
          </div>
          <div className="like-button">Like</div>
        </div>
        <RangeInput value={90} max={100} />
        <div className="flex flex-row justify-between">
          <div className="current-time w-12 pb-0.5 text-spotifyGray">0:00</div>

          <div className="duration w-12 pb-0.5 text-spotifyGray">2:23</div>
        </div>
        <div className="controls flex flex-row">
          <button>Prev Song</button>
          <button>Play/Pause</button>
          <button>Next Song</button>
        </div>
        <div className="volume-control w-[30%]">Volume</div>
      </div>
    </>
  )
}
