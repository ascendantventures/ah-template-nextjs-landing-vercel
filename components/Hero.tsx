'use client'
export function Hero() {
  return (
    <section className="text-center py-24 px-6 max-w-4xl mx-auto">
      <p className="text-sm font-semibold text-[__PRIMARY_COLOR__] uppercase tracking-widest mb-4">__CATEGORY__</p>
      <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">__TAGLINE__</h1>
      <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">__SUBTITLE__</p>
      <a href="#waitlist" className="inline-block bg-[__PRIMARY_COLOR__] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition shadow-lg">
        __CTA_TEXT__
      </a>
    </section>
  )
}
