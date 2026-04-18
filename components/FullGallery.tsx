import GalleryGrid from '@/components/GalleryGrid'

export default function GalleryPage() {
  const basePath = '/images/gallery/'

  const items = [
    { id: 13, src: 'charred_mini_tiki.jpg', title: 'Piece 13' },
    { id: 1, src: 'featured/hanging_lamp.jpg', title: 'Piece 1' },
    { id: 9, src: 'featured/squidward1.jpg', title: 'Squidward\'s Tiki' },
    { id: 11, src: 'featured/desk_lamp.jpg', title: 'Piece 11' },
    { id: 19, src: 'IMG_5611.jpg', title: 'Piece 19' },
    { id: 5, src: 'featured/long_head.jpg', title: 'Long Tiki Face' },
    { id: 2, src: 'featured/hanging_lamp_red.jpg', title: 'Piece 2' },
    { id: 3, src: 'featured/hanging_lamp_green.jpg', title: 'Piece 3' },
    { id: 12, src: 'hanging_lamp_blue.jpg', title: 'Piece 12' },
    { id: 8, src: 'featured/spiked_framed1.jpg', title: 'Piece 8' },
    { id: 6, src: 'featured/nose.jpg', title: 'Piece 6' },
    { id: 7, src: 'featured/plank.jpg', title: 'Half Tiki Plank' },
    { id: 10, src: 'featured/two_face1.jpg', title: 'Piece 10' },
    { id: 4, src: 'aloha.jpg', title: 'Aloha' },
    { id: 16, src: 'IMG_4807.jpg', title: 'Tiki Torch' },
    { id: 14, src: 'IMG_4649.jpg', title: 'Piece 14' },
    { id: 17, src: 'IMG_4942.jpg', title: 'Piece 17' },
    { id: 18, src: 'IMG_5227.jpg', title: 'Long Tiki Gray' },
    { id: 23, src: 'IMG_6418.jpg', title: 'Postcards' },
    { id: 15, src: 'IMG_4653.jpg', title: 'Piece 15' },
    { id: 24, src: 'IMG_6423.jpg', title: 'Piece 24' },
    { id: 22, src: 'IMG_6391.jpg', title: 'Piece 22' },
    { id: 20, src: 'IMG_6326.jpg', title: 'Piece 20' },
  ]

  const tallSet = new Set([
    "Squidward's Tiki",
    'Long Tiki Face',
    'Long Tiki Gray',
  ])

  const wideSet = new Set([
    "Aloha",
  ])

  return (
    <main className="max-w-6xl mx-auto px-4 pt-10 md:pt-8">
      
      <h1 className="text-2xl md:text-5xl font-bold text-center mb-2">
        Gallery
      </h1>

      <p className="text-center text-text-muted text-md md:text-lg mb-8">
        A collection of handcrafted pieces
      </p>

      <GalleryGrid
        items={items}
        basePath={basePath}
        tallSet={tallSet}
        wideSet={wideSet}
      />

    </main>
  )
}