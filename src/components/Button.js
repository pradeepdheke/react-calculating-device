import React from 'react'

export const Button = ({clsNm, label}) => {
  return (
    <button className={clsNm}>{label}</button>
  )
}
