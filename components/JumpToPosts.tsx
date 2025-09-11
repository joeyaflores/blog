'use client'

export default function JumpToPosts() {
  const scrollToPosts = () => {
    const blogSection = document.getElementById('blog-posts')
    if (blogSection) {
      blogSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <div className="my-6 text-center">
      <button
        onClick={scrollToPosts}
        className="group mx-auto flex items-center justify-center space-x-1 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        aria-label="Jump to blog posts"
      >
        <span>Jump to posts</span>
        <span className="transform transition-transform duration-200 group-hover:translate-y-0.5">
          ↓
        </span>
      </button>
    </div>
  )
}
