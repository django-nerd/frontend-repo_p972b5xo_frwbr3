import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90 pointer-events-none" />
        <div className="relative h-full mx-auto max-w-7xl px-6 flex items-end pb-24">
          <div className="max-w-2xl">
            <p className="text-white/80 text-sm uppercase tracking-[0.3em] mb-4">Creative • Photography • Technology</p>
            <h1 className="text-4xl sm:text-6xl font-semibold text-white leading-tight">
              We craft minimalist visuals that move brands forward
            </h1>
            <p className="mt-6 text-white/80 text-lg">
              A boutique studio blending strategy, design, and cinematic imagery to help ambitious teams launch unforgettable experiences.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 transition">Start a Project</a>
              <a href="#work" className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">See Our Work</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
