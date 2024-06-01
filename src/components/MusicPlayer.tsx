import { useState } from 'react'
import { useStore } from '@/store'
import useAudio from '@/hooks/useAudio'
import useKeyboardShortcut from '@/hooks/useKeyboardShortcut'
import TrackInfo from '@/components/TrackInfo'
import PlayPauseButton from '@/components/ui/PlayPauseButton'
import RangeInput from '@/components/ui/RangeInput'
import VolumeControl from '@/components/VolumeControl'
import SongProgress from '@/components/SongProgress'
import SongControls from '@/components/SongControls'
import { IoMdPlay, IoMdPause, IoIosArrowDown } from 'react-icons/io'
import { NEXT_SONG_KEY, PLAY_PAUSE_KEY, PREVIOUS_SONG_KEY } from '@/lib/constants/keyboardShortcuts'

export default function MusicPlayer() {
  const [showModal, setShowModal] = useState(false)
  const currentSong = useStore(state => state.currentSong)
  const currentTime = useStore(state => state.currentTime)
  const { onPlayPause, onNextPrevSong } = useStore()

  const [audioRef, setAudioTime] = useAudio()

  useKeyboardShortcut(PLAY_PAUSE_KEY, onPlayPause)
  useKeyboardShortcut(PREVIOUS_SONG_KEY, () => onNextPrevSong('prev'))
  useKeyboardShortcut(NEXT_SONG_KEY, () => onNextPrevSong('next'))

  return (
    <>
      <audio ref={audioRef} />
      <div
        onClick={() => setShowModal(prevState => !prevState)}
        className="mobile-player flex flex-col bg-customCharcoal gap-1 px-8 py-2 justify-center cursor-pointer md:hidden"
      >
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2 h-14 w-full text-white">
            <TrackInfo song={currentSong} />
          </div>
          <div className="flex items-center justify-center pl-4">
            <PlayPauseButton
              PlayIcon={<IoMdPlay className="size-6 fill-customGray hover:fill-white" />}
              PauseIcon={<IoMdPause className="size-6 fill-customGray hover:fill-white" />}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <RangeInput value={currentTime} max={currentSong.duration} />
        </div>
      </div>
      <div
        className={`${showModal ? 'fixed inset-0 flex' : 'hidden'} w-full md:relative md:flex items-center justify-center bg-[rgb(0_0_0_/_20%)] z-50`}
      >
        <div className="p-8 md:p-4 w-full h-full max-h-screen rounded-xl bg-customCharcoal shadow-md text-customGray flex flex-col gap-12">
          <button
            className="md:hidden"
            onClick={() => setShowModal(prevState => !prevState)}
            title="Close"
          >
            <IoIosArrowDown className="hover:fill-white" />
          </button>

          <div className="container mx-auto flex flex-col max-w-80 gap-2 items-center md:flex-row md:max-w-none md:justify-between">
            <div className="flex flex-col gap-2 text-white md:flex-row md:min-w-52 md:pr-3 md:h-14">
              <TrackInfo song={currentSong} />
            </div>
            <div className="flex flex-col w-full gap-3 md:gap-0">
              <SongControls />
              <SongProgress handleTimeChange={setAudioTime} />
            </div>
            <div className="md:min-w-52 md:pl-3">
              <VolumeControl />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
