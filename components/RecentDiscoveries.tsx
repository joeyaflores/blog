'use client'

import { useEffect, useState } from 'react'

interface Discovery {
  text: string
  icon: string
  category: 'running' | 'tech' | 'life' | 'reading'
  timeAgo: string
}

const discoveries: Discovery[] = [
  {
    text: "Found an amazing trail loop near downtown that's perfect for tempo runs",
    icon: '🌲',
    category: 'running',
    timeAgo: '2 days ago',
  },
  {
    text: 'New Go library for processing railroad sensor data - cuts processing time by 40%',
    icon: '📊',
    category: 'tech',
    timeAgo: '1 week ago',
  },
  {
    text: 'Running form tip: slightly higher cadence actually reduced my knee stress',
    icon: '💨',
    category: 'running',
    timeAgo: '3 days ago',
  },
  {
    text: "Sally Rooney's character development techniques are incredible",
    icon: '✨',
    category: 'reading',
    timeAgo: '5 days ago',
  },
  {
    text: "Neovim's LSP integration makes debugging so much smoother",
    icon: '🔧',
    category: 'tech',
    timeAgo: '1 week ago',
  },
  {
    text: 'Morning runs before 7am hit differently - better focus all day',
    icon: '🌅',
    category: 'life',
    timeAgo: '4 days ago',
  },
]

const categoryColors = {
  running: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  tech: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  life: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
  reading: 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300',
}

export default function RecentDiscoveries() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="my-8">
        <h2 className="mb-4 text-center text-xl font-semibold text-gray-900 dark:text-gray-100">
          Recent Discoveries
        </h2>
        <div className="space-y-3">
          {discoveries.slice(0, 3).map((discovery, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="flex items-start space-x-3">
                <span className="mt-0.5 flex-shrink-0 text-lg">{discovery.icon}</span>
                <div className="flex-1">
                  <p className="text-sm text-gray-700 dark:text-gray-300">{discovery.text}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium ${categoryColors[discovery.category]}`}
                    >
                      {discovery.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {discovery.timeAgo}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="my-8">
      <div className="mb-6 text-center">
        <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
          Recent Discoveries
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Things I've learned, found, or figured out lately
        </p>
      </div>

      <div className="space-y-3">
        {discoveries.map((discovery, index) => (
          <div
            key={index}
            className="dark:hover:bg-gray-750 group rounded-lg border border-gray-200 bg-gray-50 p-4 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="flex items-start space-x-3">
              <span className="mt-0.5 flex-shrink-0 text-lg transition-transform duration-200 group-hover:scale-110">
                {discovery.icon}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {discovery.text}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${categoryColors[discovery.category]}`}
                  >
                    {discovery.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {discovery.timeAgo}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-400 dark:text-gray-500">
          Always learning something new • Updated whenever I discover cool stuff
        </p>
      </div>
    </div>
  )
}
