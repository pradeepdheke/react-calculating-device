import React from 'react'

export const Display = ({str}) => {
  return (
    <div>
        <div id="result" className="result">{str || "0.00"}</div>
    </div>
  )
}
