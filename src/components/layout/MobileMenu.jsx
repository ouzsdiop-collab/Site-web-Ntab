import React, { useState } from 'react'

export default function MobileMenu({ items = [] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="mobile-menu">
      <button onClick={() => setOpen(!open)} aria-label="Menu">
        <span />
        <span />
        <span />
      </button>
      {open && (
        <nav className="mobile-nav">
          {items.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
        </nav>
      )}
    </div>
  )
}
