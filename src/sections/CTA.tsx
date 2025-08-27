import React from 'react'

export function CTA(){
  return (
    <section id="cta" className="section text-center py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <div className="text-center">
          <h2 className="h1 font-normal font-helvetica text-center mb-6">Get early access</h2>
          <p className="sub max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed mb-8">
            Request a demo and access our platform.
          </p>
          <a
            href="https://forms.gle/Y4ZfdEQEVQxTantWA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient-dark rounded-full join-waitlist text-white/90"
            onMouseEnter={(e)=>{
              const t = e.currentTarget as HTMLElement;
              const r = t.getBoundingClientRect();
              t.style.setProperty('--mx', (r.width/2)+'px');
              t.style.setProperty('--my', (r.height/2)+'px');
            }}
            onMouseMove={(e)=>{
              const t = e.currentTarget as HTMLElement;
              const r = t.getBoundingClientRect();
              t.style.setProperty('--mx', (e.clientX - r.left)+'px');
              t.style.setProperty('--my', (e.clientY - r.top)+'px');
            }}
            onMouseLeave={(e)=>{
              const t = e.currentTarget as HTMLElement;
              t.style.removeProperty('--mx');
              t.style.removeProperty('--my');
            }}
          >
            <span className="text-stroke-black">Join the waitlist</span>
          </a>
        </div>
      </div>
    </section>
  )
}


