import React from 'react'

export function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="container py-6 flex items-center justify-between gap-3 text-[hsl(var(--muted))]">
        <div className="font-extrabold text-white">Hadmaya</div>
        <div className="flex items-center gap-4">
          <span>© {year} Hadmaya</span>
          <a href="mailto:hello@hadmaya.ai" className="hover:text-white">hello@hadmaya.ai</a>
        </div>
      </div>
    </footer>
  )
}


