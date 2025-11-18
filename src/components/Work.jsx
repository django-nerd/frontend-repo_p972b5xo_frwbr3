import { motion } from 'framer-motion'

const work = [
  { title: 'Analog Studio', tag: 'Brand Identity', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Lumen Cameras', tag: 'Product Launch', img: 'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Neon Film', tag: 'Art Direction', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop' },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Selected Work</h2>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition">Work with us</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {work.map((item, i) => (
            <motion.a
              key={i}
              href="#contact"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.tag}</p>
                </div>
                <span className="text-white/80 text-sm">→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
