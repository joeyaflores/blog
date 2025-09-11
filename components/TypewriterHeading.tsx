'use client'

import { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'

const words = ['friend!', 'reader!', 'runner!', 'thinker!', 'snooper!']

export default function TypewriterHeading() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
        welcome friend!
      </h1>
    )
  }

  return (
    <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
      welcome{' '}
      <span className="inline-block">
        <Typewriter
          options={{
            strings: words,
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 50,
          }}
        />
      </span>
    </h1>
  )
}
