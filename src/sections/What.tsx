import React from 'react'

export function What(){
  return (
    <section id="what" className="section">
      <div className="container grid md:grid-cols-[1.4fr_1fr] gap-7 items-start">
        <div>
          <h2 className="h2">What we do</h2>
          <p className="mt-2 text-[hsl(var(--muted))]">Replace slow, expensive surveys and biased panels with AI-driven social simulations. Our generative agents form synthetic populations seeded with your real data — reviews, CRM histories, social signals, and purchases — to produce dynamic, lifelike consumer journeys.</p>
          <ul className="mt-4 space-y-2">
            <li className="pl-6 relative before:content-['✔'] before:absolute before:left-0 before:text-[hsl(var(--accent))]">Faster insights: from weeks to hours</li>
            <li className="pl-6 relative before:content-['✔'] before:absolute before:left-0 before:text-[hsl(var(--accent))]">Cheaper research: no panel recruiting</li>
            <li className="pl-6 relative before:content-['✔'] before:absolute before:left-0 before:text-[hsl(var(--accent))]">Smarter simulations: memory, reflection, planning</li>
          </ul>
        </div>
        <div className="glass rounded-xl p-5">
          <h3 className="font-semibold text-lg">Why it matters</h3>
          <p className="mt-2 text-[hsl(var(--muted))]">Agents interact, influence, and make purchase decisions over time — revealing emergent behaviors that static methods miss.</p>
          <div className="mt-4 h-32 rounded-lg bg-gradient-to-b from-white/10 to-white/5 border border-white/10" />
        </div>
      </div>
    </section>
  )
}


