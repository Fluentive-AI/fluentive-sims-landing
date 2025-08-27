import React from 'react'

export function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="container py-6 flex items-center justify-between gap-3 text-white">
        <div className="flex items-center gap-3">
          <img src="/logo-white.png" alt="Fluentive" className="h-6 w-6" />
          <div className="font-extrabold text-white">Fluentive</div>
        </div>
        <div className="flex items-center gap-4">
          <span>© {year} Fluentive</span>
          <a href="mailto:contact@fluentive.ai" className="text-white hover:text-gray-300">contact@fluentive.ai</a>
        </div>
      </div>
    </footer>
  )
}


