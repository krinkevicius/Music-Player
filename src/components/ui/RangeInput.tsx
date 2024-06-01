import { COMBINED_STYLES, COMBINED_HOVER_STYLES } from '@/lib/constants/rangeInputStyles'
import React from 'react'

type RangeInputProps = {
  value: number
  max: number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface ExtendedCSSProperties extends React.CSSProperties {
  '--customWidth'?: string
}

export default function RangeInput({ value, max, onChange }: RangeInputProps) {
  const progress = (value / max) * 100

  const isDisabled = onChange ? false : true

  const commonStyles = `no-default-webkit-thumb appearance-none relative w-full h-1 rounded-lg bg-rangeInputBackground outline-none ${!isDisabled && 'cursor-pointer'}`

  const completeStyles = `${commonStyles} ${COMBINED_STYLES.join(' ')} ${isDisabled ? '' : `${COMBINED_HOVER_STYLES.join(' ')}`}`

  const style: ExtendedCSSProperties = {
    '--customWidth': `${progress}%`,
  }

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
      style={style}
    />
  )
}
