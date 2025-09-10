interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'OurPR',
    description: `Find your perfect race and easily create your custom training plan.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.ourpr.app',
  },
  {
    title: 'Runlete',
    description: `Upload a running video for instant form analysis, then chat with runleteAI for personalized coaching, form tips, and training advice.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://www.runlete.io',
  },
]

export default projectsData
