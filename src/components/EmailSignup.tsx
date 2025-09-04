import React, { useState } from 'react'

interface EmailSignupProps {
  placeholder?: string
  buttonText?: string
  className?: string
  size?: 'small' | 'large'
}

export function EmailSignup({ 
  placeholder = "Enter your email address", 
  buttonText = "Join waitlist",
  className = "",
  size = 'large'
}: EmailSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')
    
    try {
      // Using your new Formspree form
      const formData = new FormData()
      formData.append('email', email)
      formData.append('source', 'waitlist')
      formData.append('_subject', 'New Waitlist Signup - Fluentive')
      formData.append('message', `New waitlist signup from: ${email}`)
      
      const response = await fetch('https://formspree.io/f/xpwjopvy', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus('success')
        setMessage('Thanks! You\'re on the waitlist.')
        setEmail('')
      } else {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to submit')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
      console.error('Form submission failed:', error)
    }
  }

  const inputClasses = size === 'large' 
    ? "flex-1 px-4 py-3 md:px-6 md:py-4 text-base md:text-lg"
    : "flex-1 px-3 py-2 text-sm md:text-base"
    
  const buttonClasses = size === 'large'
    ? "px-6 py-3 md:px-8 md:py-4 text-base md:text-lg"
    : "px-4 py-2 text-sm md:text-base"

  if (status === 'success') {
    return (
      <div className={`text-center ${className}`}>
        <div className="inline-flex items-center gap-2 text-green-600 font-medium">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          {message}
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          disabled={status === 'loading'}
          className={`${inputClasses} bg-white/90 border border-black/10 rounded-full focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-transparent placeholder-gray-500 disabled:opacity-50`}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`${buttonClasses} btn-gradient-dark rounded-full text-white/90 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap`}
        >
          {status === 'loading' ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-stroke-black">Joining...</span>
            </span>
          ) : (
            <span className="text-stroke-black">{buttonText}</span>
          )}
        </button>
      </form>
      
      {status === 'error' && (
        <p className="text-red-600 text-sm mt-2 text-center">{message}</p>
      )}
    </div>
  )
}
