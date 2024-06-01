import convertSeconds from '@/utils/convertSeconds'

export default function Duration({ duration }: { duration: number }) {
  // const duration = useDuration(source)
  const animation = duration === 0 ? 'animate-pulse' : ''
  return <div className={`${animation} w-fit pb-0.5`}>{convertSeconds(duration)}</div>
}
