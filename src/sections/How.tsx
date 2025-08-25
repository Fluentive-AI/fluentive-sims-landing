import React from 'react'

export function How(){
  const steps = [
    {
      num: 1,
      title: 'Seed agents with data',
      desc: 'Ingest reviews, CRM, social streams, purchase events. Create cohorts with traits and goals.'
    },
    {
      num: 2,
      title: 'Run simulations',
      desc: 'Agents consume content, interact, and decide. Memory and reflection guide evolving behaviors.'
    },
    {
      num: 3,
      title: 'Get insights',
      desc: 'See lift, segments, network effects, and consumer journeys. Export evidence to stakeholders.'
    }
  ]

  return (
    <section id="how" className="section bg-white/5">
      <div className="container">
        <h2 className="h2">How it works</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {steps.map(s => (
            <div key={s.num} className="glass rounded-xl p-5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] flex items-center justify-center font-bold mb-2">{s.num}</div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-1 text-[hsl(var(--muted))]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


