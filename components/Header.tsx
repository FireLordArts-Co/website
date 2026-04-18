'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, Mail, ShoppingBag } from 'lucide-react'

import BrandIcon from './BrandIcon'

export default function Header() {
  // const [scrolled, setScrolled] = useState(false)
  const scrolled = false
  const [menuOpen, setMenuOpen] = useState(false)

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
        fixed top-0 left-0 w-full z-50 bg-linear-to-b from-black/20 via-black/10 to-orange-900/10
        transition-[height,background-color,backdrop-filter] duration-100 ease-in-out
        bg-bg-elevated  backdrop-blur-md'
        ${scrolled ? 'h-16 md:h-14' : 'h-16 md:h-20'}
      `}
    >
      <div className="w-full h-full flex items-center justify-between mx-auto px-5 md:px-12">
        
        {/* Menu Button */}
        <div className="flex items-center shrink-0">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="group cursor-pointer p-2 rounded-md hover:bg-white/0"
          >
            <Menu className="w-7.5 h-7.5 group-hover:text-orange-400 transition-colors" />
          </button>
        </div>

        {/* Drawer */}
        <div
          className={`
            fixed top-0 left-0 h-full w-72 bg-wood z-40
            transform transition-transform duration-100 ease-in-out
            shadow-[8px_0_20px_rgba(0,0,0,0.25)]
            ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          <div className="flex flex-col h-full">
            {/* X */}
            <div className="px-5 py-3 flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                className={`
                  group cursor-pointer p-2 rounded-md hover:bg-white/0 transition
                `}
              >
                <X className="w-7.5 h-7.5 md:w-6.5 md:h-6.5 group-hover:text-orange-400 transition" />
              </button>
            </div>

            {/* Divider */}
            <div className="border-b border-white/10 w-7/8 mx-auto" />
            
            {/* Nav */}
            <div className="px-8 text-xl">
              <nav className="flex flex-col gap-2 opacity-80 mt-6">
                <Link
                  href="/"
                  onClick={(e) => {
                    setMenuOpen(false)

                    if (window.location.pathname === '/') {
                      e.preventDefault()
                      window.scrollTo({ top: 0, behavior: 'instant' })
                    }
                  }}
                  className="hover:text-orange-400 transition"
                >
                  Home
                </Link>
                <Link
                  href="/gallery"
                  onClick={(e) => {
                    setMenuOpen(false)

                    if (window.location.pathname === '/gallery') {
                      e.preventDefault()
                      window.scrollTo({ top: 0, behavior: 'instant' })
                    }
                  }}
                  className="hover:text-orange-400 transition"
                >
                  Gallery
                </Link>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-orange-400 transition"
                >
                  Contact
                </a>
                <span className="opacity-50 cursor-default">Store (Coming Soon)</span>
                {/* <Link href="/contact" className="hover:text-orange-400 transition">Contact</Link> */}
              </nav>
            </div>
          </div>
        </div>
        
        {/* Menu Backdrop */}
        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className={`
              fixed inset-0 z-30
            `}
          />
        )}

        {/* Center Logo */}
        <div className="flex-1 flex justify-center">
          <Link
            href="/"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'instant' })
              }
            }}
            className="flex flex-col items-center leading-none text-center"
          >
            <h1
              className={`
                font-bold tracking-wider leading-none transition-all duration-300
                ${scrolled ? 'text-2xl md:text-3xl' : 'text-2xl md:text-4xl'}
              `}
            >
              FireLord Arts
            </h1>
            
            <div
              className={`
                transition-all duration-300 ease-in-out
                ${scrolled
                  ? 'opacity-0 -translate-y-2 max-h-0 scale-75 pointer-events-none'
                  : 'opacity-100 translate-y-0 max-h-10 scale-100 pointer-events-auto'}
              `}
            >
              <h2 className="text-2xs md:text-sm tracking-widest text-text-muted mt-0.5">
                {"Handcrafted Decor".toLocaleUpperCase()}
              </h2>
            </div>
          </Link>
        </div>

        {/* Right-Hand Icons */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://www.instagram.com/firelord_arts/"
            target="_blank"
            className="hidden sm:block hover:text-orange-400 transition group"
          >
            <BrandIcon
              name="instagram"
              className="w-5 h-5"
            />
          </a>

          <a
            href="https://www.tiktok.com/@firelordthomas"
            target="_blank"
            className="hidden sm:block hover:text-orange-400 transition group"
          >
            <BrandIcon
              name="tiktok"
              className="w-5 h-5"
            />
          </a>

          {/* <Link href="/contact" className="hidden sm:block group">
            <Mail className="w-5.5 h-5.5 group-hover:text-orange-400 transition" />
          </Link> */}
          
          <a href="#contact" className="hidden sm:block group">
            <Mail className="w-5.5 h-5.5 group-hover:text-orange-400 transition" />
          </a>

          <div className="relative flex flex-col items-center group">
            <ShoppingBag className="w-5.5 h-5.5 opacity-30" />
            
            {/* Mobile Label */}
            <span className="text-[10px] text-text-muted mt-1 sm:hidden">
              Coming Soon
            </span>

            {/* Desktop tooltip */}
            <span className="hidden sm:block absolute top-full mt-2 left-1/2 -translate-x-1/2 text-xs text-text-muted opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
              Coming Soon
            </span>
          </div>
        </div>

      </div>
    </header>
  )
}