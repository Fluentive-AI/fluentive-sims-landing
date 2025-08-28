import React from 'react'

export function About(){
  return (
    <section id="about" className="section scroll-mt-16 md:scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center">
            <h2 className="h1 font-normal font-helvetica text-center mb-6">Reimagining Market Research</h2>
          </div>
          <p className="sub max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed">
            Built by economists, AI experts, and software engineers who believe the future of consumer insights lies in collaborative intelligence, not static surveys.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Left: Core Belief */}
          <div className="relative glass-card rounded-xl p-8 md:p-10 min-h-[20rem]">
            <div className="glass-filter" />
            <div className="glass-distortion-overlay" />
            <div className="glass-overlay" />
            <div className="glass-specular" />
            <div className="glass-content flex flex-col justify-center h-full">
              <h3 className="font-helvetica text-2xl font-normal text-center mb-6">Why we exist</h3>
              <p className="text-lg leading-relaxed text-center text-[hsl(var(--muted-foreground))]">
                User demands are evolving faster than ever, and traditional market research cannot keep up. Weeks of waiting, expensive panels, and insights that are outdated by the time you get them.
              </p>
            </div>
          </div>

          {/* Right: Mission */}
          <div className="relative glass-card rounded-xl p-8 md:p-10 min-h-[20rem]">
            <div className="glass-filter" />
            <div className="glass-distortion-overlay" />
            <div className="glass-overlay" />
            <div className="glass-specular" />
            <div className="glass-content flex flex-col justify-center h-full">
              <h3 className="font-helvetica text-2xl font-normal text-center mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed text-center text-[hsl(var(--muted-foreground))]">
                We're building AI-powered synthetic consumers that learn from your real customer data, think like humans, and give you insights in minutes, not weeks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


