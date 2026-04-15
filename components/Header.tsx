'use client'

import { useEffect, useState } from 'react'

export default function Header() {
  // const [scrolled, setScrolled] = useState(false)
  const scrolled = false

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 20)
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        bg-jungle
        ${scrolled ? 'h-12 bg-black/80 backdrop-blur-md' : 'h-24'}
      `}
    >
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between px-4">
        
        {/* Left */}
        <div className="w-1/3">
          {/* future sidebar button */}
        </div>

        {/* Center */}
        <div className="w-1/3 text-center">
          <h1 className="text-4xl font-bold tracking-wider">
            FireLord Arts
          </h1>
          <h2 className="text-2xl font-bold tracking-wider text-text-muted">
            Handcrafted Decor
          </h2>
        </div>

        {/* Right */}
        <div className="w-1/3 flex justify-end">
          {/* future buttons */}
        </div>

      </div>
    </header>
  )
}