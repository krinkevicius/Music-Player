import { useStore } from '@/store'
import { IoMdVolumeHigh } from 'react-icons/io'
import handleRangeInputChange from '@/utils/handleRangeInputChange'

export default function VolumeControl() {
  const volume = useStore(state => state.volume)
  const onSetVolume = useStore(state => state.onSetVolume)

  return (
    // rkq: Change styles?
    <div className="w-[30%]">
      <label htmlFor="volume">
        <IoMdVolumeHigh />
      </label>
      <input
        type="range"
        id="volume"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleRangeInputChange(onSetVolume)}
      />
    </div>
  )
}
