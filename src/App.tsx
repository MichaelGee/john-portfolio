import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SmoothScrollProvider from './components/SmoothScrollProvider';

function App() {
  return (
    <BrowserRouter>
      <SmoothScrollProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </SmoothScrollProvider>
    </BrowserRouter>
  );
}

export default App;
