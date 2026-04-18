import Link from 'next/link'

import GalleryGrid from '@/components/GalleryGrid'

export default function GalleryPage() {
  const basePath = '/images/gallery/featured/'

  const items = [
    { id: 26, src: 'pinball_frame.jpg', title: 'Pinball Hideaway Frame' },
    { id: 1, src: 'hanging_lamp.jpg', title: 'Piece 1' },
    { id: 9, src: 'squidward1.jpg', title: 'Squidward\'s Tiki' },
    { id: 11, src: 'desk_lamp.jpg', title: 'Piece 11' },
    { id: 6, src: 'nose.jpg', title: 'Piece 6' },
    { id: 7, src: 'plank.jpg', title: 'Piece 7' },
    { id: 5, src: 'long_head.jpg', title: 'Long Tiki Face' },
    { id: 2, src: 'hanging_lamp_red.jpg', title: 'Piece 2' },
    { id: 3, src: 'hanging_lamp_green.jpg', title: 'Piece 3' },
    { id: 10, src: 'two_face1.jpg', title: 'Piece 10' },
    { id: 8, src: 'spiked_framed1.jpg', title: 'Piece 8' },
  ]

  const tallSet = new Set([
    'Pinball Hideaway Frame',
    'Squidward\'s Tiki',
    'Long Tiki Face',
  ])

  const wideSet = new Set([
    'Pinball Hideaway Frame',
  ])

  return (
    <div className="max-w-6xl mx-auto px-4 pt-8 md:pt-20">
      
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 md:mb-16">
        Featured
      </h2>

      <GalleryGrid
        items={items}
        basePath={basePath}
        tallSet={tallSet}
        wideSet={wideSet}
      />

      <div className="w-full flex justify-center mt-10">
        <Link
          href="/gallery"
          className="
            px-6 py-3 
            bg-orange-500 hover:bg-orange-600 active:bg-orange-700
            rounded-xl font-semibold
            transition-all duration-200
            shadow-lg hover:shadow-xl
          "
        >
          View Full Gallery
        </Link>
      </div>

    </div>
  )
}