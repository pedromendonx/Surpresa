import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './App.css'
import PagInicial from './components/PagInicial.jsx';
import Momentos from './components/Momentos.jsx';
import Game from './components/game.jsx';
import Tempo from './components/Tempo.jsx';
import ScrollToTop from './components/ScrollToTop'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [count, setCount] = useState(0)

  return (
  <Router>
     <ScrollToTop /> 
    <Routes>
      <Route path="/" element={

       <>
       <PagInicial />
       <Momentos />
       </>

      } />
      <Route path="/Game" element={<Game />} />
      <Route path="/tempo" element={<Tempo />} />
    </Routes>
  </Router>
  )
}

export default App
