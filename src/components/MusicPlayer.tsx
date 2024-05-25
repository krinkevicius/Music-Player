import Duration from '@/components/Duration'
import VolumeControl from '@/components/VolumeControl'
import useDuration from '@/hooks/useDuration'
import useAudio from '@/hooks/useAudio'
import { useStore } from '@/store'
import { IoIosSkipBackward } from 'react-icons/io'
import { IoMdPlayCircle } from 'react-icons/io'
import { IoPauseCircle } from 'react-icons/io5'
import { IoIosSkipForward } from 'react-icons/io'
import convertSeconds from '@/utils/convertSeconds'
import handleRangeInputChange from '@/utils/handleRangeInputChange'
import RangeInput from '@/components/ui/RangeInput'

export default function MusicPlayer() {
  const currentSong = useStore(state => state.currentSong)
  const isPlaying = useStore(state => state.isPlaying)
  const currentTime = useStore(state => state.currentTime)
  const onPlayPause = useStore(state => state.onPlayPause)
  const onNextPrevSong = useStore(state => state.onNextPrevSong)

  const duration = useDuration(currentSong.source)

  const [audioRef, setAudioTime] = useAudio()

  return (
    <>
      <audio ref={audioRef} />
      <div className="music-player hidden md:flex flex-row lg:flex-col bg-lightBlack min-w-fit p-2 justify-center">
        {/* rkq: change className */}
        <div className="song-info flex gap-x-2 flex-row lg:flex-col w-[30%]">
          <div className="w-14 lg:w-48 aspect-square">
            <img
              className="rounded"
              src={currentSong.cover}
              alt={`${currentSong.artist} - ${currentSong.title}`}
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-white text-sm lg:text-lg font-semibold">{currentSong.title}</div>
            <div className="text-xs lg:text-sm font-semibold">{currentSong.artist}</div>
          </div>
        </div>
        <div className="player flex flex-col">
          <div className="controls flex flex-row">
            <button onClick={() => onNextPrevSong('prev')}>
              <IoIosSkipBackward className="size-6 hover:fill-white" />
            </button>
            <button className="flex justify-center items-center size-9" onClick={onPlayPause}>
              {isPlaying ? (
                <IoPauseCircle className="size-8 fill-white hover:size-9" />
              ) : (
                <IoMdPlayCircle className="size-8 fill-white hover:size-9" />
              )}
            </button>
            <button onClick={() => onNextPrevSong('next')}>
              <IoIosSkipForward className="size-6 hover:fill-white" />
            </button>
          </div>
          <div className="length flex flex-row gap-2">
            <div className="current-time w-12 pb-0.5 text-spotifyGray">
              {convertSeconds(currentTime)}
            </div>

            {/* <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleRangeInputChange(setAudioTime)}
            /> */}

            <RangeInput
              value={currentTime}
              max={duration}
              onChange={handleRangeInputChange(setAudioTime)}
            />

            <Duration source={currentSong.source} />
          </div>
        </div>
        <VolumeControl />
      </div>
    </>
  )
}
