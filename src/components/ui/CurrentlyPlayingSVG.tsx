import { motion, useAnimate } from 'framer-motion'
import { useEffect } from 'react'
import getIncrementArray from '@/utils/getIncrementArray'

type Bar = {
  height: number
}

const TOP_HEIGHT = 14

const bars: Bar[] = [
  {
    height: 10,
  },
  {
    height: 14,
  },
  {
    height: 3,
  },
  {
    height: 7,
  },
]

export default function CurrentlyPlayingSVG({ className }: { className: string }) {
  return (
    <svg
      viewBox={`0 0 ${TOP_HEIGHT} ${TOP_HEIGHT}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g transform={`matrix(1 0 0 -1 0 ${TOP_HEIGHT})`}>
        {bars.map((bar, index) => {
          return <Bar key={index} initialHeight={bar.height} xPos={index * 4} />
        })}
      </g>
    </svg>
  )
}

function Bar({ initialHeight, xPos }: { initialHeight: number; xPos: number }) {
  const [scope, animate] = useAnimate()
  const duration = 1.5
  useEffect(() => {
    const barAnimation = async () => {
      await animate(
        scope.current,
        {
          height:
            initialHeight !== TOP_HEIGHT
              ? getIncrementArray(initialHeight, TOP_HEIGHT)
              : [initialHeight],
        },
        { duration: (TOP_HEIGHT - initialHeight) / (TOP_HEIGHT * duration) },
      )
      if (!scope.current) return
      await animate(scope.current, { height: [14, 1, 8, 4, 13] }, { repeat: Infinity, duration })
    }
    barAnimation()
  }, [scope, animate, initialHeight])

  return (
    <motion.rect
      ref={scope}
      initial={{ height: initialHeight }}
      width={2}
      height={initialHeight}
      x={xPos}
    />
  )
}
