import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Let’s make something beautiful</h2>
            <p className="mt-6 text-white/70 leading-relaxed">
              Tell us about your project and we’ll get back within 24 hours.
            </p>
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-white/80 text-sm">Prefer email? hello@creativeagency.studio</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Name" className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
              <input required type="email" placeholder="Email" className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
            </div>
            <input placeholder="Company" className="mt-4 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <textarea required placeholder="Tell us a bit about the scope, timeline, and budget" rows={5} className="mt-4 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"></textarea>
            <button type="submit" className="mt-4 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 transition">Send inquiry</button>
            {sent && <p className="mt-3 text-white/70">Thanks! We’ll be in touch shortly.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
