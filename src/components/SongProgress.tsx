import Duration from '@/components/Duration'
import RangeInput from '@/components/ui/RangeInput'
import useDuration from '@/hooks/useDuration'
import { useStore } from '@/store'
import convertSeconds from '@/utils/convertSeconds'
import handleRangeInputChange from '@/utils/handleRangeInputChange'

export default function SongProgress({
  handleTimeChange,
}: {
  handleTimeChange: (time: number) => void
}) {
  const currentSong = useStore(state => state.currentSong)
  const currentTime = useStore(state => state.currentTime)

  const duration = useDuration(currentSong.source)
  return (
    <div className="grid grid-cols-2 gap-x-2 md:grid-cols-[auto_1fr_auto] w-full h-full text-spotifyGray">
      <div className="w-full h-full col-span-2 order-1 md:order-2 flex items-center md:col-span-1">
        <RangeInput
          value={currentTime}
          max={duration}
          onChange={handleRangeInputChange(handleTimeChange)}
        />
      </div>
      <div className="w-fit order-2 md:order-1 flex items-center justify-center">
        <div className="current-time pb-0.5 md:text-right">{convertSeconds(currentTime)}</div>
      </div>
      <div className="w-fit order-3 place-self-end text-right flex items-center justify-center">
        <Duration source={currentSong.source} />
      </div>
    </div>
  )
}
