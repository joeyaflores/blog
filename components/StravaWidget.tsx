'use client'

import { useEffect, useState } from 'react'

interface RunActivity {
  name: string
  distance: number // in miles
  pace: string // min:sec per mile
  date: string
  type: 'run' | 'long_run' | 'tempo' | 'easy'
}

// Mock data - in real implementation, this would come from Strava API
const recentRuns: RunActivity[] = [
  {
    name: 'Morning Tempo Run',
    distance: 6.2,
    pace: '6:45',
    date: '2 days ago',
    type: 'tempo',
  },
  {
    name: 'Easy Sunday Long Run',
    distance: 14.1,
    pace: '7:30',
    date: '4 days ago',
    type: 'long_run',
  },
  {
    name: 'Recovery Run',
    distance: 4.0,
    pace: '8:15',
    date: '6 days ago',
    type: 'easy',
  },
]

const runTypeColors = {
  run: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  tempo: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
  long_run: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  easy: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
}

export default function StravaWidget() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="my-8">
        <h2 className="mb-4 text-center text-xl font-semibold text-gray-900 dark:text-gray-100">
          Recent Runs
        </h2>
        <div className="space-y-3">
          {recentRuns.slice(0, 2).map((run, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">{run.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {run.distance} mi • {run.pace}/mi
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{run.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const thisWeekMiles = recentRuns.reduce((total, run) => total + run.distance, 0)

  return (
    <div className="my-8">
      <div className="mb-6 text-center">
        <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">Recent Runs</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Training for Houston Marathon • {thisWeekMiles.toFixed(1)} miles this week
        </p>
      </div>

      <div className="space-y-3">
        {recentRuns.map((run, index) => (
          <div
            key={index}
            className="dark:hover:bg-gray-750 group rounded-lg border border-gray-200 bg-gray-50 p-4 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="mb-1 flex items-center space-x-2">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">{run.name}</h3>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${runTypeColors[run.type]}`}
                  >
                    {run.type.replace('_', ' ')}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="flex items-center space-x-1">
                    <span>📏</span>
                    <span>{run.distance} mi</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span>⏱️</span>
                    <span>{run.pace}/mi</span>
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500 dark:text-gray-400">{run.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <a
          href="https://www.strava.com/athletes/your-id"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          Follow on Strava →
        </a>
      </div>
    </div>
  )
}
