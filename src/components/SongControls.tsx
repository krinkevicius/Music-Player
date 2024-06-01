import PlayPauseButton from '@/components/ui/PlayPauseButton'
import { useStore } from '@/store'
import { IoIosSkipBackward, IoIosSkipForward, IoMdPlayCircle } from 'react-icons/io'
import { IoPauseCircle } from 'react-icons/io5'

export default function SongControls() {
  const { onNextPrevSong } = useStore()
  return (
    <div className="controls flex flex-row gap-4 h-12 md:gap-0 items-center justify-center">
      <button onClick={() => onNextPrevSong('prev')}>
        <IoIosSkipBackward className="size-8 md:size-6 hover:fill-white" />
      </button>
      <div className="flex items-center justify-center h-12 w-12 md:h-9 md:w-9">
        <PlayPauseButton
          PlayIcon={
            <IoMdPlayCircle className="fill-white size-11 hover:size-12 md:size-8 md:hover:size-9" />
          }
          PauseIcon={
            <IoPauseCircle className="fill-white size-11 hover:size-12 md:size-8 md:hover:size-9" />
          }
        />
      </div>
      <button onClick={() => onNextPrevSong('next')}>
        <IoIosSkipForward className="size-8 md:size-6 hover:fill-white" />
      </button>
    </div>
  )
}
