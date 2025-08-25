import React from 'react'

export function CTA(){
  return (
    <section id="cta" className="section text-center">
      <div className="container">
        <h2 className="h2">Get early access</h2>
        <p className="sub mt-2">Request a demo and see your market — simulated.</p>
        <form className="mt-4 grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto]">
          <input required placeholder="Your name" className="glass rounded-xl px-3 py-3" />
          <input type="email" required placeholder="Work email" className="glass rounded-xl px-3 py-3" />
          <input placeholder="Company" className="glass rounded-xl px-3 py-3" />
          <button className="btn-primary" type="submit">Request a demo</button>
        </form>
      </div>
    </section>
  )
}


