import useDuration from '@/hooks/useDuration'
import convertSeconds from '@/utils/convertSeconds'

export default function Duration({ source }: { source: string }) {
  const duration = useDuration(source)
  const animation = duration === 0 ? 'animate-pulse' : ''
  return (
    <div className={`${animation} w-fit pb-0.5`}>
      {duration !== 0 ? convertSeconds(duration) : '...'}
    </div>
  )
}
