import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Pages/About';
import Agents from './Pages/Agents';
import Property from './Pages/Property';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Landscape from './Pages/Landscape';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VisitPopup from './Pages/VisitPopup';

function App() {
  return (
    <div className="App">
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Home" element={<Hero />} />
          <Route path="/Agents" element={<Agents />} />
          <Route path="/Property" element={<Property />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Landscape" element={<Landscape />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;