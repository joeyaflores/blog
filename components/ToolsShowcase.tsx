'use client'

import { useEffect, useState } from 'react'

interface Tool {
  name: string
  icon: string
  category: 'language' | 'framework' | 'infrastructure' | 'api'
  description: string
  color: string
}

const tools: Tool[] = [
  {
    name: 'Python',
    icon: '🐍',
    category: 'language',
    description: 'Data processing & backend magic',
    color:
      'bg-yellow-100 hover:bg-yellow-200 dark:bg-yellow-900 dark:hover:bg-yellow-800 border-yellow-300 dark:border-yellow-700',
  },
  {
    name: 'Go',
    icon: '🔷',
    category: 'language',
    description: 'Fast, reliable microservices',
    color:
      'bg-cyan-100 hover:bg-cyan-200 dark:bg-cyan-900 dark:hover:bg-cyan-800 border-cyan-300 dark:border-cyan-700',
  },
  {
    name: 'Next.js',
    icon: '⚛️',
    category: 'framework',
    description: 'React apps that just work',
    color:
      'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600',
  },
  {
    name: 'FastAPI',
    icon: '⚡',
    category: 'api',
    description: 'Lightning-fast Python APIs',
    color:
      'bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800 border-green-300 dark:border-green-700',
  },
  {
    name: 'Docker',
    icon: '🐳',
    category: 'infrastructure',
    description: 'Containerized everything',
    color:
      'bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 border-blue-300 dark:border-blue-700',
  },
  {
    name: 'Kubernetes',
    icon: '☸️',
    category: 'infrastructure',
    description: 'Orchestration at scale',
    color:
      'bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900 dark:hover:bg-indigo-800 border-indigo-300 dark:border-indigo-700',
  },
  {
    name: 'MCP',
    icon: '🔧',
    category: 'api',
    description: 'Model Context Protocol',
    color:
      'bg-purple-100 hover:bg-purple-200 dark:bg-purple-900 dark:hover:bg-purple-800 border-purple-300 dark:border-purple-700',
  },
  {
    name: 'Neovim',
    icon: '💻',
    category: 'language',
    description: 'The best editor for coding',
    color:
      'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600',
  },
]

export default function ToolsShowcase() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="my-8">
        <h2 className="mb-4 text-center text-xl font-semibold text-gray-900 dark:text-gray-100">
          Favorite Tools
        </h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {tools.slice(0, 6).map((tool, index) => (
            <div
              key={index}
              className={`rounded-lg border p-3 transition-all duration-200 ${tool.color}`}
            >
              <div className="text-center">
                <div className="mb-2 text-2xl">{tool.icon}</div>
                <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {tool.name}
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
          Favorite Tools
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Currently using these to build, but always exploring new tools and technologies
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className={`group transform cursor-pointer rounded-lg border p-4 transition-all duration-300 hover:scale-105 hover:shadow-md ${tool.color}`}
          >
            <div className="text-center">
              <div className="mb-2 text-2xl transition-transform duration-200 group-hover:scale-110">
                {tool.icon}
              </div>
              <div className="mb-1 text-sm font-medium text-gray-900 dark:text-gray-100">
                {tool.name}
              </div>
              <div className="text-xs text-gray-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-gray-400">
                {tool.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
