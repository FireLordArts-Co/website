'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, Mail, ShoppingBag } from 'lucide-react'

import BrandIcon from './BrandIcon'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 bg-gradient-to-b bg-gradient-to-b from-black/20 via-black/10 to-orange-900/10
        transition-[height,background-color,backdrop-filter] duration-300 ease-in-out
        bg-bg-elevated
        ${scrolled ? 'h-14 backdrop-blur-md' : 'h-24'}
      `}
    >
      <div className="w-full h-full flex items-center justify-between px-12 relative">
        
        {/* Menu Button */}
        <div className="flex justify-start">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="group cursor-pointer p-2 rounded-md hover:bg-white/0 transition"
          >
            <Menu className="w-7.5 h-7.5 group-hover:text-orange-400 transition" />
          </button>
        </div>

        {/* Drawer */}
        <div
          className={`
            fixed top-0 left-0 h-full w-72 bg-wood z-40
            transform transition duration-300 ease-in-out
            shadow-[8px_0_20px_rgba(0,0,0,0.25)]
            ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-75'}
          `}
        >
          <div className="flex flex-col h-full">
            {/* X */}
            <div className="p-4 flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                className={`
                  group cursor-pointer p-2 rounded-md hover:bg-white/0 transition
                `}
              >
                <X className="w-6.5 h-6.5 group-hover:text-orange-400 transition" />
              </button>
            </div>

            {/* Divider */}
            <div className="border-b border-white/10 w-7/8 mx-auto mt-4" />
            
            {/* Nav */}
            <div className="p-10 text-xl">
              <nav className="flex flex-col gap-4 opacity-80 mt-6">
                <a href="/gallery" className="hover:text-orange-400 transition">Gallery</a>
                <span className="opacity-50 cursor-default">Store (Coming Soon)</span>
                <span className="opacity-50 cursor-default">Contact (Coming Soon)</span>
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
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-1 leading-none">
          <h1
            className={`
              font-bold tracking-wider leading-none transition-all duration-300
              ${scrolled ? 'text-3xl' : 'text-4xl'}
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
            <h2 className="text-xl font-bold tracking-widest text-text-muted">
              Handcrafted Decor
            </h2>
          </div>
        </Link>

        {/* Right-Hand Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/firelord_arts/"
            target="_blank"
            className="hover:text-orange-400 transition group"
          >
            <BrandIcon
              name="instagram"
              className="w-5 h-5"
            />
          </a>

          <a
            href="https://www.tiktok.com/@firelordthomas"
            target="_blank"
            className="hover:text-orange-400 transition group"
          >
            <BrandIcon
              name="tiktok"
              className="w-5 h-5"
            />
          </a>

          <a href="mailto:your@email.com" className="group">
            <Mail className="w-5.5 h-5.5 group-hover:text-orange-400 transition" />
          </a>

          <div className="relative group">
            <ShoppingBag className="w-5.5 h-5.5 opacity-30" />

            <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-xs text-text-muted opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
              Coming Soon
            </span>
          </div>
        </div>

      </div>
    </header>
  )
}