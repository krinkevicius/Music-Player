import { useStore } from '@/store'
import { IoMdVolumeHigh } from 'react-icons/io'
import handleRangeInputChange from '@/utils/handleRangeInputChange'
import RangeInput from '@/components/ui/RangeInput'

export default function VolumeControl() {
  const volume = useStore(state => state.volume)
  const onSetVolume = useStore(state => state.onSetVolume)

  return (
    <div className="flex flex-row gap-1">
      <label htmlFor="volume">
        <IoMdVolumeHigh />
      </label>
      <div className="flex items-center justify-center w-full">
        <RangeInput value={volume} max={1} onChange={handleRangeInputChange(onSetVolume)} />
      </div>
    </div>
  )
}
