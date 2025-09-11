'use client'

import { useEffect, useState } from 'react'

interface StatItem {
  label: string
  value: number
  suffix: string
  icon: string
  category: 'engineering' | 'running'
}

const stats: StatItem[] = [
  {
    label: 'Lines of Code',
    value: 47832,
    suffix: '+',
    icon: '💻',
    category: 'engineering',
  },
  {
    label: 'Miles Run',
    value: 1247,
    suffix: '',
    icon: '🏃‍♂️',
    category: 'running',
  },
  {
    label: 'Railroad Miles',
    value: 40000,
    suffix: '+',
    icon: '🚂',
    category: 'engineering',
  },
  {
    label: 'Coffee Consumed',
    value: 999,
    suffix: '',
    icon: '☕',
    category: 'engineering',
  },
]

function AnimatedCounter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(value * easeOutCubic))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [value, duration])

  return <span>{count.toLocaleString()}</span>
}

export default function DynamicStats() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="py-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="rounded-lg bg-gray-50 p-4 text-center dark:bg-gray-800">
              <div className="mb-2 text-2xl">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-gray-100">
                {stat.value.toLocaleString()}
                {stat.suffix}
              </div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="py-8">
      <div className="mb-6 text-center">
        <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
          By the Numbers
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          A snapshot of the dual life: engineering and running
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group rounded-lg bg-gray-50 p-4 text-center transition-colors duration-200 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="mb-2 text-2xl transition-transform duration-200 group-hover:scale-110">
              {stat.icon}
            </div>
            <div className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-gray-100">
              <AnimatedCounter value={stat.value} duration={1500 + index * 200} />
              {stat.suffix}
            </div>
            <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-400 dark:text-gray-500">
          This year • Updated in real-time-ish
        </p>
      </div>
    </div>
  )
}
