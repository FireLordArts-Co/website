import Hero from '@/components/Hero'
import FeaturedGallery from '@/components/FeaturedGallery'
// import About from '@/components/About'
// import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <FeaturedGallery />
      {/* <About />
      <CTA /> */}
    </main>
  )
}