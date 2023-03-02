import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navigation from './components/navagation';
import Home from './components/home';
import Quote from './components/quote';
import Default from './components/default';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route element={<div className="back-page" />} />
        <Route path="/mathmatica" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
