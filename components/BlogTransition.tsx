'use client'

import { useEffect, useState } from 'react'

export default function BlogTransition() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="my-10 text-center">
        <div className="mx-auto max-w-xl">
          <div className="mb-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600"></div>
          <h2 className="mb-2 text-xl font-medium text-gray-900 dark:text-gray-100">
            Recent Posts
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Thoughts and discoveries from code and miles
          </p>
          <div className="mt-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="my-10 text-center">
      <div className="mx-auto max-w-xl">
        <h2 className="mb-2 text-xl font-medium text-gray-900 dark:text-gray-100">Recent Posts</h2>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Dive into some of my recent thoughts and discoveries below
        </p>

        {/* Bottom subtle divider */}
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700"></div>
      </div>
    </div>
  )
}
