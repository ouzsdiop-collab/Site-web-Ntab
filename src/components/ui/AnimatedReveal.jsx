import React from 'react'

export default function AnimatedReveal({ children, className = '' }) {
  return <div className={`animated-reveal ${className}`}>{children}</div>
}
