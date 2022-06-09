import './App.css';
import { ButtonArea } from './components/ButtonArea';
import { Display } from './components/Display';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
			<h1>Prank calculator 🤣</h1>

			<div className="mainParent">
				{/* <!-- display area --> */}
			<Display/>
				{/* <!-- buttons --> */}

        <ButtonArea/>
			</div>
		</div>
    </div>
  );
}

export default App;
