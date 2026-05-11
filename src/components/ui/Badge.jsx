import React from 'react'

export default function Badge({ children, color }) {
  return <span className="badge" style={color ? { background: color } : {}}>{children}</span>
}
