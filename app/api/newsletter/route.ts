// app/api/newsletter/route.ts

export const dynamic = 'force-static'

// Temporarily disable newsletter API
export async function GET() {
  return new Response('Newsletter API disabled', { status: 200 })
}

export async function POST() {
  return new Response('Newsletter API disabled', { status: 200 })
}
