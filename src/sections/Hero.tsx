import React, { useEffect, useRef } from 'react'

export function Hero(){
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    const ctx = canvas.getContext('2d')!
    let width = 0, height = 0
    let nodes: {x:number;y:number;vx:number;vy:number;r:number}[] = []

    function resize(){
      if (!canvas || !container) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const cssWidth = container.clientWidth
      const cssHeight = container.clientHeight || 420

      canvas.style.width = `${cssWidth}px`
      canvas.style.height = `${cssHeight}px`
      canvas.width = Math.floor(cssWidth * dpr)
      canvas.height = Math.floor(cssHeight * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      width = cssWidth
      height = cssHeight
      nodes = createNodes()
    }
    function createNodes(){
      const area = width * height
      const count = Math.max(12, Math.floor(area / 45000))
      const margin = Math.min(width, height) * 0.10
      const nodes = [] as {x:number;y:number;vx:number;vy:number;r:number}[]
      for (let i = 0; i < count; i++){
        const biasToEdge = Math.random() < 0.8
        let x = Math.random() * width
        let y = Math.random() * height
        if (biasToEdge){
          const edge = Math.floor(Math.random() * 4)
          if (edge === 0){ // top
            x = Math.random() * width
            y = Math.random() * margin
          } else if (edge === 1){ // bottom
            x = Math.random() * width
            y = height - Math.random() * margin
          } else if (edge === 2){ // left
            x = Math.random() * margin
            y = Math.random() * height
          } else { // right
            x = width - Math.random() * margin
            y = Math.random() * height
          }
        }
        nodes.push({
          x,
          y,
          vx: (Math.random()-0.5)*0.25,
          vy: (Math.random()-0.5)*0.25,
          r: 2 + Math.random()*1.5
        })
      }
      return nodes
    }
    function step(){
      ctx.clearRect(0,0,width,height)
      for (let i=0;i<nodes.length;i++){
        for (let j=i+1;j<nodes.length;j++){
          const a = nodes[i], b = nodes[j]
          const dx = a.x-b.x, dy = a.y-b.y
          const d2 = dx*dx+dy*dy
          if (d2 < 130*130){
            const alpha = 1 - d2/(130*130)
            ctx.strokeStyle = `rgba(124,92,255,${alpha*0.25})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      for (const n of nodes){
        ctx.fillStyle = 'rgba(0,0,0,0.9)'
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI*2); ctx.fill()
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }
      requestAnimationFrame(step)
    }
    resize(); step()
    const ro = new ResizeObserver(resize)
    ro.observe(container)
    return () => ro.disconnect()
  }, [])

  return (
    <section className="section relative overflow-hidden min-h-[60vh]">
      {/* Background agent network canvas (fills hero) */}
      <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      </div>
      {/* Hero-local gooey background */}
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ filter: 'url(#goo)' }} aria-hidden>
        <div className="absolute -top-24 -left-16 w-[34rem] h-[34rem] rounded-full bg-black/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-[36rem] h-[36rem] rounded-full bg-black/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[30rem] h-[14rem] rounded-full bg-black/10 blur-2xl" />
      </div>
      {/* SVG goo filter */}
      <svg width="0" height="0" className="absolute -z-10" aria-hidden>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -12" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className="container text-center relative">
        {/* subtle grid + vignette for consultant-tech feel */}
        <div className="absolute inset-0 -z-10 soft-grid opacity-20" aria-hidden />
        <div className="absolute inset-0 -z-10 vignette" aria-hidden />
        <div className="mx-auto max-w-4xl glass rounded-2xl p-6 md:p-8 border border-white/10 backdrop-blur-xl relative">
          {/* subtle inner edge highlight */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute inset-0 [mask:linear-gradient(180deg,black,transparent_70%)] opacity-60"
                 style={{ background: 'conic-gradient(from 120deg, hsla(258,90%,66%,.18), hsla(196,100%,52%,.18), transparent 60%)' }} />
          </div>

          <h1 className="h1 font-normal font-helvetica">A new playbook for <br /><span className="bg-gradient-to-r from-black to-neutral-400 bg-clip-text text-transparent">consumer insights</span></h1>
          <p className="sub max-w-3xl mx-auto mt-3 text-xl md:text-2xl leading-relaxed">
            Simulate true-to-life  consumers, test hypotheses in minutes, <br />and anticipate outcomes before taking bets in the real world.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#cta"
              className="btn-gradient-dark rounded-full join-waitlist text-white/90 w-52 px-8 py-3"
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
            <a
              href="https://calendly.com/eytan-rozenblum"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost rounded-full w-52 px-8 py-3"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Credibility strip */}
        <div className="mt-8 flex justify-center">
          <div className="glass-card glass-pill px-4 py-2 inline-flex items-center gap-3">
            <div className="glass-filter" />
            <div className="glass-distortion-overlay" />
            <div className="glass-overlay" />
            <div className="glass-specular" />
            <div className="glass-content inline-flex items-center gap-3">
              <span className="text-sm">Backed by</span>
              <img src="/yc-logo-full.png" alt="Y Combinator" className="h-4 md:h-5 object-contain" />
            </div>
            {/* SVG filter for distortion */}
            <svg width="0" height="0" className="absolute">
              <defs>
                <filter id="glass-distortion">
                  <feTurbulence type="fractalNoise" baseFrequency="0.01 0.02" numOctaves="2" seed="2" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="77" xChannelSelector="R" yChannelSelector="G" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}


