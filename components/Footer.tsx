import BrandIcon from './BrandIcon'

export default function Footer() {
  return (
    <footer className="bg-bg-primary mt-24">
      
      <div className="max-w-6xl mx-auto px-4 py-16 grid gap-20 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4">FireLord Arts</h3>
          <p className="opacity-80">
            Handmade artwork inspired by fire, nature, and craft.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 opacity-80">
            <li><a href="/" className="hover:text-orange-400 transition">Home</a></li>
            {/* <li><a href="/shop" className="hover:text-orange-400 transition">Shop (Coming Soon)</a></li> */}
            <li><p className="inline hover:text-orange-400 cursor-pointer transition">Shop (Coming Soon)</p></li>
            <li><a href="/gallery" className="hover:text-orange-400 transition">Gallery</a></li>
            {/* <li><a href="/about" className="hover:text-orange-400 transition">About</a></li> */}
            {/* <li><a href="/contact" className="hover:text-orange-400 transition">Contact</a></li> */}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 opacity-80">
            <li>
              <a
                href="mailto:Firelord.arts.03@gmail.com"
                className="hover:text-orange-400 transition"
              >
                Firelord.arts.03@gmail.com
              </a>
            </li>
            <li>Location: California, USA</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-semibold mb-4">Follow</h4>
          <div className="flex gap-4 opacity-80">
            <a
              href="https://www.instagram.com/firelord_arts/"
              target="_blank"
              className="hover:text-orange-400 transition group"
            >
              <BrandIcon
                name="instagram"
                className="w-6 h-6"
              />
            </a>

            <a
              href="https://www.tiktok.com/@firelordthomas"
              target="_blank"
              className="hover:text-orange-400 transition group"
            >
              <BrandIcon
                name="tiktok"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 py-6 text-center opacity-50 text-sm">
        © {new Date().getFullYear()} FireLord Arts. All rights reserved.
      </div>

    </footer>
  )
}