import React from 'react'
import { Button } from './Button'

export const ButtonArea = ({handleOnClick}) => {
  const buttons = [{
      label:"AC",
      clsNm: "clear"
  },
  {
      label: "C",
      clsNm: "clean"

  },
  {
      label: "/",
      clsNm: "divide"

  },
  {
      label: "*",
      clsNm: "multi"

  },
  {
      label: "+",
      clsNm: "plus"
  },
  {
      label: "-",
      clsNm: "minus"

  },
  {
      label: "7",
      clsNm: "no-7"

  },
  {
      label: "8",
      clsNm: "no-8"

  },
  {
      label: "9",
      clsNm: "no-9"

  },
  {
      label: "6",
      clsNm: "no-6"

  },
  {
      label: "5",
      clsNm: "no-5"

  },
  {
      label: "4",
      clsNm: "no-4"

  },
  {
      label: "3",
      clsNm: "no-3"

  },
  {
      label: "2",
      clsNm: "no-2"

  },
  {
      label: "1",
      clsNm: "no-1"

  },
  {
      label: "0",
      clsNm: "no-0"

  },
  
  {
      label: ".",
      clsNm: "dot"

  },
  {
      label: "=",
      clsNm: "ans"

  }]

    return (
<div className="items">
        {buttons.map((item, i)=>{
            // return <Button key={i} clsNm={item.clsNm} label={item.label}/>
            return <Button handleOnClick={handleOnClick} key={i} {...item}/>
        })}
        </div>
        )
    }

