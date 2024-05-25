import {
  CHROMIUM_PROGRESS_STYLES,
  CHROMIUM_THUMB_STYLES,
  PROGRESS_STYLES,
  PROGRESS_STYLES_HOVER,
  THUMB_STYLES,
  THUMB_STYLES_HOVER,
} from '@/lib/constants/rangeInputStyles'
import getStyles from '@/utils/getStyles'

type RangeInputProps = {
  value: number
  max: number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function RangeInput({ value, max, onChange }: RangeInputProps) {
  const progress = (value / max) * 100

  const isDisabled = onChange ? false : true

  const commonStyles = `no-default-webkit-thumb appearance-none relative w-full h-1 rounded-lg bg-rangeInputBackground outline-none ${!isDisabled && 'cursor-pointer'}`

  const chromiumProgressStyles = getStyles('before:', [
    ...PROGRESS_STYLES,
    ...CHROMIUM_PROGRESS_STYLES,
    ...(isDisabled ? [] : PROGRESS_STYLES_HOVER),
  ])

  const chromiumThumbStyles = getStyles('[&::-webkit-slider-thumb]:', [
    ...CHROMIUM_THUMB_STYLES,
    ...THUMB_STYLES,
    ...(isDisabled ? [] : THUMB_STYLES_HOVER),
  ])

  const firefoxProgressStyles = getStyles('[&::-moz-range-progress]:', [
    ...PROGRESS_STYLES,
    ...(isDisabled ? [] : PROGRESS_STYLES_HOVER),
  ])

  const firefoxThumbStyles = getStyles('[&::-moz-range-thumb]:', [
    ...THUMB_STYLES,
    ...(isDisabled ? [] : THUMB_STYLES_HOVER),
  ])

  return (
    <input
      type="range"
      min="0"
      max={max}
      value={value}
      onChange={onChange}
      disabled={isDisabled}
      className={`${commonStyles} ${chromiumProgressStyles} ${firefoxProgressStyles} ${firefoxThumbStyles} ${chromiumThumbStyles}`}
      style={{ '--customWidth': `${progress}%` } as React.CSSProperties}
    />
  )
}
