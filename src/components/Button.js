import React from 'react'

export const Button = ({clsNm, label, handleOnClick}) => {
    
  return (
    <button className={clsNm} onClick={()=>handleOnClick(label)}>{label}</button>
  )
}
