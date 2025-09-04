import React, { useEffect, useState } from 'react'

export function What(){
  const items = [
    {
      title: 'Diversity',
      desc: 'We engineer broader distributions across traits and cohorts to match real population variation, overcoming LLMs\' tendency toward homogeneous outputs.'
    },
    {
      title: 'Unbiasedness',
      desc: 'We actively distinguish bias from diversity, tracking accuracy impact while preventing under-representation and within-group stereotyping through careful base rate encoding.'
    },
    {
      title: 'No Sycophancy',
      desc: 'We detect and actively limit agreeableness drift in instruction-tuned models, preserving realistic disagreement and authentic trade-offs in responses.'
    },
    {
      title: 'Human-Like Generation',
      desc: 'We verify that our models replicate authentic human cognitive processes, not just statistical patterns, to ensure that simulated responses reflect genuine human reasoning.'
    },
    {
      title: 'Generalization',
      desc: 'We rigorously test across out-of-distribution measures and diverse cohorts, ensuring accuracy extends beyond well-studied populations with transparent reporting of limitations.'
    },
  ]
  return (
    <section id="what" className="section scroll-mt-16 md:scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="h1 font-normal font-helvetica text-center mb-6">What we do</h2>
          <p className="sub max-w-4xl mx-auto mt-4 text-xl md:text-2xl leading-relaxed mb-8">Replace slow surveys and static panels with AI-driven social simulations</p>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-[hsl(var(--muted))]">Our generative agents form synthetic populations seeded with your real data (reviews, CRM histories, and social media presence) and trained on past surveys to produce dynamic, lifelike consumer personas.</p>
        </div>
        
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-4xl mx-auto">
            <div className="relative glass-card glass-pill w-full max-w-xs">
              <div className="glass-filter" />
              <div className="glass-distortion-overlay" />
              <div className="glass-overlay" />
              <div className="glass-specular" />
              <div className="glass-content p-4 flex flex-col items-center text-center">
                <div className="font-helvetica text-xl font-semibold">Faster</div>
                <p className="mt-1 text-[hsl(var(--muted))]">Insights in minutes, not weeks</p>
              </div>
            </div>
            <div className="relative glass-card glass-pill w-full max-w-xs">
              <div className="glass-filter" />
              <div className="glass-distortion-overlay" />
              <div className="glass-overlay" />
              <div className="glass-specular" />
              <div className="glass-content p-4 flex flex-col items-center text-center">
                <div className="font-helvetica text-xl font-semibold">Accurate</div>
                <p className="mt-1 text-[hsl(var(--muted))]">Trained on real customer data</p>
              </div>
            </div>
            <div className="relative glass-card glass-pill w-full max-w-xs">
              <div className="glass-filter" />
              <div className="glass-distortion-overlay" />
              <div className="glass-overlay" />
              <div className="glass-specular" />
              <div className="glass-content p-4 flex flex-col items-center text-center">
                <div className="font-helvetica text-xl font-semibold">Dynamic</div>
                <p className="mt-1 text-[hsl(var(--muted))]">Query, observe, and experiment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Methodological requirements as a carousel */}
        <div className="mt-4">
          <p className="sub max-w-4xl mx-auto mt-4 text-xl md:text-2xl leading-relaxed mb-4 text-center">Social simulation that you can trust, backed by state-of-the-art research</p>
          <RequirementsCarousel items={items} />
        </div>
      </div>
    </section>
  )
}

function RequirementsCarousel({ items }: { items: { title: string; desc: string }[] }){
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx(i => (i + items.length - 1) % items.length)
  const next = () => setIdx(i => (i + 1) % items.length)

  const prevIdx = (idx + items.length - 1) % items.length
  const nextIdx = (idx + 1) % items.length

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') { prev(); }
      if (e.key === 'ArrowRight') { next(); }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [prev, next])

  return (
    <div className="mt-0">
      <div className="relative mx-auto max-w-6xl h-64 sm:h-80 lg:h-96 flex items-center justify-center overflow-hidden px-4">
        {/* Previews positioned behind left/right of center - hidden on mobile */}
        <div className="absolute left-1/2 top-1/2 -translate-x-[26rem] -translate-y-1/2 opacity-40 scale-90 pointer-events-none z-0 blur-[1px] hidden lg:block">
          <GlassReqCard title={items[prevIdx].title} desc={items[prevIdx].desc} subtle className="shadow-none" />
        </div>
        <div className="absolute left-1/2 top-1/2 translate-x-[6rem] -translate-y-1/2 opacity-40 scale-90 pointer-events-none z-0 blur-[1px] hidden lg:block">
          <GlassReqCard title={items[nextIdx].title} desc={items[nextIdx].desc} subtle className="shadow-none" />
        </div>

        {/* Controls + current card */}
        <button onClick={prev} className="glass-arrow px-3 py-4 md:px-6 md:py-5 mr-2 z-10 text-lg md:text-xl" aria-label="Previous">‹</button>
        <GlassReqCard title={items[idx].title} desc={items[idx].desc} className="z-10" strong />
        <button onClick={next} className="glass-arrow px-3 py-4 md:px-6 md:py-5 ml-2 z-10 text-lg md:text-xl" aria-label="Next">›</button>
      </div>

      <div className="mt-3 flex justify-center gap-2">
        {items.map((_, i) => (
          <span key={i} className={"w-2 h-2 rounded-full " + (i===idx ? 'bg-black/70' : 'bg-black/20')}></span>
        ))}
      </div>
    </div>
  )
}

function GlassReqCard({ title, desc, subtle, className, strong }: { title: string; desc: string; subtle?: boolean; className?: string; strong?: boolean }){
  return (
    <div 
      className={`relative glass-card rounded-xl w-full max-w-xs sm:max-w-sm lg:max-w-none ${className||''}`} 
      style={{ 
        width: 'min(20rem, calc(100vw - 8rem))', 
        height: 'min(16rem, calc(100vw - 8rem))', 
        maxWidth: '20rem',
        maxHeight: '16rem'
      }}
    >
      <div className="glass-filter" />
      <div className="glass-distortion-overlay" />
      <div className="glass-overlay" style={strong ? { background: 'rgba(255,255,255,0.7)' } : undefined} />
      <div className="glass-specular" />
      <div className="glass-content p-3 sm:p-4 lg:p-5 text-center flex flex-col justify-center h-full">
        <div className="font-helvetica font-light text-lg sm:text-xl lg:text-2xl">{title}</div>
        <p className="mt-1 sm:mt-2 text-sm sm:text-base text-[hsl(var(--muted))] leading-tight">{desc}</p>
      </div>
    </div>
  )
}


