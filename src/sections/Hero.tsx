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
      width = canvas.width = container.clientWidth
      height = canvas.height = 360
      nodes = createNodes()
    }
    function createNodes(){
      const count = Math.max(28, Math.floor(width * height / 15000))
      return Array.from({length: count}, () => ({
        x: Math.random()*width,
        y: Math.random()*height,
        vx: (Math.random()-0.5)*0.35,
        vy: (Math.random()-0.5)*0.35,
        r: 2 + Math.random()*2
      }))
    }
    function step(){
      ctx.clearRect(0,0,width,height)
      for (let i=0;i<nodes.length;i++){
        for (let j=i+1;j<nodes.length;j++){
          const a = nodes[i], b = nodes[j]
          const dx = a.x-b.x, dy = a.y-b.y
          const d2 = dx*dx+dy*dy
          if (d2 < 150*150){
            const alpha = 1 - d2/(150*150)
            ctx.strokeStyle = `rgba(124,92,255,${alpha*0.35})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      for (const n of nodes){
        ctx.fillStyle = 'rgba(255,255,255,0.9)'
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
    <section className="section">
      <div className="container text-center">
        <h1 className="h1">Reinventing Market Research with AI</h1>
        <p className="sub max-w-3xl mx-auto mt-3">Simulate consumer behavior with generative agents to test, learn, and decide faster.</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <a href="#cta" className="btn-primary">Get early access</a>
          <a href="#how" className="btn-ghost">See how it works</a>
        </div>
        <div ref={containerRef} className="glass rounded-2xl mt-8 border border-white/10 overflow-hidden">
          <canvas ref={canvasRef} className="w-full h-[360px] block" />
        </div>
        <div className="mt-2 text-[13px] text-[hsl(var(--muted))] flex items-center justify-center gap-2">
          <span>YC-backed</span>
          <span>Economics • OR • AI</span>
        </div>
      </div>
    </section>
  )
}


