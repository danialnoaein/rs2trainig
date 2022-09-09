import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>MAIN PAGE</h1>} />
        <Route path="/about" element={<h1>ABOUT ME PAGE</h1>} />
      </Routes>
    </div>
  );
}

export default App;
