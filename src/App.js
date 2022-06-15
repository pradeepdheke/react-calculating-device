import { useState } from 'react';
import './App.css';
import { ButtonArea } from './components/ButtonArea';
import { Display } from './components/Display';
import b from './b.wav'

const operators = ["+", "-", "*", "/", "%"]
function App() {
  const [str, setStr] = useState("")
  const [isPrank, setIsPrank] = useState(false)
  const [lastOperators, setLastOperators] = useState("")
  const [audio] = useState(new Audio(b))

const handleOnClick = (value) => {
  isPrank && setIsPrank(false)

  if (value=== "AC") {

    setStr("")
    return
  }

  if (value === "=" ) {
    return onTotal()
  }

if (value === "C") {
  const temStr = str.slice(0, -1)
  setStr(temStr)
  return
}

if (operators.includes(value)) {
  setLastOperators(value)
  const lastChar = str.slice(-1)
  if (operators.includes(lastChar)) {
    const strWithoutLastChar = str.slice(0, -1)
    setStr(strWithoutLastChar + value)
    return
  }
}

if (value === ".") {
  if (lastOperators) {
    const positionOfLastOperator = str.lastIndexOf(lastOperators)
    const afterLastOperator = str.slice(positionOfLastOperator + 1)

    if (afterLastOperator.includes(".")) {
      return
    } 
  } else {
    if (str.includes(".")) {
      return
    }
  }
}

  setStr(str + value)
}

const onTotal = () => {
  const prankVal = randomNumber()
  prankVal>0 && audio.play() && setIsPrank(true)
  const ttl = eval(str) + prankVal
  setStr(ttl.toFixed(2).toString())
}

const randomNumber = () => {
  const num = Math.ceil(Math.random() * 10)

  return num > 3 ? 0 : num
}

  return (
    <div className="App">
      <div className="wrapper">
			<h1>Prank calculator 🤣</h1>

			<div className="mainParent">
				{/* <!-- display area --> */}
			<Display str={str} isPrank = {isPrank}/>
				{/* <!-- buttons --> */}

        <ButtonArea handleOnClick={handleOnClick}/>
			</div>
		</div>
    </div>
  );
}

export default App;
