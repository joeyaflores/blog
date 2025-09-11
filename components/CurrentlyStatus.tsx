'use client'

import { useEffect, useState } from 'react'

interface StatusItem {
  text: string
  icon: string
  category: 'training' | 'coding' | 'reading' | 'building'
}

const statusItems: StatusItem[] = [
  {
    text: 'Being intentional about all things',
    icon: '',
    category: 'training',
  },
  {
    text: 'Training for the 2026 Houston Marathon',
    icon: '',
    category: 'training',
  },
  {
    text: 'Building railroad track inspection algorithms',
    icon: '',
    category: 'coding',
  },
  {
    text: 'Reading "The Invented Part" by Rodrigo Fresán',
    icon: '',
    category: 'reading',
  },
  {
    text: 'Being better than I was yesterday',
    icon: '',
    category: 'coding',
  },
  {
    text: 'Running at @ampersandrunningclub',
    icon: '',
    category: 'training',
  },
  {
    text: 'Exploring new tools and technologies',
    icon: '',
    category: 'coding',
  },
]

export default function CurrentlyStatus() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % statusItems.length)
    }, 2500) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [mounted])

  if (!mounted) {
    return (
      <div className="my-6 rounded-lg border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 dark:border-gray-600 dark:from-gray-800 dark:to-gray-700">
        <div className="flex items-center justify-center text-center">
          <span className="mr-2 text-sm text-gray-600 dark:text-gray-300">Currently:</span>
          <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
            {statusItems[currentIndex].icon} {statusItems[currentIndex].text}
          </span>
        </div>
      </div>
    )
  }

  const currentStatus = statusItems[currentIndex]

  return (
    <div className="my-6 rounded-lg border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 transition-all duration-300 hover:shadow-md dark:border-gray-600 dark:from-gray-800 dark:to-gray-700">
      <div className="flex items-center justify-center text-center">
        <span className="mr-2 flex-shrink-0 text-sm text-gray-600 dark:text-gray-300">
          Currently:
        </span>
        <div className="flex min-h-[24px] items-center overflow-hidden">
          <span
            key={currentIndex}
            className="animate-fade-in flex items-center text-sm font-medium text-gray-800 dark:text-gray-100"
          >
            {currentStatus.text}
          </span>
        </div>
      </div>

      {/* Progress dots */}
      <div className="mt-3 flex justify-center space-x-1">
        {statusItems.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-blue-500 dark:bg-blue-400'
                : 'bg-gray-300 dark:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

// Add this to your global CSS (css/tailwind.css) for the fade animation
/*
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}
*/
