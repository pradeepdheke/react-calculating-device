import './App.css';
import { ButtonArea } from './components/ButtonArea';
import { Display } from './components/Display';

function App() {
  return (
    <div className="App">
      <div class="wrapper">
			<h1>Prank calculator 🤣</h1>

			<div class="mainParent">
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
