'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full pt-[25vh] h-[50vh] md:pt-0 md:h-svh flex items-center justify-center">
      
      {/* Background Image */}
      <img
        src="/images/aloha.jpg"
        alt="Hero"
        className="absolute pt-[8vh] md:pt-[-0%] inset-0 w-full h-full object-cover object-[50%_%] md:object-[50%_47%]"
      />

      {/* Dark + Fire Gradient Overlay */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-orange-900/32" />

      {/* Content */}
      {/* <div className="relative text-center px-4 max-w-5xl">

        <div className="">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-wide leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
            Designed, Carved, Textured by Hand.
          </h1>

          <p className="text-lg md:text-xl text-text-muted tracking-widest mb-24 md:mb-18 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
            {'NEW & UNIQUE PIECES '}
            <br className="md:hidden" />
            {'ALWAYS IN THE MAKING'}
          </p>
        </div>

        { <div className="md:h-65" /> }

        <div className="flex justify-center gap-4">
          <Link
            href="/gallery"
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-full font-semibold transition"
          >
            View Gallery
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 border border-white/30 hover:border-white rounded-full transition"
          >
            Contact
          </Link>
        </div>

      </div> */}


      <div className="relative w-full h-full flex items-center justify-center">

        {/* Text */}
        <div className="absolute top-[-60%] md:top-[18%] text-center px-4 max-w-5xl">
          <h1 className="text-2xl md:text-5xl font-bold mb-3 tracking-wide leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
            {'Designed, Carved, '}
            <br className="md:hidden" />
            {'Textured by Hand'}
          </h1>

          <p className="text-2xs md:text-xl text-text-muted tracking-widest drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
            {'New & unique pieces '.toLocaleUpperCase()}
            {/* <br className="md:hidden" /> */}
            {'always in the making'.toLocaleUpperCase()}
          </p>
        </div>

        {/* Buttons */}
        <div className="absolute bottom-[20%] flex justify-center gap-3 sm:gap-4">
          <Link
            href="/gallery"
            className="
              px-4 py-2 sm:px-6 sm:py-3
              text-sm sm:text-base
              bg-orange-500 hover:bg-orange-600 active:bg-orange-700
              rounded-full font-semibold transition
            "
          >
            View Gallery
          </Link>

          <a
            href="#contact"
            className="
              px-4 py-2 sm:px-6 sm:py-3
              text-sm sm:text-base
              border border-white/30 hover:border-white active:bg-white/10
              rounded-full transition
            "
          >
            Contact
          </a>

          {/* <Link
            href="/contact"
            className="
              px-4 py-2 sm:px-6 sm:py-3
              text-sm sm:text-base
              border border-white/30 hover:border-white active:bg-white/10
              rounded-full transition
            "
          >
            Contact
          </Link> */}
        </div>

      </div>
    </section>
  )
}