import type { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to our website',
}

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <div>Header</div>
      <main className="flex flex-col gap-8 row-[2] items-center w-full">
        <Hero />
        <div className="">Testimonials</div>
        <div className="">Services</div>
      </main>
      <div>Footer</div>
    </div>
  )
}
