import React from 'react'

export function UseCases(){
  const cases = [
    { title: 'Product launches', desc: 'Test positioning, features, and pricing before you ship.' },
    { title: 'Campaign testing', desc: 'Simulate reach, resonance, and peer-to-peer spread.' },
    { title: 'Consumer segmentation', desc: 'Identify emergent segments and their conversion triggers.' },
    { title: 'Policy analysis', desc: 'Understand responses to nudges, constraints, and incentives.' },
    { title: 'UX research', desc: 'Evaluate flows and content with agent-based journeys.' },
    { title: 'Finance & economics', desc: 'Model markets, adoption curves, and shocks.' },
  ]
  return (
    <section id="use-cases" className="section">
      <div className="container">
        <h2 className="h2">Use cases</h2>
        <div className="grid-cards mt-4">
          {cases.map(c => (
            <div key={c.title} className="glass rounded-xl p-5">
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="mt-1 text-[hsl(var(--muted))]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


