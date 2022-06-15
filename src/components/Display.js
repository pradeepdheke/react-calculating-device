import React from 'react'

export const Display = ({str, isPrank}) => {
  const clsNm = isPrank ? "display prank" : "display"
  return (
    <div>
        <div id="result" className={clsNm}>{str || "0.00"}</div>
    </div>
  )
}
