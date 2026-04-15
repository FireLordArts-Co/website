'use client'

import { useState } from 'react'

export default function Hero() {
  // const [glow, setGlow] = useState(false)

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden text-center"
      // onMouseEnter={() => setGlow(true)}
      // onMouseLeave={() => setGlow(false)}
    >

    {/* Background texture layer (optional image) */}
    {/* <div className="absolute inset-0 bg-[url('/tiki-texture.jpg')] bg-cover bg-center opacity-20" /> */}

    {/* Dark atmospheric overlay */}
    {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" /> */}

    {/* Ambient glow */}
    {/* <div
      className={`absolute inset-0 blur-3xl transition-all duration-base ${
        glow ? 'opacity-20 bg-accent-glow' : 'opacity-10 bg-accent'
      }`}
    /> */}

    <div
      className={`absolute inset-0 blur-3xl ${
        'opacity-20 bg-accent-glow'
      }`}
    />

    {/* Content */}
    <div className="relative z-10 max-w-prose px-md">
      <h1 className="text-hero leading-hero font-bold tracking-wide">
        FireLord Arts
      </h1>

      <p className="mt-md text-body text-text-muted">
        {/* Polynesian-inspired tiki carvings & island artifacts */}
      </p>

      {/* Actions */}
      {/* <div className="mt-xl flex justify-center gap-md">
        <button className="rounded-full bg-accent px-lg py-md font-semibold text-black transition-all duration-base hover:bg-accent-pressed hover:shadow-glow">
          View Gallery
        </button>

        <button className="rounded-full border border-wood px-lg py-md text-text-muted transition-all duration-base hover:bg-bg-elevated hover:text-text-primary">
          Commission Work
        </button>
      </div> */}
    </div>
    </section>
  )
}