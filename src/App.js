import './App.css';
import Intro from './components/Intro';
import NNVisualizer from './components/NNVisualizer';
import DerivativeMath from './components/DerivativeMath';

function App() {
  return (
    <div className="App">
      <Intro />
      <NNVisualizer />
      <DerivativeMath></DerivativeMath>
    </div>
  );
}

export default App;
