export default function About() {
  return (
    <section id="about" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/3]">
            <img src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1400&auto=format&fit=crop" alt="Studio" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">A small team with big taste</h2>
            <p className="mt-6 text-white/70 leading-relaxed">
              We partner with founders and marketing teams to shape brands that feel inevitable. From naming to launch campaigns, our work blends strategy, design, and production into one seamless process.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              Based in a sunlit studio, powered by good coffee and better conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
