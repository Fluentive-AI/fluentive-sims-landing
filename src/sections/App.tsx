import React from 'react'
import { Hero } from './Hero'
import { What } from './What'
import { Solutions } from './Solutions'
import { About } from './About'
import { CTA } from './CTA'
import { Footer } from './Footer'

export function App(){
  return (
    <div className="gradient-bg min-h-screen relative">
      <header className="sticky top-0 z-30">
        <div className="container py-5 flex justify-center">
          <div className="glass rounded-full px-6 py-4 md:px-8 md:py-4 border border-black/10 shadow-[0_8px_30px_rgba(2,6,23,0.06)] backdrop-blur-xl grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-8 w-full max-w-4xl">
            <a href="#" className="flex items-center gap-3 font-extrabold tracking-tight whitespace-nowrap text-lg md:text-lg -ml-2 md:-ml-3 cursor-pointer select-none">
              <img src="/logo.png" alt="Hadmaya logo" className="w-10 h-10 md:w-11 md:h-11 rounded" />
              <span>Hadmaya</span>
            </a>
            <nav className="hidden md:flex items-center justify-center gap-6 text-[hsl(var(--muted))] text-center">
              <a href="#what" className="hover:text-black">What we do</a>
              <a href="#solutions" className="hover:text-black">Solutions</a>
              <a href="#about" className="hover:text-black">About</a>
            </nav>
            <a
              href="https://forms.gle/Y4ZfdEQEVQxTantWA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white rounded-full px-5 py-3 md:px-9 md:py-3 text-sm md:text-base shrink-0 justify-self-end"
            >
              Sign up
            </a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <What />
        <Solutions />
        <About />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}


