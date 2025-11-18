const services = [
  {
    title: 'Brand Strategy',
    desc: 'Positioning, naming, and identity systems that define your edge.',
  },
  {
    title: 'Art Direction',
    desc: 'High-concept creative direction for campaigns and content.',
  },
  {
    title: 'Product Launch',
    desc: 'Launch design sprints, landing pages, and content to go-to-market fast.',
  },
  {
    title: 'Photo + Motion',
    desc: 'Studio and location production for cinematic, minimalist visuals.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-10">What we do</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white text-lg font-medium mb-2">{s.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
