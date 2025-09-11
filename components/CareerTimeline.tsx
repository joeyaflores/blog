'use client'

import { useEffect, useState } from 'react'

interface TimelineItem {
  date: string
  title: string
  company: string
  description: string
  type: 'internship' | 'fulltime' | 'promotion' | 'milestone'
  highlight?: boolean
}

const timelineItems: TimelineItem[] = [
  {
    date: 'Summer 2022',
    title: 'Software Engineer Intern',
    company: 'Cvent',
    description:
      'First exposure to software development in the industry, working on the Cvent Event Management Platform',
    type: 'internship',
  },
  {
    date: 'January 2023',
    title: 'Software Engineer',
    company: 'Herzog',
    description:
      'Joined full-time during final semester, developing full-stack applications within the railroad industry',
    type: 'fulltime',
    highlight: true,
  },
  {
    date: 'May 2023',
    title: 'College Graduation',
    company: 'Texas Christian University',
    description: 'Completed degree while contributing as a software engineer at Herzog',
    type: 'milestone',
  },
  {
    date: 'September 2024',
    title: 'Lead Software Engineer',
    company: 'Herzog',
    description:
      'Promoted to lead a team building a railroad tie inspection platform, processing 40,000+ miles of track across the US',
    type: 'promotion',
    highlight: true,
  },
]

export default function CareerTimeline() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="my-8">
        <h2 className="mb-6 text-center text-xl font-semibold text-gray-900 dark:text-gray-100">
          Career Journey
        </h2>
        <div className="space-y-4">
          {timelineItems.slice(0, 3).map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-20 flex-shrink-0 pt-1 text-sm text-gray-500 dark:text-gray-400">
                {item.date}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 dark:text-gray-100">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.company}</p>
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
          Career Journey
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          From intern to leading railroad technology innovation
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600 dark:from-blue-800 dark:via-blue-600 dark:to-blue-400"></div>

        <div className="space-y-6">
          {timelineItems.map((item, index) => (
            <div key={index} className="group relative flex items-start space-x-4">
              {/* Timeline dot */}
              <div
                className={`relative z-10 mt-2 h-3 w-3 flex-shrink-0 rounded-full transition-all duration-300 ${
                  item.highlight
                    ? 'bg-blue-500 ring-4 ring-blue-200 group-hover:ring-6 dark:ring-blue-800'
                    : item.type === 'milestone'
                      ? 'bg-green-500 ring-2 ring-green-200 dark:ring-green-800'
                      : 'bg-gray-400 ring-2 ring-gray-200 dark:ring-gray-700'
                }`}
              ></div>

              {/* Content */}
              <div
                className={`flex-1 pb-6 ${item.highlight ? 'transform transition-transform duration-200 hover:scale-[1.02]' : ''}`}
              >
                <div
                  className={`rounded-lg border p-4 transition-all duration-200 ${
                    item.highlight
                      ? 'border-blue-200 bg-blue-50 hover:shadow-md dark:border-blue-800 dark:bg-blue-950'
                      : 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800'
                  }`}
                >
                  <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3
                      className={`font-semibold ${
                        item.highlight
                          ? 'text-blue-900 dark:text-blue-100'
                          : 'text-gray-900 dark:text-gray-100'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {item.date}
                      </span>
                      {item.highlight && (
                        <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                          Key Role
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.company}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
