import React from 'react'

export default function BackgroundGrid({ children }) {
  return (
    <div className="bg-grid-wrapper">
      <div className="bg-grid" aria-hidden="true" />
      {children}
    </div>
  )
}
