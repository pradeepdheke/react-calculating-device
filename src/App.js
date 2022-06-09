import { useState } from 'react';
import './App.css';
import { ButtonArea } from './components/ButtonArea';
import { Display } from './components/Display';

function App() {
  const [str, setStr] = useState("")

const handleOnClick = (value) => {

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

  setStr(str + value)
}

const onTotal = () => {
  const ttl = eval(str)
  setStr(ttl.toFixed(2).toString())
}

  return (
    <div className="App">
      <div className="wrapper">
			<h1>Prank calculator 🤣</h1>

			<div className="mainParent">
				{/* <!-- display area --> */}
			<Display str={str}/>
				{/* <!-- buttons --> */}

        <ButtonArea handleOnClick={handleOnClick}/>
			</div>
		</div>
    </div>
  );
}

export default App;
