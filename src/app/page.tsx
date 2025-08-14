import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '../components/ui/carousel'

const slideGradients = [
  // Slide 1 (overlay only, image will be background)
  "bg-gradient-to-r from-blue-900/70 via-blue-700/60 to-blue-400/40",
  // Slide 2
  "bg-gradient-to-r from-green-500/70 via-green-400/60 to-green-300/40",
  // Slide 3
  "bg-gradient-to-r from-purple-500/70 via-pink-400/60 to-pink-300/40",
  // Slide 4
  "bg-gradient-to-r from-yellow-500/70 via-orange-400/60 to-orange-300/40"
]

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] w-full  ">
      <Carousel opts={{ loop: true }} className="w-full max-w-6xl">
        <CarouselContent>
          {/* Slide 1: Mission Statement */}
          <CarouselItem>
            <div className="relative flex flex-col md:flex-row items-center gap-6 p-0 rounded-xl shadow-lg h-[340px] md:h-[300px] overflow-hidden">
              <Image 
                src="/assets/Tacloban_City_Hall.jpg" 
                alt="Tacloban City Hall" 
                fill
                style={{objectFit: 'cover'}}
                className="absolute inset-0 w-full h-full z-0"
                priority
              />
              <div className={`relative z-10 w-full h-full flex flex-col md:flex-row items-center gap-6 p-8 ${slideGradients[0]}`}> 
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2 text-white drop-shadow">Transparency for a Better Future</h2>
                  <p className="mb-4 text-white drop-shadow">Promoting openness, accountability, and citizen participation.</p>
                  <Link href="/about" className="inline-block px-4 py-2 bg-white/80 text-blue-700 font-semibold rounded hover:bg-white transition">Learn More</Link>
                </div>
              </div>
            </div>
          </CarouselItem>
            <CarouselItem>
            <div className="relative flex flex-col md:flex-row items-center gap-6 p-0 rounded-xl shadow-lg h-[340px] md:h-[300px] overflow-hidden">
              <Image 
                src="/assets/DataCharts.jpg" 
                alt="Tacloban City Hall" 
                fill
                style={{objectFit: 'cover'}}
                className="absolute inset-0 w-full h-full z-0"
                priority
              />
              <div className={`relative z-10 w-full h-full flex flex-col md:flex-row items-center gap-6 p-8 ${slideGradients[1]}`}> 
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2 text-white drop-shadow">Access Public Data Anytime</h2>
                  <p className="mb-4 text-white drop-shadow">Explore budgets, policies, and statistics in our transparency portal.</p>
                  <Link href="/about" className="inline-block px-4 py-2 bg-white/80 text-blue-700 font-semibold rounded hover:bg-white transition">Learn More</Link>
                </div>
              </div>
            </div>
          </CarouselItem>
             <CarouselItem>
            <div className="relative flex flex-col md:flex-row items-center gap-6 p-0 rounded-xl shadow-lg h-[340px] md:h-[300px] overflow-hidden">
              <Image 
                src="/assets/Engagement.jpeg" 
                alt="engagement" 
                fill
                style={{objectFit: 'cover'}}
                className="absolute inset-0 w-full h-full z-0"
                priority
              />
              <div className={`relative z-10 w-full h-full flex flex-col md:flex-row items-center gap-6 p-8 ${slideGradients[2]}`}> 
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2 text-white drop-shadow">Your Voice Matters</h2>
                  <p className="mb-4 text-white drop-shadow">Submit feedback, report issues, and shape your community.</p>
                  <Link href="/about" className="inline-block px-4 py-2 bg-white/80 text-blue-700 font-semibold rounded hover:bg-white transition">Learn More</Link>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative flex flex-col md:flex-row items-center gap-6 p-0 rounded-xl shadow-lg h-[340px] md:h-[300px] overflow-hidden">
              <Image 
                src="/assets/News.jpg" 
                alt="Latest News" 
                fill
                style={{objectFit: 'cover'}}
                className="absolute inset-0 w-full h-full z-0"
                priority
              />
              <div className={`relative z-10 w-full h-full flex flex-col md:flex-row items-center gap-6 p-8 ${slideGradients[3]}`}> 
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2 text-white drop-shadow">Stay Informed</h2>
                  <p className="mb-4 text-white drop-shadow">Read the latest news, announcements, and policy updates.</p>
                  <Link href="/news" className="inline-block px-4 py-2 bg-white/80 text-orange-700 font-semibold rounded hover:bg-white transition">Read News</Link>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  )
}