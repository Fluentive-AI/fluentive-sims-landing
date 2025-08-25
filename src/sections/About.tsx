import React from 'react'

export function About(){
  return (
    <section id="about" className="section bg-white/5">
      <div className="container grid md:grid-cols-[1.4fr_1fr] gap-7 items-start">
        <div>
          <h2 className="h2">About us</h2>
          <p className="mt-2 text-[hsl(var(--muted))]">We are a YC-backed team with backgrounds in economics, operations research, and AI. We are building the next generation of market research — dynamic, synthetic, and grounded in real data.</p>
        </div>
        <div className="glass rounded-xl p-5">
          <h3 className="font-semibold text-lg">Our belief</h3>
          <p className="mt-2 text-[hsl(var(--muted))]">Markets are social systems. To understand them, you need agents that think, remember, and influence each other.</p>
        </div>
      </div>
    </section>
  )
}


