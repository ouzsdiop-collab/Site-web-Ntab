import React from 'react'

export default function Button({ children, variant = 'primary', href, onClick, ...props }) {
  const Tag = href ? 'a' : 'button'
  return (
    <Tag className={`btn btn--${variant}`} href={href} onClick={onClick} {...props}>
      {children}
    </Tag>
  )
}
