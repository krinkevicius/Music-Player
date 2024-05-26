import {
  CHROMIUM_PROGRESS_STYLES,
  CHROMIUM_THUMB_STYLES,
  FIREFOX_PROGRESS_STYLES,
  FIREFOX_THUMB_STYLES,
} from '@/lib/constants/rangeInputStyles'
import classNames from 'classnames'

type RangeInputProps = {
  value: number
  max: number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function RangeInput({ value, max, onChange }: RangeInputProps) {
  const progress = (value / max) * 100

  const isDisabled = onChange ? false : true

  const commonStyles = `no-default-webkit-thumb appearance-none relative w-full h-1 rounded-lg bg-rangeInputBackground outline-none ${!isDisabled && 'cursor-pointer'}`

  const completeStyles = classNames(
    commonStyles,
    ...CHROMIUM_PROGRESS_STYLES,
    ...CHROMIUM_THUMB_STYLES,
    ...FIREFOX_PROGRESS_STYLES,
    ...FIREFOX_THUMB_STYLES,
  )

  return (
    <input
      type="range"
      min="0"
      max={max}
      value={value}
      step={0.01}
      onChange={onChange}
      disabled={isDisabled}
      className={completeStyles}
      style={{ '--customWidth': `${progress}%` } as React.CSSProperties}
    />
  )
}
