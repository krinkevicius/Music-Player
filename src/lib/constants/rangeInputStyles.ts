export const CHROMIUM_PROGRESS_STYLES = [
  'before:bg-white',
  'before:rounded-lg',
  'before:h-1',
  'before:content-[""]',
  'before:w-[var(--customWidth)]',
  'before:absolute',
  'before:z-10',
]

export const CHROMIUM_PROGRESS_STYLES_HOVER = ['before:hover:bg-customGreen']

export const FIREFOX_PROGRESS_STYLES = [
  '[&::-moz-range-progress]:bg-white',
  '[&::-moz-range-progress]:rounded-lg',
  '[&::-moz-range-progress]:h-1',
]

export const FIREFOX_PROGRESS_STYLES_HOVER = ['[&::-moz-range-progress]:hover:bg-customGreen']

export const CHROMIUM_THUMB_STYLES = [
  '[&::-webkit-slider-thumb]:z-20',
  '[&::-webkit-slider-thumb]:relative',
  '[&::-webkit-slider-thumb]:bg-white',
  '[&::-webkit-slider-thumb]:rounded-full',
  '[&::-webkit-slider-thumb]:border-0',
  '[&::-webkit-slider-thumb]:w-0',
  '[&::-webkit-slider-thumb]:h-0',
]

export const CHROMIUM_THUMB_STYLES_HOVER = [
  '[&::-webkit-slider-thumb]:hover:w-3',
  '[&::-webkit-slider-thumb]:hover:h-3',
]

export const FIREFOX_THUMB_STYLES = [
  '[&::-moz-range-thumb]:rounded-full',
  '[&::-moz-range-thumb]:border-0',
  '[&::-moz-range-thumb]:w-0',
  '[&::-moz-range-thumb]:h-0',
]

export const FIREFOX_THUMB_STYLES_HOVER = [
  '[&::-moz-range-thumb]:hover:w-3',
  '[&::-moz-range-thumb]:hover:h-3',
]

export const COMBINED_STYLES = [
  ...CHROMIUM_PROGRESS_STYLES,
  ...FIREFOX_PROGRESS_STYLES,
  ...CHROMIUM_THUMB_STYLES,
  ...FIREFOX_THUMB_STYLES,
]

export const COMBINED_HOVER_STYLES = [
  ...CHROMIUM_PROGRESS_STYLES_HOVER,
  ...FIREFOX_PROGRESS_STYLES_HOVER,
  ...CHROMIUM_THUMB_STYLES_HOVER,
  ...FIREFOX_THUMB_STYLES_HOVER,
]
