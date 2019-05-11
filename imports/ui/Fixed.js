import React from 'react'

function Fixed({ children, top = null, bottom = null }) {
  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 999,
        left: 0,
        top: top,
        bottom: bottom,
        width: '100%',
      }}
    >
      <div style={{ margin: '0 auto', maxWidth: 600 }}>{children}</div>
    </div>
  )
}

export default Fixed
