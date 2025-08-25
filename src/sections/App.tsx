import React from 'react'
import { Hero } from './Hero'
import { What } from './What'
import { How } from './How'
import { UseCases } from './UseCases'
import { About } from './About'
import { CTA } from './CTA'
import { Footer } from './Footer'

export function App(){
  return (
    <div className="gradient-bg min-h-screen">
      <header className="sticky top-0 z-20 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="container py-3 flex items-center justify-between gap-4">
          <div className="font-extrabold tracking-tight">Hadmaya</div>
          <nav className="hidden md:flex items-center gap-6 text-[hsl(var(--muted))]">
            <a href="#what" className="hover:text-white">What we do</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#use-cases" className="hover:text-white">Use cases</a>
            <a href="#about" className="hover:text-white">About</a>
          </nav>
          <a href="#cta" className="btn-primary">Request a demo</a>
        </div>
      </header>

      <main>
        <Hero />
        <What />
        <How />
        <UseCases />
        <About />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}


