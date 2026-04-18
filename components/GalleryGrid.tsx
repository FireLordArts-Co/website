'use client'

function hash(title: string) {
  let hash = 0
  for (let i = 0; i < title.length; i++) {
    hash = ((hash << 5) - hash) + title.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash) % 3
}

type Item = {
  id: number
  src: string
  title: string
}

export default function GalleryGrid({
  items,
  basePath,
  tallSet = new Set<string>(),
  wideSet = new Set<string>(),
}: {
  items: Item[]
  basePath: string
  tallSet?: Set<string>
  wideSet?: Set<string>
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((item) => {
        const offset = hash(item.title)
        const isTall = tallSet.has(item.title)
        const isWide = wideSet.has(item.title)

        return (
          <div
            key={item.id}
            className={`
              relative group shadow-2xl
              transition-transform duration-300
              ${offset ? 'md:translate-y-1' : ''}
              ${isTall ? 'row-span-2' : ''}
              ${isWide ? 'col-span-2' : ''}
            `}
            style={{
              transform: offset
                ? offset === 1 ? 'rotate(1deg)' : ''
                : 'rotate(-1deg)',
            }}
          >
            <div className="h-full overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition">

              <img
                src={basePath + item.src}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

            </div>
          </div>
        )
      })}
    </div>
  )
}