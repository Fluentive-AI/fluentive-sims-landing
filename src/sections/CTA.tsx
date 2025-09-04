import React from 'react'
import { EmailSignup } from '../components/EmailSignup'

export function CTA(){
  return (
    <section id="cta" className="section text-center py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <div className="text-center">
          <h2 className="h1 font-normal font-helvetica text-center mb-6">Get early access</h2>
          <p className="sub max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed mb-8">
            Join our waitlist to be the first to access our platform.
          </p>
          <EmailSignup 
            placeholder="Enter your work email"
            buttonText="Join waitlist"
            size="large"
            className="mt-8"
          />
        </div>
      </div>
    </section>
  )
}


