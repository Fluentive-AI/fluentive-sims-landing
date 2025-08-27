import React from 'react'

export function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="container py-6 flex items-center justify-between gap-3 text-white">
        <div className="flex items-center gap-3">
          <img src="/public/logo-white.png" alt="Hadmaya" className="h-6 w-6" />
          <div className="font-extrabold text-white">Hadmaya</div>
        </div>
        <div className="flex items-center gap-4">
          <span>© {year} Hadmaya</span>
          <a href="mailto:contact@hadmaya.com" className="text-white hover:text-gray-300">contact@hadmaya.com</a>
        </div>
      </div>
    </footer>
  )
}


